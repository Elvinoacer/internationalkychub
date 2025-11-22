import { Header } from "@/app/components/landing/Header";
import { Footer } from "@/app/components/landing/Footer";

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <p>
              We're here to help! Whether you have questions about our services, need assistance with an order, or just want to provide feedback, please don't hesitate to reach out.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Get in Touch</h2>
              <ul className="space-y-4">
                <li>
                  <p className="font-bold">Email:</p>
                  <a href="mailto:support@kychub.com" className="text-primary hover:underline">support@kychub.com</a>
                </li>
                <li>
                  <p className="font-bold">Phone:</p>
                  <a href="tel:+254780311377" className="text-primary hover:underline">+254 (780) 311-377</a>
                </li>
                <li>
                  <p className="font-bold">Business Hours:</p>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM (GMT)</p>
                </li>
              </ul>
            </div>
            <p>
              For urgent inquiries, we recommend reaching out via phone or live chat during business hours. For general questions, our email support is available 24/7.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
