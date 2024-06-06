import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import AboutUs from "@/components/AboutUs";
import Testimonial from "@/components/Testimonial";
import Upcoming from "@/components/Upcoming";
import People from "@/components/People";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]">
      <HeroSection />
      <Features />
      <AboutUs />
      <Testimonial />
      <Upcoming />
      <People />
      <Footer />
    </main>
  );
}
