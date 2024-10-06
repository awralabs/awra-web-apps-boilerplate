"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { Fragment, useEffect, useState } from "react";

import Link from "next/link";
import { Branding, menuLinks } from "@/components/layout/Navbar";
import RenderWhen from "@/components/ui/RenderWhen";

export default function MobileMenu(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

  const isClient = typeof window !== "undefined";
  useEffect(() => {
    if (!isClient) return;

    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <Fragment>
      <menu className="flex md:hidden container py-5 w-full justify-between items-center">
        <Branding />
        <button onClick={toggleMenu}>
          <MenuIcon size={32} className="text-white" />
        </button>
      </menu>
      <RenderWhen when={isMenuOpen}>
        <div className="container py-16 absolute top-0 left-0 z-10 h-screen w-screen bg-black">
          <div className="flex justify-end items-center">
            <button onClick={toggleMenu} className="text-primary">
              <XIcon size={32} />
            </button>
          </div>
          <div className="h-full flex flex-col justify-between">
            <ul className="grid grid-flow-row gap-4 mt-12">
              {menuLinks.map(({ label, link }) => (
                <li key={link}>
                  <Link
                    href={`/jishnu/${link}`}
                    onClick={toggleMenu}
                    className="flex flex-col hover:bg-primary hover:text-white group"
                  >
                    <p className="py-2 group-hover:translate-x-2 transition-transform duration-300 ease-in-out">
                      {label}
                    </p>
                    <hr className="border-primary/50" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RenderWhen>
    </Fragment>
  );
}
