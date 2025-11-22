import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";


const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "International KYC Hub",
  description: "Instant Access to Global Betting Markets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${publicSans.className} bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark`}
      >
        {children}
      </body>
    </html>
  );
}
