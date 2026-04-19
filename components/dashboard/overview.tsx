import Link from "next/link";
import {
  dashboardActivities,
  dashboardGrowth,
  dashboardMoodBreakdown,
  dashboardStats,
  dashboardUsers,
} from "@/constants/dashboard";
import { ROUTES } from "@/constants/routes";

export function DashboardOverview() {
  return (
    <section className="dashboard-overview">
      <div className="dashboard-overview-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Platform overview</p>
        </div>
      </div>

      <div className="dashboard-stat-grid">
        {dashboardStats.map((card) => (
          <article key={card.label} className="dashboard-stat-card">
            <span>{card.label}</span>
            <div className="dashboard-stat-row">
              <strong>{card.value}</strong>
              <em className={card.positive ? "positive" : "negative"}>{card.change}</em>
            </div>
          </article>
        ))}
      </div>

      <div className="dashboard-main-grid">
        <article className="dashboard-panel dashboard-growth-panel">
          <div className="dashboard-panel-header">
            <div>
              <h2>User Growth</h2>
              <p className="dashboard-panel-subtitle">Monthly member expansion with a live-style animated view.</p>
            </div>
            <span className="dashboard-growth-key">
              <i />
              Growth rate
            </span>
          </div>
          <div className="dashboard-chart">
            <div className="dashboard-chart-grid" />
            <div className="dashboard-bars">
              {dashboardGrowth.map((bar, index) => (
                <div
                  key={bar.month}
                  className="dashboard-bar-item"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
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
            <div>
              <h2>Mood Distribution</h2>
              <p className="dashboard-panel-subtitle">Sentiment balance from current daily check-ins.</p>
            </div>
          </div>
          <div className="dashboard-donut">
            <div className="dashboard-donut-inner">
              <strong>124K</strong>
              <span>Logs today</span>
            </div>
          </div>
          <div className="dashboard-mood-list">
            {dashboardMoodBreakdown.map((item) => (
              <div key={item.label}>
                <i className={item.tone} />
                {item.label}
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="dashboard-bottom-grid">
        <article className="dashboard-panel dashboard-users-panel">
          <div className="dashboard-panel-header">
            <h2>Recent Users</h2>
            <Link href={ROUTES.users}>View All</Link>
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
                {dashboardUsers.map((user) => (
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
                    <td className="dashboard-table-action">...</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="dashboard-panel dashboard-activity-panel">
          <div className="dashboard-panel-header">
            <div>
              <h2>Recent Activity</h2>
              <p className="dashboard-panel-subtitle">Latest platform actions and operational signals.</p>
            </div>
          </div>
          <div className="dashboard-activity-list">
            {dashboardActivities.map((item, index) => (
              <div
                key={item.title}
                className="dashboard-activity-item"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <span aria-hidden="true" className={`dashboard-activity-dot ${item.tone}`} />
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
