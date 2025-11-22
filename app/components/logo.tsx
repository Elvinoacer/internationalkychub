import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo = ({ size = 40, className }: LogoProps) => (
  <Image
    src="/images/IKYC-LOGO.png"
    alt="IKYC Logo"
    width={size}
    height={size}
    className={`${className} rounded-full`}
  />
);
