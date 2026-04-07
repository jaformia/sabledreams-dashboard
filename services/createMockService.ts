export function createListService<T>(items: readonly T[]) {
  return {
    async list(): Promise<T[]> {
      return [...items];
    },
  };
}

export function createValueService<T>(value: T) {
  return {
    async get(): Promise<T> {
      return value;
    },
  };
}
