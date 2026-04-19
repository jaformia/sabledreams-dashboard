"use client";

type ContentRow = {
  id: string;
  text: string;
  category: "Self-Love" | "Growth" | "Mindfulness" | "Positivity";
  schedule: string;
  time: string;
  status: "Active" | "Scheduled";
  picked: boolean;
};

const tabs = ["Affirmations", "App Texts", "AI Prompts", "Static Pages"] as const;

const rows: ContentRow[] = [
  {
    id: "a_101",
    text: "You are enough exactly as you are in this moment.",
    category: "Self-Love",
    schedule: "Daily",
    time: "8:00 AM",
    status: "Active",
    picked: true,
  },
  {
    id: "a_102",
    text: "Your potential is limitless and grows every day.",
    category: "Growth",
    schedule: "Weekly",
    time: "Mon, 7:00 AM",
    status: "Scheduled",
    picked: false,
  },
  {
    id: "a_103",
    text: "Inhale calm, exhale stress and tension.",
    category: "Mindfulness",
    schedule: "Daily",
    time: "9:30 PM",
    status: "Active",
    picked: false,
  },
  {
    id: "a_104",
    text: "Today is filled with opportunity and promise.",
    category: "Positivity",
    schedule: "Daily",
    time: "6:00 AM",
    status: "Active",
    picked: false,
  },
];

function FilterIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="content-filter-icon">
      <path d="M4 5h12l-4.8 5.6v3.7l-2.4 1.2v-4.9Z" fill="currentColor" opacity="0.72" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="content-chevron-icon">
      <path d="m5.5 7.5 4.5 4.8 4.5-4.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="content-view-icon">
      <path d="M4.5 6h11M4.5 10h8.5M4.5 14h6.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="content-view-icon">
      <rect x="4" y="4" width="4" height="4" rx="1" fill="currentColor" />
      <rect x="12" y="4" width="4" height="4" rx="1" fill="currentColor" />
      <rect x="4" y="12" width="4" height="4" rx="1" fill="currentColor" />
      <rect x="12" y="12" width="4" height="4" rx="1" fill="currentColor" />
    </svg>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`content-star-icon${filled ? " filled" : ""}`}>
      <path
        d="m10 3.6 1.9 3.8 4.2.6-3 2.9.7 4.1-3.8-2-3.8 2 .7-4.1-3-2.9 4.2-.6Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContentPage() {
  return (
    <section className="content-page">
      <header className="content-header">
        <div>
          <h1>Content Management</h1>
          <p>Manage app content, daily affirmations, and static text components.</p>
        </div>
      </header>

      <nav className="content-tabs" aria-label="Content sections">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            type="button"
            className={`content-tab${index === 0 ? " active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <section className="content-table-card">
        <div className="content-toolbar">
          <label className="content-search">
            <FilterIcon />
            <input type="text" placeholder="Filter affirmations..." />
          </label>

          <button type="button" className="content-filter">
            <span>All Categories</span>
            <ChevronDownIcon />
          </button>

          <div className="content-view-switch">
            <button type="button" className="content-view-button" aria-label="List view">
              <ListIcon />
            </button>
            <button type="button" className="content-view-button" aria-label="Grid view">
              <GridIcon />
            </button>
          </div>
        </div>

        <div className="content-table-wrap">
          <table className="content-table">
            <thead>
              <tr>
                <th>Affirmation</th>
                <th>Category</th>
                <th>Schedule</th>
                <th>Status</th>
                <th>Today's Pick</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <strong className="content-affirmation-text">{row.text}</strong>
                  </td>
                  <td>
                    <span className={`content-pill category ${row.category.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                      {row.category}
                    </span>
                  </td>
                  <td>
                    <div className="content-schedule">
                      <strong>{row.schedule}</strong>
                      <span>{row.time}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`content-pill status ${row.status.toLowerCase()}`}>
                      <i />
                      {row.status}
                    </span>
                  </td>
                  <td>
                    <button type="button" className="content-star-button" aria-label={`Toggle pick for ${row.text}`}>
                      <StarIcon filled={row.picked} />
                    </button>
                  </td>
                  <td />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="content-table-footer">
          <p>
            Showing <strong>1-4</strong> of <strong>150</strong> items
          </p>

          <nav className="content-pagination" aria-label="Content pagination">
            <button type="button" className="content-page-button secondary">
              {"<"}
            </button>
            <button type="button" className="content-page-button active">
              1
            </button>
            <button type="button" className="content-page-button number">
              2
            </button>
            <button type="button" className="content-page-button number">
              3
            </button>
            <span className="content-page-dots">...</span>
            <button type="button" className="content-page-button number">
              15
            </button>
            <button type="button" className="content-page-button secondary">
              {">"}
            </button>
          </nav>
        </footer>
      </section>
    </section>
  );
}
