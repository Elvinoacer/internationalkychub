import { Footer } from "@/app/components/landing/Footer";

export default function FAQPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h1>

          <div className="space-y-6">
            <FAQItem
              question="What is International KYC Hub?"
              answer="International KYC Hub is a marketplace for pre-verified betting accounts. We provide a secure platform for users to buy and sell accounts for various betting sites, ensuring instant access to global markets."
            />
            <FAQItem
              question="How do I purchase an account?"
              answer="Browse our selection of verified accounts, view detailed information on each, and add your desired account to the cart. Proceed to checkout to complete your secure purchase. Once payment is confirmed, you'll receive the account credentials and further instructions."
            />
            <FAQItem
              question="Are the accounts truly verified?"
              answer="Yes, all accounts on our platform undergo a stringent verification process by our team. We ensure that each account meets the necessary KYC (Know Your Customer) requirements of the respective betting site."
            />
            <FAQItem
              question="What payment methods do you accept?"
              answer="We accept various payment methods including Credit/Debit Card, Cryptocurrency (Bitcoin, Ethereum, etc.), and Mobile Money, ensuring a convenient and secure transaction experience."
            />
            <FAQItem
              question="What if I have issues with my purchased account?"
              answer="We offer a warranty period for all accounts, as specified in their details. If you encounter any issues within this period, please contact our support team immediately, and we'll assist with troubleshooting or replacement as per our policy."
            />
            <FAQItem
              question="How long does delivery take?"
              answer="Account credentials are typically delivered instantly upon successful payment confirmation. For accounts requiring additional processing or manual handover, the timeframe will be clearly stated in the product description."
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
      <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-900 dark:text-white">
        {question}
        <svg
          className="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </summary>
      <p className="mt-4 text-gray-600 dark:text-gray-400">{answer}</p>
    </details>
  );
}
