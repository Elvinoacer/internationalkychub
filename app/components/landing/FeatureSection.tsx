import { TimerIcon, ShieldIcon, PublicIcon, LockIcon } from "../icons";

export function FeatureSection() {
  const features = [
    {
      icon: <TimerIcon className="h-6 w-6" />,
      title: "Instant Access",
      description:
        "Skip the long KYC queues. Receive credentials automatically within minutes of purchase.",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: <ShieldIcon className="h-6 w-6" />,
      title: "Fully Verified",
      description:
        "Documents submitted, identity checked, and address confirmed. Ready for immediate use.",
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      icon: <PublicIcon className="h-6 w-6" />,
      title: "Global Reach",
      description:
        "Unlock region-locked betting platforms from the UK, EU, and Asia without VPN headaches.",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: <LockIcon className="h-6 w-6" />,
      title: "Secure Transactions",
      description:
        "We use industry-standard encryption. Your payment data and identity remain anonymous.",
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-900/20",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50/50 dark:bg-gray-900/10 px-4 py-20 md:px-10 md:py-32">
      {/* Background Decorative Blur (Tailwind only) */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 opacity-30 dark:opacity-10">
        <div className="h-[500px] w-[1000px] bg-gradient-to-b from-blue-100 to-transparent blur-3xl dark:from-blue-900/50"></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-base font-bold uppercase tracking-widest text-primary">
            Premium Features
          </h2>
          <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">
            Why Choose International KYC Hub?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-gray-500 dark:text-gray-400">
            We provide a secure, fast, and reliable way to access a wide range
            of verified betting accounts from around the world.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-primary/10"
            >
              {/* Icon Container */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${feature.bg} ${feature.color} transition-transform duration-300 group-hover:scale-110`}
              >
                {feature.icon}
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-primary dark:text-white">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="mt-auto pt-4">
                <div className="h-1 w-12 rounded-full bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:bg-primary/20 dark:bg-gray-800"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
