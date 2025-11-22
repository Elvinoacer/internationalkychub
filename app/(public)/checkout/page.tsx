import Image from "next/image";
import Link from "next/link";
import {
  ContentCopyIcon,
  ExpandMoreIcon,
  LockIcon,
  NotificationsIcon,
} from "../../components/icons";
import { Logo } from "../../components/logo";
export default function CheckoutPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main className="px-4 sm:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 md:py-16">
          <div className="layout-content-container flex flex-col max-w-7xl w-full">
            <PageHeading />
            <div className="flex flex-col lg:flex-row gap-12 mt-8">
              <OrderSummary />
              <PaymentMethods />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function PageHeading() {
  return (
    <div className="flex flex-wrap justify-between gap-3 p-4">
      <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
        Secure Checkout
      </p>
    </div>
  );
}

function OrderSummary() {
  return (
    <div className="w-full lg:w-1/3">
      <div className="bg-white dark:bg-[#1C2431] rounded-xl shadow-sm p-6">
        <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-[-0.015em] mb-4">
          Order Summary
        </h2>
        <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="flex justify-between gap-x-6">
            <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">
              Pre-verified Account - Level 3
            </p>
            <p className="text-slate-800 dark:text-white text-sm font-medium leading-normal text-right">
              $150.00
            </p>
          </div>
          <div className="flex justify-between gap-x-6">
            <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">
              Service Fee
            </p>
            <p className="text-slate-800 dark:text-white text-sm font-medium leading-normal text-right">
              $5.00
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-x-6 pt-4">
          <p className="text-slate-600 dark:text-slate-400 text-sm font-bold leading-normal">
            Total Amount Due
          </p>
          <p className="text-slate-900 dark:text-white text-lg font-bold leading-normal text-right">
            $155.00
          </p>
        </div>
      </div>
    </div>
  );
}

function PaymentMethods() {
  return (
    <div className="w-full lg:w-2/3">
      <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">
        Choose a Payment Method
      </h2>
      <div className="flex flex-col gap-3">
        <CreditCardPayment />
        <CryptoPayment />
        <MobileMoneyPayment />
      </div>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="/confirmation"
          className="w-full sm:w-auto flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors disabled:bg-slate-300 dark:disabled:bg-slate-600 disabled:cursor-not-allowed"
        >
          <span className="truncate">Pay $155.00</span>
        </a>
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <LockIcon className="text-lg" />
          <span className="text-xs font-medium">
            All transactions are secure and encrypted.
          </span>
        </div>
      </div>
    </div>
  );
}

function CreditCardPayment() {
  const cardLogos = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBve9QF5dQ5fmDUWBnmPe44QHnojb6lYhGhYNYJ8vA0MTReSlytIIgB7IRC_oxOyH3wAqcT4NTW78b-3YfAB0jTcsWCAhZso0AR881ykjuOavBcxjabBT65V3qv-Db-K_8m_re_HpTx6z7bH-edXSufRDi_22JXcf05TX5tt9LGJloIBLiKUoGOGfKcWdZqhWgR0ak8eAdViCbRfQqSeNYBg7WcGdHqTVlTABkijvq9_yMaKM8fMo0DYGfoTa_M_qf60MG9EcVxR2I",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA2PLCMR5zd9mJBS-iZ8msPdSkMs9GKYWqzFbfzinJYN2WJEfaqn0s-rw4-wu1dquvLpDBCnXOKyPm1K1Ui33vAnqDIfC49QIlQXfSh7UHuqR7qpnU3PUCDuRz9g2xLMAtCX9Uiw_o46XsvsddE2Q-9zYY5Zt6ojhiH8ND1lxO0iovgguutpFWRe0qaVysC9gB5xgbRJAg3ykrJR-ifL_8Ez8MazhXEwceSZlzQK8XWETI2Qg_pCleNHb3goL6tNXALkPDaX86UPO0",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAoRMNk-FJvNejE5ljEuyClHcr2UbqChjUrLqpgrPtUT56-WPRe3HImJ6cBNMexduzCK-wMj1HoE39R4aLAxMk6zO6Ry6-Xb5wFcM4cWmx5A6YTGvMdEeKs3VC4k4GyMECMrviH7Kduo3Z9-Z76lDLtIs6Uzw3AOc53nn-MHfEDkwkJGBvSYTc0lYjU8_LR5mce3outW3Bbl_HYmw4vAVoN2mcHvPX1B-dEgFiNyOcwGmr_2julNWXoUnjspTezlO31ylccopMONBM",
  ];
  return (
    <details
      className="flex flex-col rounded-lg border border-slate-300 dark:border-[#3b4354] bg-white dark:bg-[#1C2431] px-[15px] group"
      open
    >
      <summary className="flex cursor-pointer items-center justify-between gap-6 py-4 list-none">
        <div className="flex items-center gap-4">
          <input
            className="h-4 w-4 text-primary border-slate-300 focus:ring-primary dark:border-slate-600 dark:bg-slate-700 dark:focus:ring-offset-slate-800"
            id="card-radio"
            name="payment-method"
            type="radio"
          />
          <label
            className="text-slate-800 dark:text-white text-base font-medium leading-normal"
            htmlFor="card-radio"
          >
            Credit/Debit Card
          </label>
        </div>
        <div className="flex items-center gap-2">
          {cardLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Card Logo"
              className="h-6"
              width={30}
              height={24}
            />
          ))}
          <ExpandMoreIcon className="text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform" />
        </div>
      </summary>
      <div className="pb-6 pt-2 space-y-4">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
          Enter your card details below. We accept Visa, Mastercard, and
          American Express.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
              htmlFor="card-number"
            >
              Card Number
            </label>
            <input
              className="w-full rounded-lg border-slate-300 bg-background-light dark:bg-[#101622] dark:border-slate-600 dark:text-white focus:border-primary focus:ring-primary"
              id="card-number"
              placeholder="0000 0000 0000 0000"
              type="text"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                htmlFor="expiry-date"
              >
                Expiry Date
              </label>
              <input
                className="w-full rounded-lg border-slate-300 bg-background-light dark:bg-[#101622] dark:border-slate-600 dark:text-white focus:border-primary focus:ring-primary"
                id="expiry-date"
                placeholder="MM / YY"
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                htmlFor="cvc"
              >
                CVC
              </label>
              <input
                className="w-full rounded-lg border-slate-300 bg-background-light dark:bg-[#101622] dark:border-slate-600 dark:text-white focus:border-primary focus:ring-primary"
                id="cvc"
                placeholder="123"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </details>
  );
}

function CryptoPayment() {
  const cryptoLogos = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDpLe6CxZkcEuXkTkRb1C-homSxlEFdxFj2fbqn9ZFbhqW_4vM1XFBe9nylfab4RaUXKwXBnjc0kl3HtAKGtl5SJoLTZZ5J_IHq-kuC8yKtL_t4YFb6IT1RRSvHKV70OeasywSWWe3Mz1E7MG_u2IrxdlSFm0DBoJ11pFSArWa8ENItJux6fUFsIw_uc7oM_FRykx88S8dGD6LIxK-WHcGv-aapEXFpJ_gGMiPLMkDIhh_odopDwVpVFGT43S7Txv6x6iWPxwHeqHc",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBFLir__Zb-z9UdV5Mi46d9e7fxBCoyTJ2vCszk_KpLnxTsnaeGaG0Id65TXrLxhq_0YH1CHRIlkKTkf3g8px5_hF1ZpvEMzJyHA-LRWvCj3nmsx91Ju-zCyTEjUR0rxtrPtv6MCpDLeNg3mYsdgEzSqSv5ZQ4wpk2xKYGm0B9HJAnlBgOMfMR5wKCjohkxlJ12wo5mXkwzEaSzV23F8tVwA0abCUhB9a8SvHW4hW5NXxMzVFV6XuhJHYGiP9S4PuO-FQQ_aYoNOA0",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD1QYX2Wm0SWH8P9tLcoZWUFBRfLzWUe-Xjh756SIKFn3GaW8K9vrSjMgXPQixHhOkCZPm_brvvzL7MnRRt5RF1bZqjG2QypkEHzBq_HeAU0GHGC92OfBhMtQZiVHznClprqYL0jVYxEUvhQxf_PACx1s-1jYHV8NZybRIRzHA3Ag7G4HtJpJX_IDsYReaT3DvvLKr3Sv1ddSzaEUdCHbZcsCyKJnwpxa7YxRrxePDZ-YZiHdyCgs_C1pdOxdluN4UmmuF1AFlodww",
  ];
  return (
    <details className="flex flex-col rounded-lg border border-slate-300 dark:border-[#3b4354] bg-white dark:bg-[#1C2431] px-[15px] group">
      <summary className="flex cursor-pointer items-center justify-between gap-6 py-4 list-none">
        <div className="flex items-center gap-4">
          <input
            className="h-4 w-4 text-primary border-slate-300 focus:ring-primary dark:border-slate-600 dark:bg-slate-700 dark:focus:ring-offset-slate-800"
            id="crypto-radio"
            name="payment-method"
            type="radio"
          />
          <label
            className="text-slate-800 dark:text-white text-base font-medium leading-normal"
            htmlFor="crypto-radio"
          >
            Cryptocurrency
          </label>
        </div>
        <div className="flex items-center gap-2">
          {cryptoLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Crypto Logo"
              className="h-6"
              width={24}
              height={24}
            />
          ))}
          <ExpandMoreIcon className="text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform" />
        </div>
      </summary>
      <div className="pb-6 pt-2 space-y-4">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
          Scan the QR code or copy the address below to complete your payment.
        </p>
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="p-2 bg-white rounded-lg border border-slate-200 dark:border-slate-700">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATWQS-nCXqmanInRcU4Cvla3tyAa9AYDIBVj61KmmQ2x5BLQ4OxznrE_GFgPcQAh8mUGKhov_WO5JtXtShLm4nQBH0Jx694cRRJW1Cw6YgLn1imyai_xz7F6D6PlYKeqYIAWQE3_CkFBvkdn9jDBHlfV4_RFhAAsoc7XMnV3Bd61gsKET2kwBThbuD8h_GuAJiny3KYCKy_mZVctn1Jll0eXQf0Slu8sW4DZ-Re4nEPCYtWogoV5liPd6fHobqdnL5-_H2M0wXeA4"
              alt="BTC Payment QR Code"
              className="w-32 h-32 rounded-md"
              width={128}
              height={128}
            />
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">
              BTC Payment Address
            </p>
            <div className="flex items-center w-full bg-background-light dark:bg-[#101622] rounded-lg border border-slate-300 dark:border-slate-600 p-2">
              <span className="text-sm text-slate-700 dark:text-slate-300 truncate pr-2">
                bc1qxy2kgdy...jhx0wlh
              </span>
              <button className="ml-auto text-primary flex items-center gap-1 text-sm font-semibold">
                <ContentCopyIcon className="text-base" /> Copy
              </button>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Please send the exact amount of $155.00 in BTC.
            </p>
          </div>
        </div>
      </div>
    </details>
  );
}

function MobileMoneyPayment() {
  const mobileMoneyLogos = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBBFAd8SSZJBpIlWiHtxJloWC-azZYil2j43Z2KiiE2Wg7cWfI7MyELg5sI_ekSDCbpWm0OY0dCiOUxYyaQoaHukkdjHnh0r59XxncM2GXgW7rPeCjovj2Qd8z8kmsmy_sf8OuUJ3GRnOzQwd5pH6TOZaCTzhwPs5CJoslPZEgvw2ZgWj7lIuvIC5r5WhzU1Uj1avaFzXY11IYtRq_dnZfcuI-ilXEnZj5RA9m9siarwZQEm5_ndfm2Ad8bZxc183IUNi6srlZmhAA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC1ftwN39KOioEysdcjf7sjfTsT0Zj3rects3nXnKBxVSoh8FmBblBMh7BYNk9IccFpWv1tcxwv5batlAWxBo-OrInDSXHDdwQAHtnUrYPf0HysEolyKOabh6w5IK6zCWfAuLOahgKV4w7I-205OyEfvUcYtXm9YkEpq0mnuWhSwmIgbTcBR8E192THHrie10lKZYU8UmBuloGdBqEqLhfXr40jI6--viixAqASB66r98rJ9KRV8F8V1YBIXf32ijkc93RpjCc8zR8",
  ];
  return (
    <details className="flex flex-col rounded-lg border border-slate-300 dark:border-[#3b4354] bg-white dark:bg-[#1C2431] px-[15px] group">
      <summary className="flex cursor-pointer items-center justify-between gap-6 py-4 list-none">
        <div className="flex items-center gap-4">
          <input
            className="h-4 w-4 text-primary border-slate-300 focus:ring-primary dark:border-slate-600 dark:bg-slate-700 dark:focus:ring-offset-slate-800"
            id="mobile-radio"
            name="payment-method"
            type="radio"
          />
          <label
            className="text-slate-800 dark:text-white text-base font-medium leading-normal"
            htmlFor="mobile-radio"
          >
            Mobile Money
          </label>
        </div>
        <div className="flex items-center gap-2">
          {mobileMoneyLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Mobile Money Logo"
              className="h-6"
              width={24}
              height={24}
            />
          ))}
          <ExpandMoreIcon className="text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform" />
        </div>
      </summary>
      <div className="pb-6 pt-2 space-y-4">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
          Enter your phone number to receive a payment prompt.
        </p>
        <div>
          <label
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            htmlFor="phone-number"
          >
            Phone Number
          </label>
          <input
            className="w-full rounded-lg border-slate-300 bg-background-light dark:bg-[#101622] dark:border-slate-600 dark:text-white focus:border-primary focus:ring-primary"
            id="phone-number"
            placeholder="+123 456 7890"
            type="tel"
          />
        </div>
      </div>
    </details>
  );
}
