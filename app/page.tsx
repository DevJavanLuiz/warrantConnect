import { Navbar } from "@/components/navbar";
import { Architecture } from "@/sections/architecture";
import { Footer } from "@/sections/footer";
import { Hero } from "@/sections/hero";
import { Infrastructure } from "@/sections/infrastructure";
import { Services } from "@/sections/services";
import { StatusPanel } from "@/sections/status-panel";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(67,231,255,0.18),transparent_42%)]" />
      <Navbar />
      <Hero />
      <Services />
      <Infrastructure />
      <Architecture />
      {/* <StatusPanel /> */}
      <Footer />
    </main>
  );
}
