import { use } from "react";
import { ChevronLeftIcon } from "@/app/components/icons";
import Link from "next/link";

export default function TicketDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const ticket = {
    id: id,
    subject: "Login Issue with Bet365",
    status: "In Progress",
    created: "2023-10-27",
    lastUpdated: "2 hours ago",
    description:
      "I am unable to login to my Bet365 account. It says 'Invalid Credentials' even though I am using the password provided.",
    messages: [
      {
        sender: "John Doe",
        role: "user",
        time: "2023-10-27 10:00 AM",
        content:
          "I am unable to login to my Bet365 account. It says 'Invalid Credentials' even though I am using the password provided.",
      },
      {
        sender: "Support Agent",
        role: "admin",
        time: "2023-10-27 10:30 AM",
        content:
          "Hello John, thank you for reaching out. Have you tried clearing your browser cache and cookies? Sometimes that resolves the issue.",
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          href="/dashboard/support"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mb-4"
        >
          <ChevronLeftIcon className="mr-1" />
          Back to Tickets
        </Link>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {ticket.subject}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Ticket ID: {ticket.id}</span>
              <span>•</span>
              <span>Created: {ticket.created}</span>
            </div>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
            {ticket.status}
          </span>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Ticket Description */}
        <div className="bg-white dark:bg-[#1C2539] rounded-xl border border-gray-200 dark:border-gray-700/50 p-6">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
            Description
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {ticket.description}
          </p>
        </div>

        {/* Conversation History */}
        <div className="bg-white dark:bg-[#1C2539] rounded-xl border border-gray-200 dark:border-gray-700/50 p-6">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
            Conversation History
          </h2>
          <div className="space-y-6">
            {ticket.messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-4 ${
                  msg.role === "admin" ? "flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-300">
                  {msg.sender.charAt(0)}
                </div>
                <div
                  className={`flex-1 max-w-2xl p-4 rounded-xl ${
                    msg.role === "admin"
                      ? "bg-primary/10 text-gray-900 dark:text-white rounded-tr-none"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-tl-none"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold">{msg.sender}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {msg.time}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Reply Box */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700/50">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
              Reply to Ticket
            </h3>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
              placeholder="Type your message here..."
            ></textarea>
            <div className="mt-4 flex justify-end">
              <button className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Send Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
