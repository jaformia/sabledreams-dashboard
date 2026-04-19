"use client";

type SubscriptionStat = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
};

type Plan = {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  users: string;
  badge?: string;
  featured?: boolean;
};

type SubscriptionRow = {
  id: string;
  name: string;
  email: string;
  plan: string;
  status: "Active" | "Cancelled" | "Expired";
  billingDate: string;
  payment: "Paid" | "Failed" | "N/A";
  avatarTone: string;
};

const stats: SubscriptionStat[] = [
  { label: "Total Revenue", value: "$124,582", change: "+12%", positive: true },
  { label: "Monthly Revenue (MRR)", value: "$12,240", change: "+8.4%", positive: true },
  { label: "Active Subscriptions", value: "1,402", change: "+21%", positive: true },
  { label: "Cancelled (This Month)", value: "42", change: "-3%", positive: false },
];

const plans: Plan[] = [
  {
    name: "Free Plan",
    subtitle: "Basic journaling features",
    price: "$0",
    period: "/ forever",
    users: "850 active users",
    badge: "Standard",
  },
  {
    name: "Monthly Premium",
    subtitle: "Advanced insights & storage",
    price: "$9.99",
    period: "/ mo",
    users: "430 active users",
    badge: "Most Popular",
    featured: true,
  },
  {
    name: "Yearly Premium",
    subtitle: "Best value for power users",
    price: "$99",
    period: "/ yr",
    users: "122 active users",
  },
];

const subscriptions: SubscriptionRow[] = [
  {
    id: "s_101",
    name: "Sarah Jenkins",
    email: "sarah.j@example.com",
    plan: "Monthly Premium",
    status: "Active",
    billingDate: "Oct 24, 2023",
    payment: "Paid",
    avatarTone: "sand",
  },
  {
    id: "s_102",
    name: "Marcus Thorne",
    email: "m.thorne@company.io",
    plan: "Yearly Premium",
    status: "Cancelled",
    billingDate: "Nov 02, 2023",
    payment: "Failed",
    avatarTone: "ink",
  },
  {
    id: "s_103",
    name: "Elena James",
    email: "elena.j@web.net",
    plan: "Monthly Premium",
    status: "Active",
    billingDate: "Oct 28, 2023",
    payment: "Paid",
    avatarTone: "mauve",
  },
  {
    id: "s_104",
    name: "David Miller",
    email: "david.miller@gmail.com",
    plan: "Free",
    status: "Expired",
    billingDate: "Sep 15, 2023",
    payment: "N/A",
    avatarTone: "teal",
  },
];

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="subscriptions-search-icon">
      <circle cx="9" cy="9" r="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m13 13 3.5 3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="subscriptions-filter-chevron">
      <path d="m5.5 7.5 4.5 4.8 4.5-4.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="subscriptions-button-icon">
      <path d="M10 4.5v11M4.5 10h11" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="subscriptions-inline-icon">
      <circle cx="7.2" cy="8.2" r="2.1" fill="currentColor" opacity="0.7" />
      <circle cx="12.6" cy="8.7" r="1.8" fill="currentColor" opacity="0.45" />
      <path d="M3.8 14.4c.5-1.9 2-3 4.1-3s3.6 1.1 4.1 3" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="subscriptions-inline-icon">
      <path d="M10 4.2v7.1m0 0 2.6-2.6M10 11.3 7.4 8.7M5.2 14.8h9.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="subscriptions-action-icon">
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

function BanIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="subscriptions-action-icon">
      <circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="m6.1 13.9 7.8-7.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="subscriptions-action-icon">
      <path d="M15.3 7.8A5.8 5.8 0 0 0 5 6.5m-.3-2v2.9h2.9M4.7 12.2A5.8 5.8 0 0 0 15 13.5m.3 2v-2.9h-2.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function PaymentDot({ payment }: { payment: SubscriptionRow["payment"] }) {
  if (payment === "Paid") {
    return <i className="subscriptions-payment-dot paid" />;
  }

  if (payment === "Failed") {
    return <i className="subscriptions-payment-dot failed" />;
  }

  return <i className="subscriptions-payment-dot neutral" />;
}

export default function SubscriptionsPage() {
  return (
    <section className="subscriptions-page">
      <header className="subscriptions-header">
        <div>
          <h1>Subscriptions</h1>
          <p>Manage plans, payments and user subscriptions</p>
        </div>

        <div className="subscriptions-header-actions">
          <label className="subscriptions-global-search">
            <SearchIcon />
            <input type="text" placeholder="Search global..." />
          </label>

          <button type="button" className="subscriptions-create-button">
            <PlusIcon />
            Create Plan
          </button>
        </div>
      </header>

      <div className="subscriptions-stat-grid">
        {stats.map((stat) => (
          <article key={stat.label} className="subscriptions-stat-card">
            <span>{stat.label}</span>
            <div className="subscriptions-stat-row">
              <strong>{stat.value}</strong>
              <em className={stat.positive ? "positive" : "negative"}>{stat.change}</em>
            </div>
          </article>
        ))}
      </div>

      <section className="subscriptions-tier-section">
        <div className="subscriptions-section-heading">
          <h2>Subscription Tiers</h2>
        </div>

        <div className="subscriptions-plan-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`subscriptions-plan-card${plan.featured ? " featured" : ""}`}>
              {plan.badge ? (
                <span className={`subscriptions-plan-badge${plan.featured ? " featured" : ""}`}>{plan.badge}</span>
              ) : null}

              <div className="subscriptions-plan-copy">
                <h3>{plan.name}</h3>
                <p>{plan.subtitle}</p>
              </div>

              <div className="subscriptions-plan-price">
                <strong>{plan.price}</strong>
                <span>{plan.period}</span>
              </div>

              <div className="subscriptions-plan-users">
                <PeopleIcon />
                <span>{plan.users}</span>
              </div>

              <button type="button" className={`subscriptions-plan-button${plan.featured ? " featured" : ""}`}>
                Edit Plan
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="subscriptions-table-card">
        <div className="subscriptions-table-toolbar">
          <label className="subscriptions-table-search">
            <SearchIcon />
            <input type="text" placeholder="Search users or emails..." />
          </label>

          <button type="button" className="subscriptions-filter">
            <span>All Plans</span>
            <ChevronDownIcon />
          </button>

          <button type="button" className="subscriptions-filter">
            <span>Status: All</span>
            <ChevronDownIcon />
          </button>

          <button type="button" className="subscriptions-filter">
            <span>Payment: All</span>
            <ChevronDownIcon />
          </button>

          <button type="button" className="subscriptions-export-button">
            <DownloadIcon />
            Export CSV
          </button>
        </div>

        <div className="subscriptions-table-wrap">
          <table className="subscriptions-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Billing Date</th>
                <th>Payment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((subscription) => (
                <tr key={subscription.id}>
                  <td>
                    <div className="subscriptions-user-cell">
                      <span className={`subscriptions-avatar ${subscription.avatarTone}`}>{subscription.name.charAt(0)}</span>
                      <strong>{subscription.name}</strong>
                    </div>
                  </td>
                  <td>{subscription.email}</td>
                  <td>
                    <span className={`subscriptions-table-pill plan ${subscription.plan.toLowerCase().replace(/\s+/g, "-")}`}>
                      {subscription.plan}
                    </span>
                  </td>
                  <td>
                    <span className={`subscriptions-table-pill status ${subscription.status.toLowerCase()}`}>
                      <i />
                      {subscription.status}
                    </span>
                  </td>
                  <td>{subscription.billingDate}</td>
                  <td>
                    <span className={`subscriptions-payment ${subscription.payment.toLowerCase().replace("/", "").replace(/\s+/g, "-")}`}>
                      <PaymentDot payment={subscription.payment} />
                      {subscription.payment}
                    </span>
                  </td>
                  <td>
                    <div className="subscriptions-actions">
                      <button type="button" className="subscriptions-action-button" aria-label={`View ${subscription.name}`}>
                        <EyeIcon />
                      </button>
                      <button type="button" className="subscriptions-action-button" aria-label={`Cancel ${subscription.name}`}>
                        <BanIcon />
                      </button>
                      <button type="button" className="subscriptions-action-button" aria-label={`Refresh ${subscription.name}`}>
                        <RefreshIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="subscriptions-table-footer">
          <p>
            Showing <strong>1-10</strong> of <strong>482</strong> subscriptions
          </p>

          <nav className="subscriptions-pagination" aria-label="Subscriptions pagination">
            <button type="button" className="subscriptions-page-button secondary">
              {"<"}
            </button>
            <button type="button" className="subscriptions-page-button active">
              1
            </button>
            <button type="button" className="subscriptions-page-button number">
              2
            </button>
            <button type="button" className="subscriptions-page-button number">
              3
            </button>
            <span className="subscriptions-page-dots">...</span>
            <button type="button" className="subscriptions-page-button number">
              48
            </button>
            <button type="button" className="subscriptions-page-button secondary">
              {">"}
            </button>
          </nav>
        </footer>
      </section>
    </section>
  );
}
