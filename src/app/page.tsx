import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FooterSection from "../components/FooterSection";
import FloatingContactButton from "../components/FloatingContactButton";
import MVVSection from "@/components/MVVSection";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="font-sans bg-background text-foreground min-h-screen flex flex-col">
      <HeroSection />
      <AboutSection />
      <Separator />
      <MVVSection />
      <Separator />
      <ServicesSection />
      <Separator />
      <TestimonialsSection />
      <FooterSection />
      <FloatingContactButton />
    </div>
  );
}
