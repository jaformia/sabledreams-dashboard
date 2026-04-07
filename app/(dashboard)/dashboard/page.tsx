const statCards = [
  { label: "Total Users", value: "54,230", change: "12%", positive: true },
  { label: "New Users", value: "1,204", change: "8.4%", positive: true },
  { label: "Journal Entries", value: "1.2M", change: "15%", positive: true },
  { label: "Mood Logs", value: "842K", change: "2.1%", positive: false },
  { label: "Active Goals", value: "12.5k", change: "4.7%", positive: true },
  { label: "Premium Subs", value: "3,420", change: "22%", positive: true },
];

const growthBars = [
  { month: "Jan", height: 62 },
  { month: "Feb", height: 95 },
  { month: "Mar", height: 70 },
  { month: "Apr", height: 124 },
  { month: "May", height: 116 },
  { month: "Jun", height: 152 },
  { month: "Jul", height: 170 },
];

const users = [
  { name: "Sarah Johnson", email: "sarah.j@example.com", joined: "Oct 24, 2023", status: "Active" },
  { name: "Marcus Chen", email: "m.chen@outlook.com", joined: "Oct 23, 2023", status: "Pending" },
  { name: "David Miller", email: "david.mill@gmail.com", joined: "Oct 22, 2023", status: "Active" },
];

const activities = [
  { tone: "blue", title: "Sarah J. created a new entry", time: "2 minutes ago" },
  { tone: "green", title: "New Premium Subscription", time: "15 minutes ago" },
  { tone: "yellow", title: "Liam Taylor joined the platform", time: "1 hour ago" },
  { tone: "blue", title: "Milestone Reached: 50,000 entries", time: "3 hours ago" },
];

export default function DashboardPage() {
  return (
    <section className="dashboard-overview">
      <div className="dashboard-overview-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Platform Overview</p>
        </div>
      </div>

      <div className="dashboard-stat-grid">
        {statCards.map((card) => (
          <article key={card.label} className="dashboard-stat-card">
            <span>{card.label}</span>
            <div className="dashboard-stat-row">
              <strong>{card.value}</strong>
              <em className={card.positive ? "positive" : "negative"}>
                {card.positive ? "↗" : "↘"} {card.change}
              </em>
            </div>
          </article>
        ))}
      </div>

      <div className="dashboard-main-grid">
        <article className="dashboard-panel dashboard-growth-panel">
          <div className="dashboard-panel-header">
            <h2>User Growth</h2>
            <span className="dashboard-growth-key">
              <i />
              Growth Rate
            </span>
          </div>
          <div className="dashboard-chart">
            <div className="dashboard-chart-grid" />
            <div className="dashboard-bars">
              {growthBars.map((bar) => (
                <div key={bar.month} className="dashboard-bar-item">
                  <div className="dashboard-bar-track">
                    <div className="dashboard-bar-fill" style={{ height: `${bar.height}px` }} />
                  </div>
                  <span>{bar.month}</span>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="dashboard-panel dashboard-mood-panel">
          <div className="dashboard-panel-header">
            <h2>Mood Distribution</h2>
          </div>
          <div className="dashboard-donut">
            <div className="dashboard-donut-inner">
              <strong>124k</strong>
              <span>Logs Today</span>
            </div>
          </div>
          <div className="dashboard-mood-list">
            <div><i className="positive" /> Positive <strong>65%</strong></div>
            <div><i className="neutral" /> Neutral <strong>25%</strong></div>
            <div><i className="challenging" /> Challenging <strong>10%</strong></div>
          </div>
        </article>
      </div>

      <div className="dashboard-bottom-grid">
        <article className="dashboard-panel dashboard-users-panel">
          <div className="dashboard-panel-header">
            <h2>Recent Users</h2>
            <a href="#">View All</a>
          </div>
          <div className="dashboard-table-wrap">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Joined</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.email}>
                    <td>
                      <div className="dashboard-user-cell">
                        <span className="dashboard-user-avatar">{user.name.charAt(0)}</span>
                        <strong>{user.name}</strong>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.joined}</td>
                    <td>
                      <span className={`dashboard-status ${user.status.toLowerCase()}`}>{user.status}</span>
                    </td>
                    <td>•••</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="dashboard-panel dashboard-activity-panel">
          <div className="dashboard-panel-header">
            <h2>Recent Activity</h2>
          </div>
          <div className="dashboard-activity-list">
            {activities.map((item) => (
              <div key={item.title} className="dashboard-activity-item">
                <span className={`dashboard-activity-dot ${item.tone}`}>✓</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
