import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function NotificationRibbon() {
  const socialLinks = [
    {
      label: "Help Center",
      url: "https://nextjs.org/",
    },
    {
      label: "Privacy",
      url: "https://nextjs.org/",
    },
    {
      label: "Connect",
      url: "tel: 9710123456",
    },
  ];
  return (
    <section className="bg-primary text-white">
      <div className="container py-2 flex justify-between">
        <p className="text-sm w-max flex gap-2 flex-shrink-0">
          {"Made by, "}
          <Link
            className="underline"
            href="https://jishnu-raj.vercel.app"
            target="_blank"
          >
            Jishnu Raj
          </Link>
          {` using `}
          <Link
            target="_blank"
            className="underline"
            href="https://nextjs.org/"
          >
            Next.js 13
          </Link>
        </p>
        <ul className="hidden md:flex gap-4 flex-shrink-0">
          {socialLinks.map(({ label, url }, i) => (
            <li key={i}>
              <Link
                href={url}
                className="text-sm hover:underline"
                target="_blank"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
