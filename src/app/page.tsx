import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Customers from "@/components/Customers";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex min-h-screen flex-col gap-16 items-center justify-between p-8 bg-black text-white overflow-x-clip">
        <HeroSection />
        <About />
        <Services />
        <Customers />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
