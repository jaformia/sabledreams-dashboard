export function Navbar() {
  return (
    <header className="dashboard-navbar">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div>
          <strong>Workspace</strong>
          <p className="muted" style={{ margin: "4px 0 0" }}>
            Base scaffold ready for UI customization.
          </p>
        </div>
        <span className="badge">Admin</span>
      </div>
    </header>
  );
}
