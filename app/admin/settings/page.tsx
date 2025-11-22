import {
  ContentCopyIcon,
  CurrencyBitcoinIcon,
  VisibilityIcon,
  VisibilityOffIcon,
} from "@/app/components/icons";

export default function SettingsPage() {
  return (
    <main className="flex-1 p-6 sm:p-8 lg:p-12">
      <div className="mx-auto max-w-4xl">
        <PageHeading />
        <div className="flex flex-col gap-8">
          <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pt-5">
            Payment Settings
          </h2>
          <WalletAddresses />
          <ApiKeys />
        </div>
      </div>
    </main>
  );
}

function PageHeading() {
  return (
    <div className="flex flex-wrap justify-between gap-3 pb-8">
      <div className="flex min-w-72 flex-col gap-3">
        <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
          Platform Settings
        </p>
        <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
          Manage payment settings, legal documents, and notification templates.
        </p>
      </div>
    </div>
  );
}

function WalletAddresses() {
  return (
    <div className="bg-white dark:bg-[#151c2c] rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="p-6">
        <div className="flex flex-col gap-1">
          <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            Wallet Addresses
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
            Manage the cryptocurrency wallet addresses for platform
            transactions.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <WalletItem
          name="BTC Wallet"
          address="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
        />
        <WalletItem
          name="ETH Wallet"
          address="0x123...4567890abcdef1234567890abcdef"
        />
      </div>
      <div className="p-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
        <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700">
          Add New Wallet
        </button>
      </div>
    </div>
  );
}

function WalletItem({ name, address }: { name: string; address: string }) {
  return (
    <div className="flex items-center gap-4 border-t border-slate-200 dark:border-slate-800 px-6 min-h-[72px] py-2 justify-between">
      <div className="flex items-center gap-4">
        <div className="text-slate-900 dark:text-white flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0 size-12">
          <CurrencyBitcoinIcon />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">
            {name}
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">
            {address}
          </p>
        </div>
      </div>
      <button className="shrink-0 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary">
        <ContentCopyIcon />
      </button>
    </div>
  );
}

function ApiKeys() {
  return (
    <div className="bg-white dark:bg-[#151c2c] rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="p-6">
        <div className="flex flex-col gap-1">
          <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            API Keys
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
            Manage API keys for third-party payment gateways.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-6 border-t border-slate-200 dark:border-slate-800">
        <ApiKeyInput
          id="stripe-public"
          label="Stripe Public Key"
          value="pk_test_••••••••••••••••••••••••"
          show={true}
        />
        <ApiKeyInput
          id="stripe-secret"
          label="Stripe Secret Key"
          value="sk_test_••••••••••••••••••••••••"
          show={false}
        />
      </div>
      <div className="p-6 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
        <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700">
          Cancel
        </button>
        <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90">
          Save Changes
        </button>
      </div>
    </div>
  );
}

function ApiKeyInput({
  id,
  label,
  value,
  show,
}: {
  id: string;
  label: string;
  value: string;
  show: boolean;
}) {
  return (
    <div>
      <label
        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <input
          className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-white focus:border-primary focus:ring-primary"
          id={id}
          type="password"
          value={value}
        />
        <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 dark:text-slate-400">
          {show ? (
            <VisibilityIcon className="text-base" />
          ) : (
            <VisibilityOffIcon className="text-base" />
          )}
        </button>
      </div>
    </div>
  );
}
