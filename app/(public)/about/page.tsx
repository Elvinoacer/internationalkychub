import { Header } from "@/app/components/landing/Header";
import { Footer } from "@/app/components/landing/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

          <div className="space-y-8 text-lg text-gray-700 dark:text-gray-300">
            <p>
              Welcome to International KYC Hub, your trusted partner in navigating the complex world of online betting. We understand the challenges of account verification, regional restrictions, and limited access to global markets. Our mission is to simplify this process by providing a secure, reliable, and efficient marketplace for pre-verified betting accounts.
            </p>
            <p>
              Founded by a team of experienced professionals in both technology and the betting industry, International KYC Hub was born out of a need for a streamlined solution. We observed the growing demand for instant access to diverse betting platforms and the frustrations associated with traditional KYC procedures. Our platform bridges this gap, connecting buyers with legitimate, fully verified accounts, ready for immediate use.
            </p>
            <div className="flex justify-center my-8">
              <Image
                src="/images/globe.svg" // Placeholder image, consider a more professional one
                alt="Global Reach"
                width={300}
                height={300}
                className="rounded-lg shadow-md dark:shadow-lg"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Values</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Security:</strong> We employ state-of-the-art encryption and security protocols to ensure every transaction and account detail is protected.
              </li>
              <li>
                <strong>Reliability:</strong> Each account listed on our platform undergoes a rigorous verification process, guaranteeing authenticity and compliance.
              </li>
              <li>
                <strong>Efficiency:</strong> We strive to provide instant access, eliminating delays and allowing our users to engage with their chosen markets without interruption.
              </li>
              <li>
                <strong>Transparency:</strong> Clear information, fair pricing, and straightforward processes are at the core of our operations.
              </li>
            </ul>
            <p>
              At International KYC Hub, we are committed to fostering a trustworthy environment where convenience meets compliance. Join our growing community and experience the future of betting account acquisition.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}