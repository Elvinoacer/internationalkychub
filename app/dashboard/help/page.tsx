import { SearchIcon } from "@/app/components/icons";

export default function HelpCenterPage() {
  const faqs = [
    {
      question: "How long does verification take?",
      answer:
        "Most accounts are verified within 24 hours. You will receive an email notification once the process is complete.",
    },
    {
      question: "Is my personal information safe?",
      answer:
        "Yes, we use industry-standard encryption to protect your data. We never share your personal details with third parties without your consent.",
    },
    {
      question: "Can I change my password?",
      answer:
        "Yes, you can change your password at any time from the Settings page in your dashboard.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, PayPal, and various cryptocurrencies. You can view available options during checkout.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can raise a support ticket directly from your dashboard or email us at support@kychub.com.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          How can we help you?
        </h1>
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search for answers..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1C2539] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none shadow-sm"
          />
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 rounded-xl bg-white dark:bg-[#1C2539] border border-gray-200 dark:border-gray-700/50 hover:border-primary/50 transition-colors cursor-pointer group">
          <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Getting Started
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            New to KYC Hub? Learn the basics of setting up your account.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white dark:bg-[#1C2539] border border-gray-200 dark:border-gray-700/50 hover:border-primary/50 transition-colors cursor-pointer group">
          <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Billing & Payments
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage your subscription, payment methods, and billing history.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white dark:bg-[#1C2539] border border-gray-200 dark:border-gray-700/50 hover:border-primary/50 transition-colors cursor-pointer group">
          <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Account Verification
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Everything you need to know about the verification process.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#1C2539] rounded-xl border border-gray-200 dark:border-gray-700/50 p-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-100 dark:border-gray-800 last:border-0 pb-4 last:pb-0"
            >
              <h3 className="text-base font-medium text-gray-900 dark:text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
