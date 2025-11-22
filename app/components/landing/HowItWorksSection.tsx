export function HowItWorksSection() {
  const steps = [
    {
      title: "Choose Your Account",
      description:
        "Browse our wide selection of verified accounts from top betting platforms.",
    },
    {
      title: "Secure Purchase",
      description:
        "Complete your purchase through our encrypted and secure payment gateway.",
    },
    {
      title: "Receive & Play",
      description:
        "Receive your account details instantly and start your betting journey.",
    },
  ];
  return (
    <section className="px-4 py-16 md:px-10 md:py-24">
      <div className="flex flex-col items-center gap-10 text-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Get Started in 3 Simple Steps
          </h2>
          <p className="mt-4 text-base">
            A simple, three-step guide on how to select, buy, and receive an
            account.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-xl font-bold text-primary">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
