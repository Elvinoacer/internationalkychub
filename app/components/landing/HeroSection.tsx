import Link from "next/link";
import { VerifiedUserIcon } from "../icons";

export function HeroSection() {
  return (
    <section className="px-4 py-16 md:px-10 md:py-24">
      <div className="grid grid-cols-1 gap-12 @container lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 text-center lg:text-left">
          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Instant Access to Global Betting Markets
          </h1>
          <h2 className="text-base font-normal md:text-lg">
            Securely purchase pre-verified accounts and bypass the queues. Start
            your journey today.
          </h2>
          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href={"/accounts"}
              className="flex h-12 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold text-white sm:w-auto"
            >
              <span className="truncate">Browse Accounts</span>
            </Link>
            <div className="flex items-center gap-2">
              <VerifiedUserIcon className="text-green-500" />
              <p className="text-sm">SSL Secured & Encrypted Payments</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative w-full h-96 overflow-hidden rounded-xl">
          <video
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
            src="/assets/video.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div> {/* Optional: overlay for text readability */}
        </div>
      </div>
    </section>
  );
}
