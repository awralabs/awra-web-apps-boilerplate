import Button from "@/components/ui/Button";
import { Expand } from "lucide-react";
import { Fragment } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { siteName } from "@/lib/constants";

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

export default function Header() {
  return (
    <Fragment>
      <header className="bg-white shadow-2xl border-b">
        <PcMenu />
        <MobileMenu />
      </header>
    </Fragment>
  );
}

const PcMenu = ({ className }) => {
  return (
    <menu className="container py-4 hidden md:flex items-center justify-between gap-4">
      <Branding />
      <div className="flex gap-4 items-center">
        <ul className="h-full flex gap-6 items-center">
          {menuLinks.map(({ label, link }) => (
            <li
              key={link}
              className="text-lg text-black hover:text-primary hover:underline"
            >
              <Link href={`/jishnu/${link}`}>{label}</Link>
            </li>
          ))}
        </ul>
        <GetInTouch />
      </div>
    </menu>
  );
};

export const Branding = () => (
  <Link href="/" className="text-2xl font-bold text-primary">
    {siteName} "Boilerplate"
  </Link>
);

const GetInTouch = () => <Button>Get in Touch</Button>;
