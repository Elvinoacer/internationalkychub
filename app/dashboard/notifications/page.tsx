import {
  ShieldIcon,
  DashboardIcon,
  SupportAgentIcon,
  SettingsIcon,
  NotificationsIcon,
} from "@/app/components/icons";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "Order Completed",
      message: "Your order #ORD-001 for Bet365 (UK) has been completed.",
      time: "2 hours ago",
      type: "success",
      read: false,
    },
    {
      id: 2,
      title: "Ticket Update",
      message: "Support agent replied to your ticket #TKT-2024-001.",
      time: "5 hours ago",
      type: "info",
      read: false,
    },
    {
      id: 3,
      title: "Security Alert",
      message: "New login detected from a new device (Chrome on Windows).",
      time: "1 day ago",
      type: "warning",
      read: true,
    },
    {
      id: 4,
      title: "New Feature",
      message: "Two-factor authentication is now available for your account.",
      time: "2 days ago",
      type: "info",
      read: true,
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return (
          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
            <DashboardIcon className="text-xl" />
          </div>
        );
      case "warning":
        return (
          <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 flex items-center justify-center">
            <ShieldIcon className="text-xl" />
          </div>
        );
      case "info":
      default:
        return (
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <NotificationsIcon className="text-xl" />
          </div>
        );
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Notifications
        </h1>
        <button className="text-sm font-medium text-primary hover:text-primary/80 dark:hover:text-primary/90">
          Mark all as read
        </button>
      </div>

      <div className="bg-white dark:bg-[#1C2539] rounded-xl border border-gray-200 dark:border-gray-700/50 overflow-hidden">
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 flex gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors ${
                !notification.read ? "bg-blue-50/30 dark:bg-blue-900/10" : ""
              }`}
            >
              <div className="flex-shrink-0">{getIcon(notification.type)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {notification.title}
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
                    {notification.time}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {notification.message}
                </p>
              </div>
              {!notification.read && (
                <div className="flex-shrink-0 self-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
