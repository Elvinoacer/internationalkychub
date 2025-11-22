import Image from "next/image";
import {
  ShieldIcon,
  DashboardIcon,
  Inventory2Icon,
  GroupIcon,
  BarChartIcon,
  SettingsIcon,
  SupportAgentIcon,
  LogoutIcon,
  AddIcon,
  SearchIcon,
  ExpandMoreIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/app/components/icons";
import { adminAccounts as accounts } from "@/app/data/dummyData";

export default function AccountInventoryPage() {
  return (
    <main className="flex-1 p-8">
      <div className="flex flex-col gap-6">
        <PageHeading />
        <SearchAndFilters />
        <AccountsTable />
        <Pagination />
      </div>
    </main>
  );
}

function Sidebar() {
  return (
    <aside className="flex w-64 flex-col bg-[#111318] p-4 text-white">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU2HWkmk44uozuSHP_TwiBX5JrP2_xfL21O5M5HzMKdszOy9xBsvYxcbu7xXky8oNxnShCF6AVffWsqlN5TrXzr6gXmFi4wbUr1SjQxvwvR4bajtWj0wqkerL70yjTXA0AD_nGMR3y6IG2WBjvaqPhiM66_4eNmISWWq2eaBsgg-7GWC-Lc_maZxHqu1i4b13UUJjEiDwWhW6Bqe2TyDNzS4vNAa3T_BdXrXqtP0IWrJknkVyrS8uE0nNrCtipP4xcWuo0EmrjVRI"
              alt="Admin user avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-base font-medium leading-normal">
              Admin Name
            </h1>
            <p className="text-[#9da6b9] text-sm font-normal leading-normal">
              Administrator
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#282e39] transition-colors"
            href="/admin"
          >
            <DashboardIcon className="text-white" />
            <p className="text-white text-sm font-medium leading-normal">
              Dashboard
            </p>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#282e39]"
            href="#"
          >
            <Inventory2Icon className="text-white" />
            <p className="text-white text-sm font-medium leading-normal">
              Accounts
            </p>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#282e39] transition-colors"
            href="/admin/users"
          >
            <GroupIcon className="text-white" />
            <p className="text-white text-sm font-medium leading-normal">
              Users
            </p>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#282e39] transition-colors"
            href="#"
          >
            <BarChartIcon className="text-white" />
            <p className="text-white text-sm font-medium leading-normal">
              Reports
            </p>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#282e39] transition-colors"
            href="#"
          >
            <SettingsIcon className="text-white" />
            <p className="text-white text-sm font-medium leading-normal">
              Settings
            </p>
          </a>
        </div>
      </div>
      <div className="mt-auto flex flex-col gap-1">
        <a
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#282e39] transition-colors"
          href="#"
        >
          <SupportAgentIcon className="text-white" />
          <p className="text-white text-sm font-medium leading-normal">
            Support
          </p>
        </a>
        <a
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#282e39] transition-colors"
          href="#"
        >
          <LogoutIcon className="text-white" />
          <p className="text-white text-sm font-medium leading-normal">
            Logout
          </p>
        </a>
      </div>
    </aside>
  );
}

function MainContent() {
  return (
    <main className="flex-1 p-8">
      <div className="flex flex-col gap-6">
        <PageHeading />
        <SearchAndFilters />
        <AccountsTable />
        <Pagination />
      </div>
    </main>
  );
}

function PageHeading() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-col gap-1">
        <p className="text-slate-900 dark:text-white text-3xl font-black tracking-tight">
          Account Inventory Management
        </p>
        <p className="text-slate-500 dark:text-[#9da6b9] text-base font-normal leading-normal">
          Create, edit, and manage all betting accounts in the inventory.
        </p>
      </div>
      <a href="/admin/accounts/new" className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
        <AddIcon />
        <span className="truncate">Add New Account</span>
      </a>
    </div>
  );
}

function SearchAndFilters() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-slate-400 dark:text-[#9da6b9] flex border-slate-300 dark:border-slate-700 border-r-0 bg-white dark:bg-[#1c1f27] items-center justify-center pl-4 rounded-l-lg border">
              <SearchIcon />
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1c1f27] h-full placeholder:text-slate-400 dark:placeholder:text-[#9da6b9] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              placeholder="Search by Account ID, Username..."
              value=""
            />
          </div>
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#1c1f27] border border-slate-300 dark:border-slate-700 pl-4 pr-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <p className="text-slate-700 dark:text-white text-sm font-medium leading-normal">
            Status: All
          </p>
          <ExpandMoreIcon className="text-slate-500 dark:text-white" />
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#1c1f27] border border-slate-300 dark:border-slate-700 pl-4 pr-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <p className="text-slate-700 dark:text-white text-sm font-medium leading-normal">
            Country: All
          </p>
          <ExpandMoreIcon className="text-slate-500 dark:text-white" />
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#1c1f27] border border-slate-300 dark:border-slate-700 pl-4 pr-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <p className="text-slate-700 dark:text-white text-sm font-medium leading-normal">
            Betting Site: All
          </p>
          <ExpandMoreIcon className="text-slate-500 dark:text-white" />
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-transparent text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary pl-2 pr-2">
          <p className="text-sm font-medium leading-normal">Clear Filters</p>
        </button>
      </div>
    </div>
  );
}

function AccountsTable() {


  const getKycStatusClass = (status: string) => {
    switch (status) {
      case "Verified":
        return "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300";
      case "Pending":
        return "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300";
      default:
        return "";
    }
  };

  const getAvailabilityClass = (availability: string) => {
    switch (availability) {
      case "Available":
        return "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300";
      case "Assigned":
        return "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300";
      default:
        return "";
    }
  };

  return (
    <div className="@container">
      <div className="flex overflow-hidden rounded-lg border border-slate-300 dark:border-[#3b4354] bg-white dark:bg-[#111318]">
        <table className="w-full text-left">
          <thead className="border-b border-slate-300 dark:border-[#3b4354]">
            <tr className="bg-slate-50 dark:bg-[#1c1f27]">
              <th className="p-4 w-12 text-center">
                <input
                  className="h-5 w-5 rounded border-slate-400 dark:border-[#3b4354] bg-transparent text-primary focus:ring-primary/50 checked:bg-primary checked:border-primary"
                  type="checkbox"
                />
              </th>
              <th className="px-4 py-3 text-slate-600 dark:text-white text-sm font-medium">
                Account ID
              </th>
              <th className="px-4 py-3 text-slate-600 dark:text-white text-sm font-medium">
                Username
              </th>
              <th className="px-4 py-3 text-slate-600 dark:text-white text-sm font-medium">
                Site
              </th>
              <th className="px-4 py-3 text-slate-600 dark:text-white text-sm font-medium">
                Country
              </th>
              <th className="px-4 py-3 text-slate-600 dark:text-white text-sm font-medium">
                KYC Status
              </th>
              <th className="px-4 py-3 text-slate-600 dark:text-white text-sm font-medium">
                Availability
              </th>
              <th className="px-4 py-3 text-slate-600 dark:text-white text-sm font-medium">
                Date Created
              </th>
              <th className="px-4 py-3 text-slate-600 dark:text-white text-sm font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-[#3b4354]">
            {accounts.map((account, index) => (
              <tr
                key={index}
                className="hover:bg-slate-50 dark:hover:bg-slate-900/50"
              >
                <td className="p-4 text-center">
                  <input
                    className="h-5 w-5 rounded border-slate-400 dark:border-[#3b4354] bg-transparent text-primary focus:ring-primary/50 checked:bg-primary checked:border-primary"
                    type="checkbox"
                  />
                </td>
                <td className="px-4 py-3 text-slate-500 dark:text-[#9da6b9] text-sm">
                  {account.id}
                </td>
                <td className="px-4 py-3 text-slate-500 dark:text-[#9da6b9] text-sm">
                  {account.username}
                </td>
                <td className="px-4 py-3 text-slate-500 dark:text-[#9da6b9] text-sm">
                  {account.site}
                </td>
                <td className="px-4 py-3 text-slate-500 dark:text-[#9da6b9] text-sm">
                  {account.country}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${getKycStatusClass(
                      account.kycStatus
                    )}`}
                  >
                    {account.kycStatus}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${getAvailabilityClass(
                      account.availability
                    )}`}
                  >
                    {account.availability}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-500 dark:text-[#9da6b9] text-sm">
                  {account.dateCreated}
                </td>
                <td className="px-4 py-3">
                  <button className="text-primary hover:underline text-sm font-semibold">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="flex items-center justify-between pt-2">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Showing 1 to 5 of 20 results
      </p>
      <div className="flex items-center gap-2">
        <button
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1c1f27] text-slate-600 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
          disabled
        >
          <ChevronLeftIcon className="text-base" />
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary bg-primary/20 text-primary text-sm font-medium">
          1
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1c1f27] text-slate-600 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm">
          2
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1c1f27] text-slate-600 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm">
          3
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1c1f27] text-slate-600 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <ChevronRightIcon className="text-base" />
        </button>
      </div>
    </div>
  );
}
