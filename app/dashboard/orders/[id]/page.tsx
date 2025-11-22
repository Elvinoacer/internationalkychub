import { use } from "react";
import { ChevronLeftIcon, DownloadIcon } from "@/app/components/icons";
import Link from "next/link";

export default function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  // Mock data - in a real app, fetch based on id
  const order = {
    id: decodeURIComponent(id),
    product: "Bet365 (UK) - Fully Verified",
    status: "Completed",
    date: "Oct 26, 2023",
    price: "$150.00",
    paymentMethod: "Bitcoin (BTC)",
    credentials: {
      username: "user123",
      password: "password123",
      email: "user123@email.com",
      emailPassword: "emailpassword123",
    },
    documents: [
      { name: "ID Front", size: "2.5 MB" },
      { name: "ID Back", size: "2.1 MB" },
      { name: "Proof of Address", size: "1.8 MB" },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mb-4"
        >
          <ChevronLeftIcon className="mr-1" />
          Back to Dashboard
        </Link>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Order Details
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Order ID: {order.id}</span>
              <span>•</span>
              <span>Placed on {order.date}</span>
            </div>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
            {order.status}
          </span>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Order Summary */}
        <div className="bg-white dark:bg-[#1C2539] rounded-xl border border-gray-200 dark:border-gray-700/50 p-6">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
            Order Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Product
              </p>
              <p className="text-base font-medium text-gray-900 dark:text-white">
                {order.product}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Total Amount
              </p>
              <p className="text-base font-medium text-gray-900 dark:text-white">
                {order.price}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Payment Method
              </p>
              <p className="text-base font-medium text-gray-900 dark:text-white">
                {order.paymentMethod}
              </p>
            </div>
          </div>
        </div>

        {/* Account Credentials */}
        <div className="bg-white dark:bg-[#1C2539] rounded-xl border border-gray-200 dark:border-gray-700/50 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Account Credentials
            </h2>
            <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 dark:hover:text-primary/90">
              <DownloadIcon className="text-lg" />
              Download as Text
            </button>
          </div>
          <div className="grid gap-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Username:
              </span>
              <code className="text-sm font-mono text-gray-900 dark:text-white bg-white dark:bg-gray-800 px-2 py-1 rounded border border-gray-200 dark:border-gray-700">
                {order.credentials.username}
              </code>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Password:
              </span>
              <code className="text-sm font-mono text-gray-900 dark:text-white bg-white dark:bg-gray-800 px-2 py-1 rounded border border-gray-200 dark:border-gray-700">
                {order.credentials.password}
              </code>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Email:
              </span>
              <code className="text-sm font-mono text-gray-900 dark:text-white bg-white dark:bg-gray-800 px-2 py-1 rounded border border-gray-200 dark:border-gray-700">
                {order.credentials.email}
              </code>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Email Pass:
              </span>
              <code className="text-sm font-mono text-gray-900 dark:text-white bg-white dark:bg-gray-800 px-2 py-1 rounded border border-gray-200 dark:border-gray-700">
                {order.credentials.emailPassword}
              </code>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="bg-white dark:bg-[#1C2539] rounded-xl border border-gray-200 dark:border-gray-700/50 p-6">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
            Verification Documents
          </h2>
          <div className="space-y-3">
            {order.documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {doc.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {doc.size}
                    </p>
                  </div>
                </div>
                <button className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                  <DownloadIcon className="text-xl" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
