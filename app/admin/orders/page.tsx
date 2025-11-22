import Image from "next/image";
import {
  VerifiedUserIcon,
  DashboardIcon,
  ReceiptLongIcon,
  GroupIcon,
  SettingsIcon,
  LogoutIcon,
  AddIcon,
  SearchIcon,
  ExpandMoreIcon,
  MoreHorizIcon,
} from "@/app/components/icons";
import { adminOrders as orders } from "@/app/data/dummyData";

export default function OrderManagementPage() {
  return (
    <main className="flex-1 flex flex-col p-6 lg:p-8 overflow-y-auto">
      <PageHeading />
      <SearchAndFilters />
      <OrdersTable />
    </main>
  );
}

function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-background-dark">
      <div className="flex items-center gap-3 px-3 py-2 mb-6">
        <VerifiedUserIcon className="text-primary text-3xl" />
        <h1 className="text-gray-800 dark:text-white text-xl font-bold">
          KYC Hub
        </h1>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-2">
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
            href="/admin"
          >
            <DashboardIcon />
            <p className="text-sm font-medium">Dashboard</p>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary dark:bg-primary/30"
            href="#"
          >
            <ReceiptLongIcon />
            <p className="text-sm font-medium">Orders</p>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
            href="/admin/users"
          >
            <GroupIcon />
            <p className="text-sm font-medium">Users</p>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
            href="#"
          >
            <SettingsIcon />
            <p className="text-sm font-medium">Settings</p>
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
          <div className="flex items-center gap-3 p-3">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-1XQ-2sWK_pso5T13nQTctUWphuBa5ya-fzrg9sKRhyGeeRs_ssXfNJhfH_aK1oJsRMHQmMRm7Q5Cw3H0kn65r6TVSeXz_uTh0-yD-1GTai2NPS-dyxztI0uJfUqQnlDl15cURS5mhyUHC-fBXyeu9XKsSdrXza_0jRrOQv5aFFZ8E0VVUHQnfgQzGFgKC2YRMqeyUlgkt4dea0LXBhrJKvIKKKg8kuZrboQLbswADh45igwQ4zlwCIDXQcNIUvsSmvrTT5pjICk"
                alt="Admin User Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-800 dark:text-white text-sm font-medium">
                Admin User
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                admin@kychub.com
              </p>
            </div>
          </div>
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
            href="#"
          >
            <LogoutIcon />
            <p className="text-sm font-medium">Logout</p>
          </a>
        </div>
      </div>
    </aside>
  );
}

function MainContent() {
  return (
    <main className="flex-1 flex flex-col p-6 lg:p-8 overflow-y-auto">
      <PageHeading />
      <SearchAndFilters />
      <OrdersTable />
    </main>
  );
}

function PageHeading() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
      <p className="text-gray-900 dark:text-white text-3xl font-bold">
        Order Management
      </p>
      <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90">
        <AddIcon className="text-xl" />
        <span className="truncate">New Order</span>
      </button>
    </div>
  );
}

function SearchAndFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex-grow">
        <label className="flex flex-col w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-10">
            <div className="text-gray-500 dark:text-gray-400 flex bg-white dark:bg-[#1C2434] items-center justify-center pl-3 rounded-l-lg border border-gray-200 dark:border-gray-700 border-r-0">
              <SearchIcon />
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1C2434] h-full placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 rounded-l-none border-l-0 text-sm"
              placeholder="Search by Order ID, Customer Name, Email..."
              value=""
            />
          </div>
        </label>
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#1C2434] px-4 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700/50">
          <p className="text-gray-800 dark:text-white text-sm font-medium">
            Status
          </p>
          <ExpandMoreIcon className="text-gray-500 dark:text-gray-400 text-xl" />
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#1C2434] px-4 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700/50">
          <p className="text-gray-800 dark:text-white text-sm font-medium">
            Assigned To
          </p>
          <ExpandMoreIcon className="text-gray-500 dark:text-gray-400 text-xl" />
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#1C2434] px-4 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700/50">
          <p className="text-gray-800 dark:text-white text-sm font-medium">
            Date Range
          </p>
          <ExpandMoreIcon className="text-gray-500 dark:text-gray-400 text-xl" />
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-transparent px-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-primary">
            Clear Filters
          </p>
        </button>
      </div>
    </div>
  );
}

function OrdersTable() {


  const getStatusClass = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-status-green/20 text-status-green";
      case "In Progress":
        return "bg-status-blue/20 text-status-blue";
      case "Pending":
        return "bg-status-yellow/20 text-status-yellow";
      case "Cancelled":
        return "bg-status-red/20 text-status-red";
      default:
        return "";
    }
  };

  return (
    <div className="flex-1 overflow-x-auto bg-white dark:bg-[#1C2434] rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 dark:bg-gray-900/20 text-xs text-gray-700 dark:text-gray-400 uppercase">
          <tr>
            <th className="p-4" scope="col">
              <input
                className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-transparent text-primary focus:ring-primary/50"
                type="checkbox"
              />
            </th>
            <th className="px-6 py-3" scope="col">
              Order ID
            </th>
            <th className="px-6 py-3" scope="col">
              Customer
            </th>
            <th className="px-6 py-3" scope="col">
              Country
            </th>
            <th className="px-6 py-3" scope="col">
              Service
            </th>
            <th className="px-6 py-3" scope="col">
              Submitted
            </th>
            <th className="px-6 py-3" scope="col">
              Assigned To
            </th>
            <th className="px-6 py-3" scope="col">
              Status
            </th>
            <th className="px-6 py-3 text-right" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-900 dark:text-white">
          {orders.map((order, index) => (
            <tr
              key={index}
              className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/20"
            >
              <td className="p-4">
                <input
                  className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-transparent text-primary focus:ring-primary/50"
                  type="checkbox"
                />
              </td>
              <td className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">
                {order.id}
              </td>
              <td className="px-6 py-4 font-medium">{order.customer}</td>
              <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                {order.country}
              </td>
              <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                {order.service}
              </td>
              <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                {order.submitted}
              </td>
              <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                {order.assignedTo}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-gray-500 dark:text-gray-400 hover:text-primary">
                  <MoreHorizIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav
        aria-label="Table navigation"
        className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1-5
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            100
          </span>
        </span>
        <ul className="inline-flex -space-x-px text-sm h-8">
          <li>
            <a
              className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-[#1C2434] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              href="#"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#1C2434] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              href="#"
            >
              1
            </a>
          </li>
          <li>
            <a
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#1C2434] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              href="#"
            >
              2
            </a>
          </li>
          <li>
            <a
              aria-current="page"
              className="flex items-center justify-center px-3 h-8 text-primary bg-primary/20 border border-gray-300 hover:bg-primary/30 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              href="#"
            >
              3
            </a>
          </li>
          <li>
            <a
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-[#1C2434] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              href="#"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
