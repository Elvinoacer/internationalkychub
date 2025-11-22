"use client";
import { useState } from "react";
import Link from "next/link";
import {
  AddIcon,
  SearchIcon,
} from "../components/icons";
import { dashboardStats as stats, dashboardRecentOrders as orders } from "@/app/data/dummyData";
import { CreateTicketModal } from "@/app/components/dashboard/CreateTicketModal";

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto">
      <PageHeading onOpenModal={() => setIsModalOpen(true)} />
      <Stats />
      <RecentOrders />
      <CreateTicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

function PageHeading({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
      <div className="flex flex-col gap-1">
        <p className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">
          Welcome back, John!
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
          Here's a summary of your account activity.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onOpenModal}
          className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-[#1C2539] border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors"
        >
          <AddIcon className="text-base" />
          <span>Raise a Support Ticket</span>
        </button>
        <Link
          href="/accounts"
          className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <SearchIcon className="text-base" />
          <span>Browse New Accounts</span>
        </Link>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1C2539] border border-gray-200 dark:border-gray-700/50"
        >
          <p className="text-gray-600 dark:text-gray-300 text-base font-medium leading-normal">
            {stat.title}
          </p>
          <p className="text-gray-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}

function RecentOrders() {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Processing":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300";
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";
      case "Cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300";
      default:
        return "";
    }
  };

  return (
    <>
      <h2 className="text-gray-900 dark:text-white text-2xl font-bold leading-tight tracking-tight mb-4">
        Recent Orders
      </h2>
      <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-[#1C2539]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700/50">
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50/50 dark:hover:bg-gray-800/40"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-400">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 font-medium">
                    {order.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      className="text-primary hover:text-primary/80 dark:hover:text-primary/90"
                      href={`/dashboard/orders/${order.id}`}
                    >
                      {order.action}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}