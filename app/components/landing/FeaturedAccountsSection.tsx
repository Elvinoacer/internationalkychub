"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CheckBadgeIcon,
  SparklesIcon,
} from "@/app/components/icons"; // Assuming you have these, or use lucide-react
import { featuredAccounts as accounts } from "@/app/data/dummyData";

export function FeaturedAccountsSection() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative px-4 py-16 md:px-10 md:py-24 bg-gray-50/50 dark:bg-gray-900/20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <SparklesIcon className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Hand-Picked
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
            Featured Accounts
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Our most popular, high-reliability accounts ready for instant
            transfer.
          </p>
        </div>

        <Link
          href="/accounts"
          className="group hidden md:flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          View Full Catalogue
          <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {accounts.map((account, index) => (
          <div
            key={index}
            className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 dark:border-gray-800 dark:bg-gray-900"
          >
            {/* Card Image / Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 mb-5">
              {/* Badge */}
              {account.badge && (
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-sm text-xs font-bold text-gray-900 dark:text-white shadow-sm">
                  {account.badge}
                </div>
              )}

              <Image
                src={account.image}
                alt={account.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="flex flex-grow flex-col">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {account.title}
                </h3>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {account.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {account.features.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 px-2 py-1 rounded"
                  >
                    {i === 0 && (
                      <CheckBadgeIcon className="w-3 h-3 text-green-500" />
                    )}
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                <div>
                  <p className="text-xs text-gray-400 font-medium">Price</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white">
                    {account.price}
                  </p>
                </div>
                <button className="rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 text-sm font-bold transition-transform active:scale-95 hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile "View All" Button */}
      <div className="mt-8 text-center md:hidden">
        <Link
          href="/accounts"
          className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30"
        >
          Browse All Accounts
        </Link>
      </div>
    </section>
  );
}
