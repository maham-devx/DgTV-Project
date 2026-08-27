import CategoriesGrid from "@/component/CategoriesGrid";
import Hero from "@/component/Hero";
import HoroscopeWidget from "@/component/HoroscopeWidget";
import LaunchAnnouncement from "@/component/LaunchAnnouncement";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategoriesGrid />
      <LaunchAnnouncement />
      <HoroscopeWidget />
    </div>
  );
}
