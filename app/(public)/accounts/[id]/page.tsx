import Image from "next/image";
import { products } from "@/app/data/products";
import { Header } from "@/app/components/landing/Header";
import { Footer } from "@/app/components/landing/Footer";
import {
  ShoppingCartIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
} from "@/app/components/icons";
import { use } from "react";

// Helper for status badge colors
const getStatusStyles = (status: string) => {
  switch (status) {
    case "Available":
      return {
        bg: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30",
        dot: "bg-emerald-500",
      };
    case "Pre-order":
      return {
        bg: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border-blue-200 dark:border-blue-500/30",
        dot: "bg-blue-500",
      };
    default:
      return {
        bg: "bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 border-red-200 dark:border-red-500/30",
        dot: "bg-red-500",
      };
  }
};

export default function AccountDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Product Not Found
          </h1>
          <p className="text-gray-500">
            The account you are looking for does not exist.
          </p>
          <a
            href="/products"
            className="text-blue-600 hover:underline underline-offset-4"
          >
            Return to store
          </a>
        </div>
      </div>
    );
  }

  const statusStyle = getStatusStyles(product.status);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950 selection:bg-blue-500/30">
      <Header />

      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center text-sm text-gray-500 dark:text-gray-400">
            <a
              href="/"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Home
            </a>
            <span className="mx-2 text-gray-300">/</span>
            <span className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Accounts
            </span>
            <span className="mx-2 text-gray-300">/</span>
            <span className="font-medium text-gray-900 dark:text-white truncate">
              {product.name}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* LEFT COLUMN: Content & Specs (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Hero Section Mobile (Title visible first on mobile) */}
              <div className="lg:hidden space-y-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.name}
                </h1>
                <div
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusStyle.bg}`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full mr-1.5 ${statusStyle.dot}`}
                  />
                  {product.status}
                </div>
              </div>

              {/* Main Image Card */}
              <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center p-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black">
                  <div className="relative h-full w-full transition-transform duration-500 hover:scale-105">
                    <Image
                      src={product.logo}
                      alt={`${product.name} Logo`}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Account Overview
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Bento Grid Specs */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      label: "Account Type",
                      value: product.accountType,
                      icon: <ShieldCheckIcon />,
                    },
                    {
                      label: "Balance",
                      value: product.balance,
                      icon: <CurrencyDollarIcon />,
                    },
                    {
                      label: "Location",
                      value: product.location,
                      icon: <GlobeAltIcon />,
                    },
                    {
                      label: "Limits",
                      value: product.limits,
                      icon: <ChartBarIcon />,
                    },
                    {
                      label: "Verification",
                      value: product.verificationLevel,
                      icon: <DocumentTextIcon />,
                    },
                    {
                      label: "Warranty",
                      value: product.warranty,
                      icon: <ClockIcon />,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-5 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10 transition-colors" />

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition-colors">
                          <div className="w-6 h-6">{item.icon}</div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {item.label}
                          </p>
                          <p className="mt-1 text-base font-semibold text-gray-900 dark:text-white">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Full Width Spec: Documents */}
                  <div className="sm:col-span-2 rounded-2xl border border-gray-200 dark:border-gray-800 bg-blue-50/30 dark:bg-blue-900/10 p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-5 h-5 text-blue-600 dark:text-blue-400">
                        <DocumentTextIcon />
                      </div>
                      <span className="text-sm font-semibold text-blue-900 dark:text-blue-200">
                        Included Documentation
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 pl-8">
                      {product.includedDocs}
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Section */}
              <div className="rounded-3xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-8 sm:p-10 overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">
                    Why buy this account?
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    {[
                      "Instant Delivery via Email",
                      "100% Secure Transfer",
                      "Full Verification Status",
                      "7-Day Money Back Guarantee",
                      "24/7 Priority Support",
                      "Lifetime Warranty Options",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="font-medium opacity-90">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorational Background Element */}
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 dark:bg-black/10 rounded-full blur-3xl" />
              </div>
            </div>

            {/* RIGHT COLUMN: Sticky Sidebar (4 cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Purchase Card */}
                <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-xl shadow-gray-200/50 dark:shadow-black/50">
                  {/* Desktop Header */}
                  <div className="hidden lg:block mb-6 border-b border-gray-100 dark:border-gray-800 pb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {product.name}
                    </h1>
                    <div
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusStyle.bg}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${statusStyle.dot}`}
                      />
                      {product.status}
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 uppercase tracking-wide">
                      USD
                    </span>
                  </div>

                  {/* Action Button */}
                  <div className="space-y-4">
                    <button
                      disabled={product.status !== "Available"}
                      className={`group w-full relative overflow-hidden rounded-xl py-4 px-8 font-bold text-white shadow-lg transition-all duration-300 
                        ${
                          product.status === "Available"
                            ? "bg-blue-600 hover:bg-blue-500 hover:shadow-blue-500/25 active:scale-95"
                            : "bg-gray-400 cursor-not-allowed"
                        }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <ShoppingCartIcon />
                        {product.status === "Available"
                          ? "Add to Cart"
                          : "Out of Stock"}
                      </span>
                      {product.status === "Available" && (
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
                      )}
                    </button>

                    <p className="text-xs text-center text-gray-400">
                      Instant delivery • Secure payment
                    </p>
                  </div>
                </div>

                {/* Support Card */}
                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-5">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Need Help?
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Not sure if this account fits your needs? Chat with our
                    support team.
                  </p>
                  <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                    Contact Support &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
