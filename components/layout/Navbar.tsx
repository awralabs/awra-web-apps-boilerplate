import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export const menuLinks = [
  {
    label: "Platform",
    link: "platfoms",
  },
  {
    label: "Solutions",
    link: "solutions",
  },
  {
    label: "Resources",
    link: "resources",
  },
  {
    label: "Partners",
    link: "partners",
  },
  {
    label: "Company",
    link: "company",
  },
];

export default function Navba(): JSX.Element {
  return (
    <header className="bg-black border-b border-white/20 shadow-2xl">
      <PcMenu />
      <MobileMenu />
    </header>
  );
}

const PcMenu = (): JSX.Element => {
  return (
    <menu className="container py-2 hidden md:flex items-center justify-between gap-4">
      <Branding />
      <div className="flex gap-4 items-center">
        <ul className="h-full flex gap-6 items-center">
          {menuLinks.map(({ label, link }) => (
            <li
              key={link}
              className="text-lg text-white hover:text-primary hover:underline"
            >
              <Link href={`/${link}`}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </menu>
  );
};

interface BrandingProps {
  size?: number;
  className?: string;
}
export const Branding = ({ size = 200, className }: BrandingProps) => (
  <Link href="/">
    <Image
      src="/images/awralabs-logo-light.svg"
      width={size}
      height={100}
      alt="Awra Labs Logo"
      className={className}
    />
  </Link>
);
