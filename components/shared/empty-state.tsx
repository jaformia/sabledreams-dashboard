type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="card stack">
      <h2>{title}</h2>
      <p className="muted">{description}</p>
    </div>
  );
}
