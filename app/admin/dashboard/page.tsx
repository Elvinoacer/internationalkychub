import { NotificationsIcon, SearchIcon } from "@/app/components/icons";
import Image from "next/image";

export default function AdminDashboardPage() {
  return (
    <main className="flex-1 overflow-y-auto">
      <Header />
      <div className="p-6 md:p-8">
        <Stats />
        <SalesPerformanceChart />
        <RecentOrdersAndTickets />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-10 py-3">
      <div className="flex items-center gap-4">
        <h2 className="text-heading-light dark:text-heading-dark text-lg font-bold leading-tight tracking-[-0.015em]">
          Dashboard Overview
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-4">
        <label className="flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-text-light dark:text-text-dark flex border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
              <SearchIcon className="text-xl" />
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-full placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              placeholder="Search..."
              value=""
            />
          </div>
        </label>
        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0">
          <NotificationsIcon className="text-2xl" />
        </button>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv0V_D8BwL3lTArotsqABPdghsQpFn6NiFVVg46e5RDkURzqavRq-iiHpM7qF_HJgW4RU9oH0US0m7vlF-EzcZ3ROc076e020dSkqIC2KS5-RLZdZOYgmSpodsC2R10ZGN-r_8dZ5bwgEH7KO7K2Hb2JXm98o3jLJ4XQLFUZlcrbFa1lK8YqLlpd0O0z8Byy5NHl5bodbrXsHTZdhNQECngWMLfNhTi8ZetCIT2bxCiu4nkCHsHpbevR4A7HzkU2tJHwwSynRCVdc"
            alt="Admin user avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Sales"
        value="$1,234,567"
        change="+5.2%"
        changeColor="text-success"
      />
      <StatCard
        title="Pending Orders"
        value="89"
        change="+1.8%"
        changeColor="text-warning"
      />
      <StatCard
        title="Open Support Tickets"
        value="12"
        change="-3.0%"
        changeColor="text-danger"
      />
      <StatCard
        title="Active Inventory"
        value="4,500"
        change="+0.5%"
        changeColor="text-success"
      />
    </div>
  );
}

function StatCard({
  title,
  value,
  change,
  changeColor,
}: {
  title: string;
  value: string;
  change: string;
  changeColor: string;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-light dark:bg-surface-dark shadow-sm border border-border-light dark:border-border-dark">
      <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
        {title}
      </p>
      <p className="text-heading-light dark:text-heading-dark tracking-tight text-3xl font-bold leading-tight">
        {value}
      </p>
      <p className={`${changeColor} text-base font-medium leading-normal`}>
        {change}
      </p>
    </div>
  );
}

function SalesPerformanceChart() {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6">
      <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-heading-light dark:text-heading-dark text-lg font-bold leading-tight tracking-[-0.015em]">
              Sales Performance
            </h3>
            <p className="text-text-light dark:text-text-dark text-sm">
              Visualize total sales over time.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-primary/10 text-primary dark:bg-primary/20">
              12 Months
            </button>
            <button className="px-3 py-1.5 text-sm font-medium rounded-md text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-white/10">
              30 Days
            </button>
            <button className="px-3 py-1.5 text-sm font-medium rounded-md text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-white/10">
              7 Days
            </button>
          </div>
        </div>
        <div className="h-80 w-full">
          <svg
            fill="none"
            height="100%"
            viewBox="0 0 800 320"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="chartGradientNew" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#0A4A8F" stopOpacity="0.4"></stop>
                <stop offset="95%" stopColor="#0A4A8F" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
            <g
              className="text-xs text-text-light dark:text-text-dark"
              textAnchor="middle"
            >
              <line
                className="stroke-border-light dark:stroke-border-dark"
                strokeWidth="1"
                x1="40"
                x2="780"
                y1="280"
                y2="280"
              ></line>
              <text x="75" y="300">
                Jan
              </text>
              <text x="135" y="300">
                Feb
              </text>
              <text x="195" y="300">
                Mar
              </text>
              <text x="255" y="300">
                Apr
              </text>
              <text x="315" y="300">
                May
              </text>
              <text x="375" y="300">
                Jun
              </text>
              <text x="435" y="300">
                Jul
              </text>
              <text x="495" y="300">
                Aug
              </text>
              <text x="555" y="300">
                Sep
              </text>
              <text x="615" y="300">
                Oct
              </text>
              <text x="675" y="300">
                Nov
              </text>
              <text x="735" y="300">
                Dec
              </text>
            </g>
            <g
              className="text-xs text-text-light dark:text-text-dark"
              textAnchor="end"
            >
              <line
                className="stroke-border-light dark:stroke-border-dark"
                strokeWidth="1"
                x1="40"
                x2="40"
                y1="280"
                y2="20"
              ></line>
              <text x="35" y="285">
                0
              </text>
              <text x="35" y="215">
                $50k
              </text>
              <text x="35" y="145">
                $100k
              </text>
              <text x="35" y="75">
                $150k
              </text>
              <text x="35" y="25">
                $200k
              </text>
            </g>
            <path
              d="M 75 240 L 135 180 L 195 200 L 255 120 L 315 150 L 375 100 L 435 130 L 495 80 L 555 110 L 615 50 L 675 90 L 735 40 L 735 280 L 75 280 Z"
              fill="url(#chartGradientNew)"
            ></path>
            <path
              d="M 75 240 L 135 180 L 195 200 L 255 120 L 315 150 L 375 100 L 435 130 L 495 80 L 555 110 L 615 50 L 675 90 L 735 40"
              stroke="#0A4A8F"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

function RecentOrdersAndTickets() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <RecentPendingOrders />
      <LatestSupportTickets />
    </div>
  );
}

function RecentPendingOrders() {
  return (
    <div className="flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm">
      <div className="flex justify-between items-center p-4 border-b border-border-light dark:border-border-dark">
        <h3 className="text-heading-light dark:text-heading-dark text-lg font-bold leading-tight tracking-[-0.015em]">
          Recent Pending Orders
        </h3>
        <a
          className="text-sm font-medium text-primary hover:underline"
          href="#"
        >
          View All
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-text-light dark:text-text-dark">
          <thead className="bg-gray-50 dark:bg-white/5 text-xs uppercase">
            <tr>
              <th className="px-6 py-3" scope="col">
                Order ID
              </th>
              <th className="px-6 py-3" scope="col">
                Customer
              </th>
              <th className="px-6 py-3" scope="col">
                Date
              </th>
              <th className="px-6 py-3" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-white/5">
              <td className="px-6 py-4 font-medium">#ORD-00124</td>
              <td className="px-6 py-4">John Doe</td>
              <td className="px-6 py-4">2023-10-27</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center rounded-full bg-warning/10 px-2 py-1 text-xs font-medium text-warning dark:bg-warning/20">
                  Pending
                </span>
              </td>
            </tr>
            <tr className="border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-white/5">
              <td className="px-6 py-4 font-medium">#ORD-00123</td>
              <td className="px-6 py-4">Jane Smith</td>
              <td className="px-6 py-4">2023-10-27</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center rounded-full bg-warning/10 px-2 py-1 text-xs font-medium text-warning dark:bg-warning/20">
                  Pending
                </span>
              </td>
            </tr>
            <tr className="border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-white/5">
              <td className="px-6 py-4 font-medium">#ORD-00122</td>
              <td className="px-6 py-4">Peter Jones</td>
              <td className="px-6 py-4">2023-10-26</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center rounded-full bg-warning/10 px-2 py-1 text-xs font-medium text-warning dark:bg-warning/20">
                  Pending
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-white/5">
              <td className="px-6 py-4 font-medium">#ORD-00121</td>
              <td className="px-6 py-4">Mary Jane</td>
              <td className="px-6 py-4">2023-10-26</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center rounded-full bg-warning/10 px-2 py-1 text-xs font-medium text-warning dark:bg-warning/20">
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LatestSupportTickets() {
  return (
    <div className="flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm">
      <div className="flex justify-between items-center p-4 border-b border-border-light dark:border-border-dark">
        <h3 className="text-heading-light dark:text-heading-dark text-lg font-bold leading-tight tracking-[-0.015em]">
          Latest Support Tickets
        </h3>
        <a
          className="text-sm font-medium text-primary hover:underline"
          href="#"
        >
          View All
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-text-light dark:text-text-dark">
          <thead className="bg-gray-50 dark:bg-white/5 text-xs uppercase">
            <tr>
              <th className="px-6 py-3" scope="col">
                Ticket ID
              </th>
              <th className="px-6 py-3" scope="col">
                Subject
              </th>
              <th className="px-6 py-3" scope="col">
                User
              </th>
              <th className="px-6 py-3" scope="col">
                Priority
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-white/5">
              <td className="px-6 py-4 font-medium">#TKT-789</td>
              <td className="px-6 py-4">Login Issue</td>
              <td className="px-6 py-4">Sam Wilson</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center rounded-full bg-danger/10 px-2 py-1 text-xs font-medium text-danger dark:bg-danger/20">
                  High
                </span>
              </td>
            </tr>
            <tr className="border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-white/5">
              <td className="px-6 py-4 font-medium">#TKT-788</td>
              <td className="px-6 py-4">Payment Failed</td>
              <td className="px-6 py-4">Bruce Wayne</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center rounded-full bg-warning/10 px-2 py-1 text-xs font-medium text-warning dark:bg-warning/20">
                  Medium
                </span>
              </td>
            </tr>
            <tr className="border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-white/5">
              <td className="px-6 py-4 font-medium">#TKT-787</td>
              <td className="px-6 py-4">Question about API</td>
              <td className="px-6 py-4">Clark Kent</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center rounded-full bg-success/10 px-2 py-1 text-xs font-medium text-success dark:bg-success/20">
                  Low
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-white/5">
              <td className="px-6 py-4 font-medium">#TKT-786</td>
              <td className="px-6 py-4">Account Verification</td>
              <td className="px-6 py-4">Diana Prince</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center rounded-full bg-danger/10 px-2 py-1 text-xs font-medium text-danger dark:bg-danger/20">
                  High
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
