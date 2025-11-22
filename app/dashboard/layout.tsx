"use client";
import {
  ShieldIcon,
  DashboardIcon,
  SupportAgentIcon,
  SettingsIcon,
  HelpIcon,
  LogoutIcon,
  PersonIcon,
  NotificationsIcon,
  LockIcon,
  MenuIcon,
  CloseIcon,
} from "../components/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  const navItems = [
    { href: "/dashboard", icon: <DashboardIcon />, label: "Dashboard" },
    { href: "/dashboard/profile", icon: <PersonIcon />, label: "My Profile" },
    { href: "/dashboard/support", icon: <SupportAgentIcon />, label: "Support Tickets" },
    { href: "/dashboard/settings", icon: <SettingsIcon />, label: "Settings" },
  ];

  return (
    <aside className="flex h-full w-64 flex-col border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-[#111318]">
      <div className="flex h-16 items-center justify-between gap-3 px-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <LockIcon className="text-primary text-2xl" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            KYC Hub
          </h1>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
          >
            <CloseIcon className="text-xl" />
          </button>
        )}
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto p-4 gap-1">
        <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-2">
          Menu
        </p>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onClose}
            className={`flex items-center gap-3 rounded-lg px-4 py-2.5 transition-colors ${
              pathname === item.href
                ? "bg-primary/10 text-primary dark:bg-primary/20"
                : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800/50"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col gap-1">
          <a
            href="/dashboard/help"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800/50 transition-colors"
          >
            <HelpIcon className="text-xl" />
            <span className="text-sm font-medium">Help Center</span>
          </a>
          <a
            href="#"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 transition-colors"
          >
            <LogoutIcon className="text-xl" />
            <span className="text-sm font-medium">Logout</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 dark:border-gray-800 dark:bg-[#111318]">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
        >
          <MenuIcon className="text-2xl" />
        </button>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          User Dashboard
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/notifications"
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
        >
          <NotificationsIcon className="text-xl" />
        </Link>
        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              John Doe
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Verified User
            </p>
          </div>
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKoU3sXGGW7NkT3T4o1rl6DuI5k9YQLUjK6M8Gv9UXTuburdmvVwG2vl896uFxiZ3AzGJkiQdap0Q48QEwjltS2XAOM_llPivdbYYGfNqQAeAUrpaimDM6ykgbJLFGjMHqbaGY7S_NXtvZmH2ZCp9g3qocTC9gR80Q1Tvg1JR_yaCzfeDof3zr0eDJdF6Qu5yeNsgFavLJNcgDGEMFHTQV5j7KVhb-KA5LbZPbKjSsbXUpBRrAXFEtnRx1aWzhzY8UZePjbwHZ_nE"
              alt="User Avatar"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
