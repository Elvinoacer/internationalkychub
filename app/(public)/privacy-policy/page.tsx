export default function PrivacyPolicyPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              Your privacy is critically important to us. At International KYC
              Hub, we have a few fundamental principles:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                We are thoughtful about the personal information we ask you to
                provide and the personal information that we collect about you
                through the operation of our services.
              </li>
              <li>
                We store personal information for only as long as we have a
                reason to keep it.
              </li>
              <li>
                We aim for full transparency on how we gather, use, and share
                your personal information.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p>
              We only collect information about you if we have a reason to do so
              — for example, to provide our Services, to communicate with you,
              or to make our Services better.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                **Basic Account Information:** We ask for basic information from
                you in order to set up your account. For example, we require
                users who sign up for an International KYC Hub account to
                provide an email address and password.
              </li>
              <li>
                **Transaction Information:** When you purchase an account, you
                will provide personal and payment information. This information
                is used to process your transactions and for fraud prevention.
              </li>
              <li>
                **Log Information:** We collect information that web browsers,
                mobile devices, and servers typically make available, such as
                the browser type, IP address, unique device identifiers,
                language preference, referring site, the date and time of
                access, operating system, and mobile network information.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              2. How We Use Information
            </h2>
            <p>We use information about you to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Provide our Services — for example, to set up and maintain your
                account, process payments and orders, and deliver purchased
                accounts.
              </li>
              <li>
                Ensure the security of our services and prevent fraud and abuse.
              </li>
              <li>Communicate with you about offers and promotions.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              3. Sharing Information
            </h2>
            <p>
              We do not sell your personal information. We share information
              about you in limited circumstances, and with appropriate
              safeguards on your privacy.
            </p>
            <p>
              (Further detailed policies on data retention, your rights, and
              contact information would be included here.)
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
