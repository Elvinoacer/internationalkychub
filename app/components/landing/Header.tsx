"use client";
import Image from "next/image";
import { NotificationsIcon, SearchIcon, ShoppingCartIcon } from "../icons";
import { Logo } from "../logo";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navUrls = [
  {
    id: 0,
    label: "Home",
    lead: "/",
  },
  {
    id: 1,
    label: "Accounts",
    lead: "/accounts",
  },
  {
    id: 2,
    label: "Support",
    lead: "/support",
  },
  {
    id: 3,
    label: "FAQ",
    lead: "/faq",
  },
];

export function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/50 dark:border-gray-800/50 supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="size-8 text-blue-600 dark:text-blue-500">
            <Logo />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            KYC Hub
          </h2>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navUrls.map((item) => (
            <Link
              key={item.id}
              href={item.lead}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-all">
            <SearchIcon className="w-5 h-5" />
          </button>
          <Link
            href="/cart"
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-all relative"
          >
            <ShoppingCartIcon className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full border border-white dark:border-gray-900"></span>
          </Link>
          <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-all">
            <NotificationsIcon className="w-5 h-5" />
          </button>
          <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1" />
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-0.5 cursor-pointer">
            <div onClick={()=>router.push("/dashboard")} className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDShYmVDOHWeVsLn9erpR69DZ6Gi7tuc-UGyyT5P2V_ud-GANupMM9pbiIdXomwEQ-1pNPKTMxBcEzjlIZARlbAbjvcLALT4qpf_zTRWJwZzy0i4vMgFaxt-FiA7HglnFaparcBgf1xsAg9xaFCqGmWdISg0hFBguN-9pU2NgQyfUHGtzNGfWpvnAzwsDYXYml_W-OiP22QUjc98OCIYtpOu0mDPFAURm3ReXURvzMtRg8OAE7tXkcj11ExI-0oQFQ-qxT9UCn7NNk"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
