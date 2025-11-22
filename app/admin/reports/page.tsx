"use client";
import {
  BarChartIcon,
  TrendingUpIcon,
  GroupIcon,
  ReceiptLongIcon,
  Inventory2Icon,
  CurrencyDollarIcon,
} from "@/app/components/icons";
import { useState } from "react";

export default function ReportsPage() {
  const [timeRange, setTimeRange] = useState("30days");

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+12.5%",
      trend: "up",
      icon: <CurrencyDollarIcon />,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
    {
      title: "Total Orders",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: <ReceiptLongIcon />,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "Active Users",
      value: "892",
      change: "+15.3%",
      trend: "up",
      icon: <GroupIcon />,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      title: "Available Accounts",
      value: "456",
      change: "-3.1%",
      trend: "down",
      icon: <Inventory2Icon />,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
    },
  ];

  const recentOrders = [
    { date: "2023-11-22", orders: 45, revenue: "$2,340" },
    { date: "2023-11-21", orders: 52, revenue: "$2,680" },
    { date: "2023-11-20", orders: 38, revenue: "$1,920" },
    { date: "2023-11-19", orders: 41, revenue: "$2,150" },
    { date: "2023-11-18", orders: 49, revenue: "$2,540" },
  ];

  const topProducts = [
    { name: "Bet365 - UK", sales: 145, revenue: "$7,250" },
    { name: "Betfair - Exchange", sales: 98, revenue: "$5,880" },
    { name: "Stake - Global", sales: 87, revenue: "$3,915" },
    { name: "William Hill - UK", sales: 76, revenue: "$3,800" },
    { name: "1xbet", sales: 64, revenue: "$1,920" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Reports & Analytics
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Track your business performance and metrics
          </p>
        </div>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
        >
          <option value="7days">Last 7 days</option>
          <option value="30days">Last 30 days</option>
          <option value="90days">Last 90 days</option>
          <option value="year">This year</option>
        </select>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#1C2539] rounded-xl border border-gray-200 dark:border-gray-700/50 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <span className={`text-2xl ${stat.color}`}>{stat.icon}</span>
              </div>
              <span
                className={`text-sm font-medium ${
                  stat.trend === "up"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {stat.title}
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders Chart */}
        <div className="bg-white dark:bg-[#1C2539] rounded-xl border border-gray-200 dark:border-gray-700/50 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Orders
            </h2>
            <BarChartIcon className="text-xl text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {order.date}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {order.orders} orders
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${(order.orders / 60) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white w-20 text-right">
                    {order.revenue}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white dark:bg-[#1C2539] rounded-xl border border-gray-200 dark:border-gray-700/50 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Top Products
            </h2>
            <TrendingUpIcon className="text-xl text-gray-400" />
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {product.sales} sales
                    </p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {product.revenue}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="bg-white dark:bg-[#1C2539] rounded-xl border border-gray-200 dark:border-gray-700/50 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Performance Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Average Order Value
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              $36.65
            </p>
            <p className="text-xs text-green-600 dark:text-green-400">
              +5.2% from last period
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Conversion Rate
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              3.24%
            </p>
            <p className="text-xs text-green-600 dark:text-green-400">
              +0.8% from last period
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Customer Retention
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              68.5%
            </p>
            <p className="text-xs text-red-600 dark:text-red-400">
              -2.1% from last period
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
