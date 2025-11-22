import Image from "next/image";
import {
  VerifiedUserIcon,
  DashboardIcon,
  GroupIcon,
  ReceiptLongIcon,
  Inventory2Icon,
  SupportAgentIcon,
  SettingsIcon,
  LogoutIcon,
  SearchIcon,
  NotificationsIcon,
} from "../components/icons";

export default function AdminDashboard() {
  return (
        <main className="flex-1 overflow-y-auto">
      <Header />
      <div className="p-6 md:p-8">
        <Stats />
        <Charts />
        <DataTables />
      </div>
    </main>
  );
}

function Sidebar() {
  return (
    <aside className="flex w-64 flex-col bg-surface-light dark:bg-surface-dark shadow-md">
      <div className="flex h-full min-h-[700px] flex-col justify-between p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg text-white">
              <VerifiedUserIcon className="text-2xl" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-heading-light dark:text-heading-dark text-base font-bold leading-normal">
                KYC Hub
              </h1>
              <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal">
                Admin Panel
              </p>
            </div>
          </div>
          <nav className="flex flex-col gap-2 mt-4">
            <a
              className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary dark:bg-primary/20"
              href="#"
            >
              <DashboardIcon className="text-2xl" />
              <p className="text-sm font-medium leading-normal">Dashboard</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"
              href="/admin/users"
            >
              <GroupIcon className="text-2xl" />
              <p className="text-sm font-medium leading-normal">
                User Management
              </p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"
              href="#"
            >
              <ReceiptLongIcon className="text-2xl" />
              <p className="text-sm font-medium leading-normal">
                Order Management
              </p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"
              href="#"
            >
              <Inventory2Icon className="text-2xl" />
              <p className="text-sm font-medium leading-normal">
                Account Inventory
              </p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"
              href="#"
            >
              <SupportAgentIcon className="text-2xl" />
              <p className="text-sm font-medium leading-normal">Support</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"
              href="#"
            >
              <SettingsIcon className="text-2xl" />
              <p className="text-sm font-medium leading-normal">Settings</p>
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-1">
          <a
            className="flex items-center gap-3 px-3 py-2 text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"
            href="#"
          >
            <LogoutIcon className="text-2xl" />
            <p className="text-sm font-medium leading-normal">Logout</p>
          </a>
        </div>
      </div>
    </aside>
  );
}

function MainContent() {
  return (
    <main className="flex-1 overflow-y-auto">
      <Header />
      <div className="p-6 md:p-8">
        <Stats />
        <Charts />
        <DataTables />
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
  const stats = [
    {
      title: "Total Sales",
      value: "$1,234,567",
      change: "+5.2%",
      changeColor: "text-success",
    },
    {
      title: "Pending Orders",
      value: "89",
      change: "+1.8%",
      changeColor: "text-warning",
    },
    {
      title: "Open Support Tickets",
      value: "12",
      change: "-3.0%",
      changeColor: "text-danger",
    },
    {
      title: "Active Inventory",
      value: "4,500",
      change: "+0.5%",
      changeColor: "text-success",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 rounded-xl p-6 bg-surface-light dark:bg-surface-dark shadow-sm border border-border-light dark:border-border-dark"
        >
          <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
            {stat.title}
          </p>
          <p className="text-heading-light dark:text-heading-dark tracking-tight text-3xl font-bold leading-tight">
            {stat.value}
          </p>
          <p
            className={`text-base font-medium leading-normal ${stat.changeColor}`}
          >
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
}

function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
      <div className="lg:col-span-3 flex flex-col gap-2 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm p-6">
        <p className="text-heading-light dark:text-heading-dark text-base font-medium leading-normal">
          Sales This Month
        </p>
        <p className="text-heading-light dark:text-heading-dark tracking-tight text-[32px] font-bold leading-tight truncate">
          $150,430
        </p>
        <div className="flex gap-1">
          <p className="text-text-light dark:text-text-dark text-base font-normal leading-normal">
            Last 30 Days
          </p>
          <p className="text-success text-base font-medium leading-normal">
            +12.5%
          </p>
        </div>
        <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
          <svg
            fill="none"
            height="100%"
            preserveAspectRatio="none"
            viewBox="-3 0 478 150"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#0A4A8F" stopOpacity="0.4"></stop>
                <stop offset="95%" stopColor="#0A4A8F" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
            <path
              d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z"
              fill="url(#chartGradient)"
            ></path>
            <path
              d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
              stroke="#0A4A8F"
              strokeLinecap="round"
              strokeWidth="3"
            ></path>
          </svg>
          <div className="flex justify-around">
            <p className="text-text-light dark:text-text-dark text-[13px] font-bold leading-normal tracking-[0.015em]">
              Week 1
            </p>
            <p className="text-text-light dark:text-text-dark text-[13px] font-bold leading-normal tracking-[0.015em]">
              Week 2
            </p>
            <p className="text-text-light dark:text-text-dark text-[13px] font-bold leading-normal tracking-[0.015em]">
              Week 3
            </p>
            <p className="text-text-light dark:text-text-dark text-[13px] font-bold leading-normal tracking-[0.015em]">
              Week 4
            </p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 flex flex-col gap-2 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm p-6">
        <p className="text-heading-light dark:text-heading-dark text-base font-medium leading-normal">
          Order Status Overview
        </p>
        <div className="flex h-full flex-col items-center justify-center py-4">
          <div className="relative flex items-center justify-center w-48 h-48">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="dark:stroke-border-dark"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E0E0E0"
                strokeWidth="3"
              ></path>
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#0A4A8F"
                strokeDasharray="60, 100"
                strokeWidth="3"
              ></path>
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#FFC107"
                strokeDasharray="25, 100"
                strokeDashoffset="-60"
                strokeWidth="3"
              ></path>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-3xl font-bold text-heading-light dark:text-heading-dark">
                1200
              </span>
              <span className="text-sm text-text-light dark:text-text-dark">
                Total Orders
              </span>
            </div>
          </div>
          <div className="mt-6 flex w-full justify-around">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-success"></span>
              <span className="text-sm text-text-light dark:text-text-dark">
                Completed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-warning"></span>
              <span className="text-sm text-text-light dark:text-text-dark">
                Pending
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-primary"></span>
              <span className="text-sm text-text-light dark:text-text-dark">
                Processing
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataTables() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <RecentPendingOrders />
      <LatestSupportTickets />
    </div>
  );
}

function RecentPendingOrders() {
  const orders = [
    { id: "#ORD-00124", customer: "John Doe", date: "2023-10-27" },
    { id: "#ORD-00123", customer: "Jane Smith", date: "2023-10-27" },
    { id: "#ORD-00122", customer: "Peter Jones", date: "2023-10-26" },
    { id: "#ORD-00121", customer: "Mary Jane", date: "2023-10-26" },
  ];
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
            {orders.map((order, index) => (
              <tr
                key={index}
                className="border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-white/5"
              >
                <td className="px-6 py-4 font-medium">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded-full bg-warning/10 px-2 py-1 text-xs font-medium text-warning dark:bg-warning/20">
                    Pending
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LatestSupportTickets() {
  const tickets = [
    {
      id: "#TKT-789",
      subject: "Login Issue",
      user: "Sam Wilson",
      priority: "High",
      priorityColor: "text-danger",
      priorityBg: "bg-danger/10",
    },
    {
      id: "#TKT-788",
      subject: "Payment Failed",
      user: "Bruce Wayne",
      priority: "Medium",
      priorityColor: "text-warning",
      priorityBg: "bg-warning/10",
    },
    {
      id: "#TKT-787",
      subject: "Question about API",
      user: "Clark Kent",
      priority: "Low",
      priorityColor: "text-success",
      priorityBg: "bg-success/10",
    },
    {
      id: "#TKT-786",
      subject: "Account Verification",
      user: "Diana Prince",
      priority: "High",
      priorityColor: "text-danger",
      priorityBg: "bg-danger/10",
    },
  ];
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
            {tickets.map((ticket, index) => (
              <tr
                key={index}
                className="border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-white/5"
              >
                <td className="px-6 py-4 font-medium">{ticket.id}</td>
                <td className="px-6 py-4">{ticket.subject}</td>
                <td className="px-6 py-4">{ticket.user}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${ticket.priorityColor} ${ticket.priorityBg}`}
                  >
                    {ticket.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}