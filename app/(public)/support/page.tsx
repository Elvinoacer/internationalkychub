import { ChatBubbleIcon, MailIcon, PhoneIcon } from "@/app/components/icons";

export default function SupportPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Support</h1>

          <div className="space-y-8">
            <section className="text-center">
              <h2 className="text-2xl font-semibold mb-4">
                How Can We Help You?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Our support team is here to assist you with any questions,
                issues, or feedback you may have. Choose from the options below
                to get in touch.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SupportCard
                icon={<MailIcon className="text-primary text-5xl" />}
                title="Email Support"
                description="For detailed inquiries or non-urgent matters, send us an email. We aim to respond within 24 hours."
                link="mailto:support@kychub.com"
                linkText="Send Email"
              />
              <SupportCard
                icon={<PhoneIcon className="text-primary text-5xl" />}
                title="Phone Support"
                description="For immediate assistance, please call our support hotline during business hours."
                link="tel:+1234567890"
                linkText="Call Us"
              />
              <SupportCard
                icon={<ChatBubbleIcon className="text-primary text-5xl" />}
                title="Live Chat"
                description="Connect with a support agent instantly via our live chat for quick resolutions."
                link="#"
                linkText="Start Chat"
              />
            </section>

            <section className="text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You might find the answer to your question in our comprehensive
                FAQ section.
              </p>
              <a
                href="/faq"
                className="text-primary hover:underline font-medium"
              >
                Visit FAQ Page &rarr;
              </a>
            </section>

            <section className="text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Submit a Support Ticket
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                If your issue requires more detailed attention, please submit a
                support ticket.
              </p>
              <a
                href="/admin/support"
                className="text-primary hover:underline font-medium"
              >
                Create Ticket &rarr;
              </a>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

interface SupportCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

function SupportCard({
  icon,
  title,
  description,
  link,
  linkText,
}: SupportCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center border border-gray-200 dark:border-gray-700">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
        {description}
      </p>
      <a href={link} className="text-primary hover:underline font-medium">
        {linkText} &rarr;
      </a>
    </div>
  );
}

// I need to add MailIcon, PhoneIcon, ChatBubbleIcon to app/components/icons.tsx
