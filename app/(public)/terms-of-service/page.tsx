export default function TermsOfServicePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Terms of Service
          </h1>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              Welcome to International KYC Hub. By accessing or using our
              website and services, you agree to comply with and be bound by the
              following Terms of Service. Please review them carefully.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By using the International KYC Hub website and services, you
              signify your agreement to these Terms of Service. If you do not
              agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              2. Description of Service
            </h2>
            <p>
              International KYC Hub provides an online marketplace for the
              buying and selling of pre-verified betting accounts. We act as an
              intermediary to facilitate secure transactions between buyers and
              sellers.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              3. User Obligations
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                You must be of legal gambling age in your jurisdiction to use
                our services.
              </li>
              <li>
                You agree not to use our services for any illegal or
                unauthorized purpose.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account information.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              4. Account Verification
            </h2>
            <p>
              All accounts listed on International KYC Hub are stated to be
              pre-verified. However, the ultimate responsibility for verifying
              the accuracy and compliance of any account with local laws and
              platform terms rests with the buyer.
            </p>
            <p>
              (Further detailed terms regarding transactions, disputes,
              warranties, limitations of liability, intellectual property, etc.,
              would be included here.)
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
