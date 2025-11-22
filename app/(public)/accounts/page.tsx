"use client";

import {
  CheckCircleIcon,
  FunnelIcon,
  SearchIcon,
  XMarkIcon,
} from "@/app/components/icons"; // Ensure icons exist
import { products } from "@/app/data/products"; // Ensure this path is correct
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// --- Components ---

export default function BrowseAccounts() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // GSAP Animation for entrance
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".product-card",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05, duration: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gray-50 dark:bg-black selection:bg-blue-500/30">
      {/* Decorative background blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-pulse delay-700" />
      </div>

      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <PageHeading onToggleMobileFilter={() => setIsMobileFilterOpen(true)} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <Sidebar />
          </div>

          {/* Mobile Sidebar Drawer */}
          <MobileFilterDrawer
            isOpen={isMobileFilterOpen}
            onClose={() => setIsMobileFilterOpen(false)}
          />

          <MainContent />
        </div>
      </main>
    </div>
  );
}
function PageHeading({
  onToggleMobileFilter,
}: {
  onToggleMobileFilter: () => void;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div className="space-y-2 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
          Premium Accounts
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 font-light">
          Secure, pre-verified betting accounts from top-tier bookmakers.
          <span className="hidden sm:inline">
            {" "}
            Instant delivery guaranteed.
          </span>
        </p>
      </div>

      <button
        onClick={onToggleMobileFilter}
        className="lg:hidden flex items-center justify-center gap-2 w-full md:w-auto px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl shadow-lg active:scale-95 transition-transform"
      >
        <FunnelIcon className="w-5 h-5" />
        Filters & Sort
      </button>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sticky top-28 space-y-8">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-6 shadow-xl shadow-gray-200/20 dark:shadow-black/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Filters
          </h3>
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
            Reset All
          </span>
        </div>

        <div className="space-y-8">
          <BookmakerFilter />
          <div className="h-px bg-gray-100 dark:bg-gray-800" />
          <PriceRangeFilter />
          <div className="h-px bg-gray-100 dark:bg-gray-800" />
          <AccountStatusFilter />
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white shadow-lg">
        <h4 className="font-bold text-lg mb-2">Need Custom Order?</h4>
        <p className="text-blue-100 text-sm mb-4">
          We can source specific accounts based on your requirements.
        </p>
        <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg py-2 text-sm font-semibold transition-colors">
          Contact Sales
        </button>
      </div>
    </aside>
  );
}

// Mobile Drawer Component
function MobileFilterDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-xs h-full bg-white dark:bg-gray-900 shadow-2xl p-6 overflow-y-auto animate-in slide-in-from-left">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Filters
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <XMarkIcon className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <div className="space-y-6">
          <BookmakerFilter />
          <PriceRangeFilter />
          <AccountStatusFilter />
          <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl mt-4">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}

function BookmakerFilter() {
  const bookmakers = [
    "Bet365",
    "Betano",
    "Betfair",
    "Vbet",
    "888sport",
    "1xbet",
    "Stake",
    "William Hill",
    "Betway",
    "FanDuel",
    "DraftKings",
  ];
  return (
    <div className="space-y-3">
      <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 mb-3">
        Bookmaker
      </h4>
      {bookmakers.map((bookmaker, index) => (
        <label
          key={index}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative flex items-center">
            <input
              type="checkbox"
              className="peer h-5 w-5 rounded border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 checked:bg-blue-600 checked:border-blue-600 focus:ring-0 focus:ring-offset-0 transition-all"
              defaultChecked={index === 0}
            />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            {bookmaker}
          </span>
        </label>
      ))}
    </div>
  );
}

function PriceRangeFilter() {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 mb-4">
        Price Range
      </h4>
      <div className="grid grid-cols-2 gap-3">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            $
          </span>
          <input
            type="number"
            placeholder="0"
            className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 pl-6 py-2 text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
          />
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            $
          </span>
          <input
            type="number"
            placeholder="1000"
            className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 pl-6 py-2 text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
          />
        </div>
      </div>
    </div>
  );
}

function AccountStatusFilter() {
  const statuses = ["Available", "Pre-order", "Out of Stock"];
  return (
    <div className="space-y-3">
      <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 mb-3">
        Status
      </h4>
      {statuses.map((status, index) => (
        <label
          key={index}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <input
            type="radio"
            name="status"
            className="h-4 w-4 border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-600 bg-transparent"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            {status}
          </span>
        </label>
      ))}
    </div>
  );
}

function MainContent() {
  return (
    <div className="lg:col-span-3 flex flex-col h-full">
      {/* Search & Sort Bar - Fixed */}
      <div className="flex-shrink-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-2 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-sm flex flex-col sm:flex-row gap-2 mb-6">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            className="w-full h-12 pl-12 pr-4 rounded-xl bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none"
            placeholder="Search accounts by bookmaker or keyword..."
          />
        </div>
        <div className="h-px w-full sm:h-auto sm:w-px bg-gray-200 dark:bg-gray-700 mx-2" />
        <select className="h-12 px-4 rounded-xl bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <option>Sort: Newest First</option>
          <option>Sort: Price (Low to High)</option>
          <option>Sort: Price (High to Low)</option>
          <option>Popularity</option>
        </select>
      </div>

      {/* Scrollable Content Area - matches sidebar height */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-6 custom-scrollbar">
        <ProductGrid />

        {/* Pagination (Optional Visual) */}
        <div className="flex justify-center pt-8 pb-4">
          <button className="px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Load More Accounts
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "Available":
        return {
          color: "text-emerald-600 dark:text-emerald-400",
          bg: "bg-emerald-500/10",
          label: "Available",
        };
      case "Pre-order":
        return {
          color: "text-amber-600 dark:text-amber-400",
          bg: "bg-amber-500/10",
          label: "Pre-order",
        };
      case "Out of Stock":
        return {
          color: "text-red-600 dark:text-red-400",
          bg: "bg-red-500/10",
          label: "Sold Out",
        };
      default:
        return { color: "text-gray-600", bg: "bg-gray-500/10", label: status };
    }
  };

  const statusConfig = getStatusConfig(product.status);
  const isAvailable = product.status === "Available";

  return (
    <Link
      href={`/accounts/${product.id}`}
      className="product-card group block h-full"
    >
      <div className="relative h-full flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10 dark:hover:shadow-blue-900/20 hover:border-blue-300/50 dark:hover:border-blue-500/50">
        {/* Top Section: Header */}
        <div className="p-6 flex items-start justify-between relative z-10">
          <div className="relative size-12 rounded-xl bg-gray-50 dark:bg-gray-800 p-2 border border-gray-100 dark:border-gray-700">
            <Image
              src={product.logo}
              alt={product.name}
              fill
              className="object-contain p-1"
            />
          </div>
          <div
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${statusConfig.bg} ${statusConfig.color}`}
          >
            {statusConfig.label}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {product.name}
          </h3>

          {/* Mini Specs Grid */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <CheckCircleIcon className="w-3.5 h-3.5 text-blue-500" />
              Verified
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <CheckCircleIcon className="w-3.5 h-3.5 text-blue-500" />
              {product.currency || "USD/EUR"}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 col-span-2">
              <CheckCircleIcon className="w-3.5 h-3.5 text-blue-500" />
              {product.warranty || "Warranty Included"}
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 flex-grow">
            {product.description}
          </p>

          {/* Footer: Price & Action */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Price</p>
              <p
                className={`text-xl font-black ${
                  !isAvailable
                    ? "text-gray-400"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {product.price}
              </p>
            </div>

            <button
              className={`h-10 px-5 rounded-lg text-sm font-bold transition-all flex items-center gap-2
                ${
                  isAvailable
                    ? "bg-gray-900 text-white hover:bg-blue-600 dark:bg-white dark:text-gray-900 dark:hover:bg-blue-400"
                    : "bg-gray-100 text-gray-400 dark:bg-gray-800 cursor-not-allowed"
                }`}
            >
              {isAvailable ? "View" : "Sold"}
              {isAvailable && (
                <span className="text-lg leading-none">&rarr;</span>
              )}
            </button>
          </div>
        </div>

        {/* Decorative hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/0 to-blue-500/0 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity pointer-events-none" />
      </div>
    </Link>
  );
}
