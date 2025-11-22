import { ArrowForwardIcon, UploadFileIcon } from "@/app/components/icons";

export default function NewAccountPage() {
  return (
    <main className="flex-1 p-8">
      <div className="mx-auto max-w-4xl">
        <PageHeading />
        <div className="mt-8 flex flex-col gap-8">
          <AccountDetailsForm />
          <DocumentUpload />
          <FormActions />
        </div>
      </div>
    </main>
  );
}

function PageHeading() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Add New Account
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Fill in the details to create a new betting account in the inventory.
        </p>
      </div>
    </div>
  );
}

function AccountDetailsForm() {
  return (
    <div className="bg-white dark:bg-[#1c1f27] rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="p-6">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Account Details
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Enter the primary details of the account.
        </p>
      </div>
      <div className="p-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Username
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="username"
              id="username"
              className="block w-full rounded-lg border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
              placeholder="e.g., user_alpha"
            />
          </div>
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full rounded-lg border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
              placeholder="••••••••"
            />
          </div>
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="site"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Betting Site
          </label>
          <div className="mt-1">
            <select
              id="site"
              name="site"
              className="block w-full rounded-lg border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            >
              <option>Bet365</option>
              <option>Betano</option>
              <option>Betfair</option>
              <option>Vbet</option>
              <option>888sport</option>
              <option>1xbet</option>
              <option>Stake</option>
              <option>William Hill</option>
              <option>Betway</option>
              <option>FanDuel</option>
              <option>DraftKings</option>
              <option>BetMGM</option>
              <option>Caesars</option>
              <option>PointsBet</option>
              <option>Unibet</option>
              <option>Bwin</option>
              <option>Pinnacle</option>
            </select>
          </div>
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Country
          </label>
          <div className="mt-1">
            <select
              id="country"
              name="country"
              className="block w-full rounded-lg border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            >
              <option>USA</option>
              <option>CAN</option>
              <option>UK</option>
              <option>AUS</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

function DocumentUpload() {
  return (
    <div className="bg-white dark:bg-[#1c1f27] rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="p-6">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          KYC Documents
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Upload the necessary documents for account verification.
        </p>
      </div>
      <div className="p-6 border-t border-slate-200 dark:border-slate-800">
        <div className="flex justify-center rounded-lg border border-dashed border-slate-300 dark:border-slate-700 px-6 py-10">
          <div className="text-center">
            <UploadFileIcon className="mx-auto h-12 w-12 text-slate-400" />
            <div className="mt-4 flex text-sm leading-6 text-slate-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary-dark dark:bg-transparent"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  multiple
                />
              </label>
              <p className="pl-1 dark:text-slate-400">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-slate-500 dark:text-slate-500">
              PNG, JPG, PDF up to 10MB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormActions() {
  return (
    <div className="flex justify-end gap-4">
      <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700">
        Cancel
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90">
        <span>Create Account</span>
        <ArrowForwardIcon />
      </button>
    </div>
  );
}
