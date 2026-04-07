function BellIcon() {
  return (
    <svg aria-hidden="true" className="dashboard-header-icon" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4.75a4.25 4.25 0 0 0-4.25 4.25v2.06c0 .56-.2 1.1-.57 1.53l-1.1 1.3c-.73.87-.11 2.2 1.03 2.2h9.78c1.14 0 1.76-1.33 1.03-2.2l-1.1-1.3a2.38 2.38 0 0 1-.57-1.53V9A4.25 4.25 0 0 0 12 4.75Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M10.1 18.25a2 2 0 0 0 3.8 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Navbar() {
  return (
    <header className="dashboard-navbar">
      <div className="dashboard-header-actions">
        <button className="dashboard-icon-button" type="button" aria-label="Notifications">
          <BellIcon />
          <span className="dashboard-notification-dot" />
        </button>
        <button className="dashboard-avatar" type="button" aria-label="Profile">
          SJ
        </button>
      </div>
    </header>
  );
}
