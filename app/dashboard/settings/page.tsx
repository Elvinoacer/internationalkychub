"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [twoFactor, setTwoFactor] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [marketingNotif, setMarketingNotif] = useState(false);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Account Settings
      </h1>

      <div className="flex flex-col gap-6">
        {/* Security Settings */}
        <div className="bg-white dark:bg-[#1C2539] rounded-xl border border-gray-200 dark:border-gray-700/50 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Security
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Change Password
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Update your password regularly for better security.
                </p>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                Update
              </button>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Two-Factor Authentication
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Add an extra layer of security to your account.
                </p>
              </div>
              <div
                className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in cursor-pointer"
                onClick={() => setTwoFactor(!twoFactor)}
              >
                <div
                  className={`block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-200 ${
                    twoFactor ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                ></div>
                <div
                  className={`absolute top-0 block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-200 ${
                    twoFactor
                      ? "right-0 border-primary"
                      : "left-0 border-gray-300 dark:border-gray-600"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Settings */}
        <div className="bg-white dark:bg-[#1C2539] rounded-xl border border-gray-200 dark:border-gray-700/50 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Notifications
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Email Notifications
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Receive updates about your orders and tickets via email.
                </p>
              </div>
              <div
                className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in cursor-pointer"
                onClick={() => setEmailNotif(!emailNotif)}
              >
                <div
                  className={`block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-200 ${
                    emailNotif ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                ></div>
                <div
                  className={`absolute top-0 block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-200 ${
                    emailNotif
                      ? "right-0 border-primary"
                      : "left-0 border-gray-300 dark:border-gray-600"
                  }`}
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Marketing Emails
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Receive news, special offers, and promotions.
                </p>
              </div>
              <div
                className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in cursor-pointer"
                onClick={() => setMarketingNotif(!marketingNotif)}
              >
                <div
                  className={`block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-200 ${
                    marketingNotif
                      ? "bg-primary"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                ></div>
                <div
                  className={`absolute top-0 block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-200 ${
                    marketingNotif
                      ? "right-0 border-primary"
                      : "left-0 border-gray-300 dark:border-gray-600"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
