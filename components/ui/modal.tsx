type ModalProps = {
  title: string;
  description?: string;
  open?: boolean;
  children?: React.ReactNode;
};

export function Modal({
  title,
  description,
  open = false,
  children,
}: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      aria-modal="true"
      role="dialog"
      style={{
        position: "fixed",
        inset: 0,
        display: "grid",
        placeItems: "center",
        background: "rgba(29, 27, 24, 0.35)",
        padding: 24,
      }}
    >
      <div className="card" style={{ width: "min(100%, 520px)" }}>
        <div className="stack">
          <h2>{title}</h2>
          {description ? <p className="muted">{description}</p> : null}
          {children}
        </div>
      </div>
    </div>
  );
}
