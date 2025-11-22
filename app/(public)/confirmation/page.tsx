import Image from "next/image";
import {
  NotificationsIcon,
  CheckCircleIcon,
  ContentCopyIcon,
  ArrowForwardIcon,
  SupportAgentIcon,
} from "../../components/icons";
import { Logo } from "../../components/logo";
import { confirmationSteps as steps } from "@/app/data/dummyData";

export default function ConfirmationPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl">
          <ConfirmationCard />
        </div>
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4 text-gray-800 dark:text-white">
            <div className="size-6 text-primary">
              <Logo />
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
              KYC Hub
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                Dashboard
              </a>
              <a
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                My Accounts
              </a>
              <a
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                Help
              </a>
            </nav>
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
              <NotificationsIcon className="text-xl" />
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKoU3sXGGW7NkT3T4o1rl6DuI5k9YQLUjK6M8Gv9UXTuburdmvVwG2vl896uFxiZ3AzGJkiQdap0Q48QEwjltS2XAOM_llPivdbYYGfNqQAeAUrpaimDM6ykgbJLFGjMHqbaGY7S_NXtvZmH2ZCp9g3qocTC9gR80Q1Tvg1JR_yaCzfeDof3zr0eDJdF6Qu5yeNsgFavLJNcgDGEMFHTQV5j7KVhb-KA5LbZPbKjSsbXUpBRrAXFEtnRx1aWzhzY8UZePjbwHZ_nE"
                alt="User profile picture"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ConfirmationCard() {
  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg border border-gray-200 dark:border-white/10 overflow-hidden">
      <div className="p-8 sm:p-10 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center size-16 rounded-full bg-green-100 dark:bg-green-500/20">
            <CheckCircleIcon className="text-4xl text-green-600 dark:text-green-400" />
          </div>
        </div>
        <h1 className="text-gray-900 dark:text-white tracking-tight text-3xl font-bold leading-tight pb-2">
          Purchase Successful!
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal max-w-2xl mx-auto">
          Thank you for your order. A secure confirmation receipt with your
          order details has been sent to your registered email address.
        </p>
      </div>
      <OrderDetails />
      <WhatHappensNext />
      <CardFooter />
    </div>
  );
}

function OrderDetails() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-white/10 px-8 sm:px-10 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
        <div className="flex flex-col gap-1 text-left">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
            Order ID
          </p>
          <div className="flex items-center gap-2">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">
              KYC-8675309
            </p>
            <button className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" title="Copy Order ID">
              <ContentCopyIcon className="text-base" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-left">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
            Date of Purchase
          </p>
          <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">
            October 26, 2023
          </p>
        </div>
        <div className="flex flex-col gap-1 text-left">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
            Product
          </p>
          <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">
            Verified Bet365 Account
          </p>
        </div>
        <div className="flex flex-col gap-1 text-left">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
            Payment Method
          </p>
          <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">
            Visa ending in 1234
          </p>
        </div>
        <div className="flex flex-col gap-1 text-left sm:col-span-2">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
            Total Amount
          </p>
          <p className="text-gray-800 dark:text-gray-200 text-lg font-bold">
            $149.99
          </p>
        </div>
      </div>
    </div>
  );
}

function WhatHappensNext() {

  return (
    <div className="p-8 sm:p-10">
      <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">
        What Happens Next?
      </h2>
      <ul className="space-y-4">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 size-6 flex items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
              <span className="font-bold text-xs">{index + 1}</span>
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CardFooter() {
  return (
    <div className="border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-gray-900/50 px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="/dashboard" className="w-full sm:w-auto flex items-center justify-center gap-2 h-11 px-6 bg-primary text-white rounded-lg text-sm font-bold shadow-sm hover:bg-primary/90 transition-colors">
        <span>Go to My Dashboard</span>
        <ArrowForwardIcon className="text-lg" />
      </a>
      <button className="w-full sm:w-auto flex items-center justify-center gap-2 h-11 px-6 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-bold hover:bg-gray-300 dark:hover:bg-white/20 transition-colors">
        <SupportAgentIcon className="text-lg" />
        <span>Contact Support</span>
      </button>
    </div>
  );
}