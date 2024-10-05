import HomeHero from "@/components/sections/HomeHero";
import { siteName, tagline } from "@/lib/constants";

export const metadata = {
  title: `${siteName} | ${tagline}`,
  description: tagline,
};

export default function Home() {
  return <HomeHero />;
}
