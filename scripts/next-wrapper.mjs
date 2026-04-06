import { spawn } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  unlinkSync,
  watch,
  writeFileSync,
} from "node:fs";
import { join, resolve } from "node:path";

const mode = process.argv[2] ?? "dev";
const projectRoot = process.cwd();
const nextBin = resolve(projectRoot, "node_modules", "next", "dist", "bin", "next");
const serverDir = resolve(projectRoot, ".next", "server");
const chunksDir = join(serverDir, "chunks");
const numericChunkPattern = /^\d+\.js$/;

function syncServerChunks() {
  if (!existsSync(chunksDir)) {
    return;
  }

  mkdirSync(serverDir, { recursive: true });

  for (const file of readdirSync(chunksDir)) {
    if (!numericChunkPattern.test(file)) {
      continue;
    }

    const source = join(chunksDir, file);
    const target = join(serverDir, file);
    const sourceStat = statSync(source);
    const targetExists = existsSync(target);

    if (targetExists) {
      const targetStat = statSync(target);
      if (targetStat.size === sourceStat.size && targetStat.mtimeMs >= sourceStat.mtimeMs) {
        continue;
      }

      unlinkSync(target);
    }

    writeFileSync(target, readFileSync(source));
  }
}

function startChunkWatcher() {
  syncServerChunks();

  if (!existsSync(serverDir)) {
    mkdirSync(serverDir, { recursive: true });
  }

  let watcher;

  try {
    watcher = watch(serverDir, { recursive: true }, () => {
      try {
        syncServerChunks();
      } catch {
        // Ignore transient filesystem races while Next is emitting files.
      }
    });
  } catch {
    watcher = undefined;
  }

  const interval = setInterval(() => {
    try {
      syncServerChunks();
    } catch {
      // Ignore transient filesystem races while Next is emitting files.
    }
  }, 500);

  return () => {
    clearInterval(interval);
    watcher?.close();
  };
}

const stopWatching = startChunkWatcher();

const child = spawn(process.execPath, [nextBin, mode], {
  cwd: projectRoot,
  stdio: "inherit",
  env: process.env,
});

child.on("exit", (code, signal) => {
  stopWatching();

  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});

for (const event of ["SIGINT", "SIGTERM"]) {
  process.on(event, () => {
    child.kill(event);
  });
}
