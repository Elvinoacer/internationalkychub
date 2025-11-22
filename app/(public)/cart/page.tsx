import Image from "next/image";
import Link from "next/link";
import { ArrowForwardIcon, DeleteIcon, LockIcon } from "../../components/icons";
import { cartItems as items } from "@/app/data/dummyData";

export default function CartPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <main className="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs />
          <PageHeading />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <CartItems />
            <OrderSummary />
          </div>
        </div>
      </main>
    </div>
  );
}

function Breadcrumbs() {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        className="text-sm font-medium leading-normal text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
        href="/"
      >
        Home
      </Link>
      <span className="text-sm font-medium leading-normal text-gray-500 dark:text-gray-400">
        /
      </span>
      <a
        className="text-sm font-medium leading-normal text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
        href="/accounts"
      >
        Accounts
      </a>
      <span className="text-sm font-medium leading-normal text-gray-500 dark:text-gray-400">
        /
      </span>
      <span className="text-sm font-medium leading-normal text-gray-800 dark:text-white">
        Your Cart
      </span>
    </div>
  );
}

function PageHeading() {
  return (
    <div className="mt-4 mb-8">
      <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white">
        Review Your Order
      </h1>
    </div>
  );
}

function CartItems() {

  return (
    <div className="lg:col-span-2">
      <div className="rounded-xl border border-gray-200/80 bg-white/50 dark:border-white/10 dark:bg-gray-900/20">
        <div className="flex items-center justify-between border-b border-gray-200/80 p-4 dark:border-white/10">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white">
            Cart Items (2)
          </h2>
          <button className="text-sm font-medium text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500">
            Remove all
          </button>
        </div>
        <div className="divide-y divide-gray-200/80 dark:divide-white/10">
          {items.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CartItem({ item }: { item: any }) {
  return (
    <div className="flex flex-wrap items-center gap-4 p-4">
      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px] shrink-0">
        <Image
          src={item.image}
          alt={`${item.name} logo`}
          width={70}
          height={70}
          className="rounded-lg"
        />
      </div>
      <div className="flex-1">
        <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{item.price}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {item.details}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-full bg-gray-100 p-1 text-gray-700 dark:bg-white/10 dark:text-white">
          <button className="flex h-7 w-7 items-center justify-center rounded-full text-lg font-medium hover:bg-gray-200 dark:hover:bg-white/20">
            -
          </button>
          <input
            className="w-8 border-none bg-transparent p-0 text-center font-medium focus:outline-0 focus:ring-0 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            defaultValue="1"
          />
          <button className="flex h-7 w-7 items-center justify-center rounded-full text-lg font-medium hover:bg-gray-200 dark:hover:bg-white/20">
            +
          </button>
        </div>
        <button className="text-gray-400 hover:text-red-500 dark:hover:text-red-400">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

function OrderSummary() {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 space-y-6">
        <div className="rounded-xl border border-gray-200/80 bg-white/50 p-6 dark:border-white/10 dark:bg-gray-900/20">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
            Order Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
              <span>Subtotal</span>
              <span>$325.00</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
              <span>Processing Fee</span>
              <span>$5.00</span>
            </div>
          </div>
          <div className="my-4 h-px bg-gray-200/80 dark:bg-white/10"></div>
          <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
            <span>Total</span>
            <span>$330.00</span>
          </div>
          <a
            href="/checkout"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary h-12 text-base font-bold text-white shadow-sm transition-colors hover:bg-primary/90"
          >
            Proceed to Secure Payment
            <ArrowForwardIcon />
          </a>
          <a
            className="mt-4 block text-center text-sm font-medium text-primary hover:underline"
            href="/accounts"
          >
            Continue Shopping
          </a>
        </div>
        <TrustAndSecurity />
      </div>
    </div>
  );
}

function TrustAndSecurity() {
  const logos = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDVbDWyxFmq1ea2P8Xpd4l66_tJFBN62iaLBP_Wg5ZVw4FWo_80x8-rIBuoRuGcLSBnZADGm4fflLYVWrd1B66LUccNd2eluF4b-oDUs498aoSv5Ndx-JlTVvjdkjLRidnH3CkpdyV5Q2TTfL2tFAzHQfRt9xmp6ng1BXAOM-mJVHxSBAlniGUpGdU5A4GRMUmkb8_UnlWv8pNFntpcfAL1Za8mf_cAn6tbXd_WHHspVwyn9Bh9bRj_KD7GymMflPRdfIUDgwlFDnc",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAAgSfqKPYG9xeiQS5hAzJXX2xOsYjuJBLp_IU_zImiRCd4CmOG_-LeUv04iw3VoxaA9G941cDnpqXJpGb6dacv7PcFSVpwyuk0H9rigcnHbOofl-kLnRSBWSMACkkLc7giFJ5O1Cv2PSmirZXaJN0XtOKepmDftpl2712jKwEGyCCZmPiGug8UIJ5vbdc9Lv5RAlBCU79Hb9tfpsdrQPq5UQ0ZjBrq5IGGfMsARner02eSYjPTdxg1ZjujAO0Xliukr46vrD6WNWE",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDtskTVJFS0nMijrwey-92fIPLliRuEHnIwWxcstDHmXArFDv-sXCRNcxcEGTnnSoziJkjsGlcYQZ6I8jxdFZvx1GXhChu2nuUTVbIkmS493nciN4sbyfTm78M7-syWYUOy8a9c5RPC1Y5G-gFFiH0Q6MoXP42Oe1xxioshGWuO0t1E9lF13RD9gjNi_Objn0fq4xUGMra03BAIkUGC5wQpP7sLtMMGeH0a6CJxvEu2FlyYe-LqOXq4fvLPgGvfLPeRuVGdpJStkKo",
  ];
  return (
    <div className="rounded-xl border border-gray-200/80 bg-white/50 p-4 text-center dark:border-white/10 dark:bg-gray-900/20">
      <div className="flex justify-center items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
        <LockIcon className="text-base" />
        <p className="font-medium">Your transaction is encrypted and secure.</p>
      </div>
      <div className="mt-3 flex justify-center gap-4 grayscale opacity-60">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt="Payment logo"
            width={40}
            height={24}
            className="h-6"
          />
        ))}
      </div>
    </div>
  );
}
