import Image from "next/image";
import {
  ShieldIcon,
  DashboardIcon,
  GroupIcon,
  BarChartIcon,
  SettingsIcon,
  HelpIcon,
  LogoutIcon,
  AddIcon,
  SearchIcon,
  EditIcon,
  FlagIcon,
  DeleteIcon,
  ArrowForwardIcon,
} from "../../components/icons";
import { adminUsers as users } from "@/app/data/dummyData";

export default function UserManagementPage() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="p-8">
        <PageHeading />
        <SearchAndFilters />
        <UserDataTable />
        <PaginationControls />
      </div>
    </main>
  );
}

function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-background-dark">
      <div className="flex items-center gap-3 px-3 py-2">
        <ShieldIcon className="text-primary text-3xl" />
        <h1 className="text-xl font-bold text-slate-800 dark:text-white">
          KYC Hub
        </h1>
      </div>
      <div className="mt-8 flex flex-grow flex-col justify-between">
        <div className="flex flex-col gap-2">
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            href="/admin"
          >
            <DashboardIcon />
            <p className="text-sm font-medium">Dashboard</p>
          </a>
          <a
            className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary dark:bg-primary/20"
            href="#"
          >
            <GroupIcon />
            <p className="text-sm font-medium">User Management</p>
          </a>
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            href="#"
          >
            <BarChartIcon />
            <p className="text-sm font-medium">Reports</p>
          </a>
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            href="#"
          >
            <SettingsIcon />
            <p className="text-sm font-medium">Settings</p>
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <div className="border-t border-slate-200 dark:border-slate-800 my-2"></div>
          <div className="flex items-center gap-4 p-2">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9ObXynLEAQ_VAwv1wgX59CSnBIBY6JhZYu18wH9Kt62vNXj3SIZtb1j0KB_q_w98-jaqHn4As-X7z-8M-Dw56ke1SREmP8_KRI_GibQsr0HKDyfdFDsoX8KbTeXUHHHCIzxDbtzPbXZCo6wXe7xBllEkFHE_J8kro5cMP7oVQGbE6kx7CWQbEDzSLrPaAsA2cxIvyCPhMeOivTksBHkfoWvYs8-_n8U69AyZl1mPrj5TFd3qyfu6nBI1HvqbVf4TPzBSDBnMNs48"
                alt="Admin user avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm font-semibold text-slate-800 dark:text-white">
                Admin Name
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                admin@kychub.com
              </p>
            </div>
          </div>
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            href="#"
          >
            <HelpIcon />
            <p className="text-sm font-medium">Help Center</p>
          </a>
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
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
    <main className="flex-1 overflow-y-auto">
      <div className="p-8">
        <PageHeading />
        <SearchAndFilters />
        <UserDataTable />
        <PaginationControls />
      </div>
    </main>
  );
}

function PageHeading() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          User Management
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          View, edit, and manage all customer profiles.
        </p>
      </div>
      <button className="flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary/90">
        <AddIcon />
        <span className="truncate">Add New User</span>
      </button>
    </div>
  );
}

function SearchAndFilters() {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-background-dark/50">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex-grow">
          <label className="flex h-10 w-full min-w-72 items-stretch rounded-lg bg-slate-100 dark:bg-slate-800">
            <div className="flex items-center justify-center pl-3">
              <SearchIcon className="text-slate-500 dark:text-slate-400" />
            </div>
            <input
              className="form-input w-full flex-1 resize-none overflow-hidden border-none bg-transparent text-slate-800 placeholder:text-slate-500 focus:outline-0 focus:ring-0 dark:text-white dark:placeholder:text-slate-400"
              placeholder="Search by name, email, or user ID..."
              value=""
            />
          </label>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Filter by status:
          </p>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 px-3 text-sm font-medium text-primary dark:bg-primary/20">
            All (1,245)
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 px-3 text-sm font-medium text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
            Active
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 px-3 text-sm font-medium text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
            Suspicious
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 px-3 text-sm font-medium text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
            Inactive
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 px-3 text-sm font-medium text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
            Pending Review
          </button>
        </div>
      </div>
    </div>
  );
}

function UserDataTable() {


  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";
      case "Suspicious":
        return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300";
      case "Inactive":
        return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300";
      case "Pending Review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300";
      default:
        return "";
    }
  };

  return (
    <div className="mt-6 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm dark:border-slate-800">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
              <thead className="bg-slate-50 dark:bg-slate-900/50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 dark:text-white sm:pl-6"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white"
                  >
                    Registration Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white"
                  >
                    Last Login
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="relative py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-slate-900 dark:text-white sm:pr-6"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-background-dark/50">
                {users.map((user, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-white sm:pl-6">
                      {user.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                      {user.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                      {user.registrationDate}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                      {user.lastLogin}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusClass(
                          user.status
                        )}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                          <EditIcon className="text-base text-slate-600 dark:text-slate-400" />
                        </button>
                        <button className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                          <FlagIcon className="text-base text-orange-500" />
                        </button>
                        <button className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                          <DeleteIcon className="text-base text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaginationControls() {
  return (
    <nav className="mt-6 flex items-center justify-between border-t border-slate-200 px-4 pt-4 dark:border-slate-800 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <a
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200"
          href="#"
        >
          <ArrowForwardIcon className="mr-3 h-5 w-5 transform rotate-180" />
          Previous
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        <a
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200"
          href="#"
        >
          1
        </a>
        <a
          aria-current="page"
          className="inline-flex items-center border-t-2 border-primary px-4 pt-4 text-sm font-medium text-primary"
          href="#"
        >
          2
        </a>
        <a
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200"
          href="#"
        >
          3
        </a>
        <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
          ...
        </span>
        <a
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200"
          href="#"
        >
          10
        </a>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <a
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200"
          href="#"
        >
          Next
          <ArrowForwardIcon className="ml-3 h-5 w-5" />
        </a>
      </div>
    </nav>
  );
}