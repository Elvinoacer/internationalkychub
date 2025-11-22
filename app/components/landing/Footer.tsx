import { Logo } from "../logo";

export function Footer() {
  return (
    <footer className="mt-auto flex w-full justify-center border-t border-border-light bg-card-light dark:border-border-dark dark:bg-card-dark">
      <div className="w-full max-w-6xl px-4 py-12 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4">
              <Logo size={60} className="text-primary" />
              <h2 className="text-lg font-bold">KYC Hub</h2>
            </div>
            <p className="mt-4 max-w-sm text-sm text-slate-500 dark:text-slate-400">
              Your trusted partner for instant access to global betting markets.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Sitemap</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="hover:text-primary" href="/accounts">
                  Accounts
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="/faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="hover:text-primary" href="/terms-of-service">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="/disclaimer">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border-light pt-6 text-center text-sm text-slate-500 dark:border-border-dark dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} International KYC Hub. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
