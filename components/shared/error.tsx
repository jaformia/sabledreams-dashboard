type ErrorStateProps = {
  message: string;
};

export function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="card stack">
      <h2>Something went wrong</h2>
      <p className="muted">{message}</p>
    </div>
  );
}
