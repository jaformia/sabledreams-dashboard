"use client";

type UserRow = {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  subscription: "Premium" | "Free";
  status: "Active" | "Suspended";
  avatarTone: string;
};

const users: UserRow[] = [
  {
    id: "u_101",
    name: "Alex Johnson",
    email: "alex.j@example.com",
    joinDate: "Oct 24, 2023",
    subscription: "Premium",
    status: "Active",
    avatarTone: "sand",
  },
  {
    id: "u_102",
    name: "Sarah Williams",
    email: "sarah.w@example.com",
    joinDate: "Nov 12, 2023",
    subscription: "Free",
    status: "Active",
    avatarTone: "teal",
  },
  {
    id: "u_103",
    name: "Marcus Lee",
    email: "m.lee@example.com",
    joinDate: "Dec 01, 2023",
    subscription: "Premium",
    status: "Suspended",
    avatarTone: "ink",
  },
  {
    id: "u_104",
    name: "Elena Vance",
    email: "elena.v@example.com",
    joinDate: "Jan 05, 2024",
    subscription: "Free",
    status: "Active",
    avatarTone: "sky",
  },
];

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="users-search-icon">
      <circle cx="9" cy="9" r="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m13 13 3.5 3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="users-filter-chevron">
      <path d="m5.5 7.5 4.5 4.8 4.5-4.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="users-action-icon">
      <path
        d="M2.2 10s2.8-4.2 7.8-4.2 7.8 4.2 7.8 4.2-2.8 4.2-7.8 4.2S2.2 10 2.2 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="10" cy="10" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="users-action-icon">
      <rect x="5.4" y="5" width="2.8" height="10" rx="1.1" fill="currentColor" />
      <rect x="11.8" y="5" width="2.8" height="10" rx="1.1" fill="currentColor" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="users-action-icon">
      <path d="M7 5.8c0-.9 1-.5 1.5-.2l5.4 3.2c.8.5.8 1.6 0 2.1l-5.4 3.2c-.5.3-1.5.7-1.5-.2Z" fill="currentColor" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="users-action-icon">
      <path d="M5.8 6.4h8.4m-7.3 0 .4 8.2m2.7-8.2v8.2m3-8.2-.5 8.2M7.7 4.6h4.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export default function UsersPage() {
  return (
    <section className="users-page">
      <header className="users-page-header">
        <div>
          <h1>User Management</h1>
          <p>Manage all registered users, their permissions and subscription status.</p>
        </div>
      </header>

      <div className="users-toolbar">
        <label className="users-search">
          <SearchIcon />
          <input type="text" placeholder="Search by name or email..." />
        </label>

        <button type="button" className="users-filter">
          <span>Status: All</span>
          <ChevronDownIcon />
        </button>

        <button type="button" className="users-filter">
          <span>Subscription: All</span>
          <ChevronDownIcon />
        </button>

        <button type="button" className="users-filter">
          <span>Sort by: Newest</span>
          <ChevronDownIcon />
        </button>
      </div>

      <section className="users-table-card">
        <div className="users-table-wrap">
          <table className="users-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email Address</th>
                <th>Join Date</th>
                <th>Subscription</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="users-user-cell">
                      <span className={`users-avatar ${user.avatarTone}`}>{user.name.charAt(0)}</span>
                      <strong>{user.name}</strong>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.joinDate}</td>
                  <td>
                    <span className={`users-pill subscription ${user.subscription.toLowerCase()}`}>
                      {user.subscription}
                    </span>
                  </td>
                  <td>
                    <span className={`users-pill status ${user.status.toLowerCase()}`}>
                      <i />
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <div className="users-actions">
                      <button type="button" className="users-action-button" aria-label={`View ${user.name}`}>
                        <EyeIcon />
                      </button>
                      <button
                        type="button"
                        className={`users-action-button ${user.status === "Suspended" ? "highlight" : ""}`}
                        aria-label={user.status === "Suspended" ? `Resume ${user.name}` : `Pause ${user.name}`}
                      >
                        {user.status === "Suspended" ? <PlayIcon /> : <PauseIcon />}
                      </button>
                      <button type="button" className="users-action-button delete" aria-label={`Delete ${user.name}`}>
                        <TrashIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="users-table-footer">
          <p>
            Showing <strong>1-10</strong> of <strong>256</strong> users
          </p>

          <nav className="users-pagination" aria-label="Users pagination">
            <button type="button" className="users-page-button secondary">
              Previous
            </button>
            <button type="button" className="users-page-button active">
              1
            </button>
            <button type="button" className="users-page-button number">
              2
            </button>
            <button type="button" className="users-page-button number">
              3
            </button>
            <span className="users-page-dots">...</span>
            <button type="button" className="users-page-button number">
              26
            </button>
            <button type="button" className="users-page-button secondary">
              Next
            </button>
          </nav>
        </footer>
      </section>
    </section>
  );
}
