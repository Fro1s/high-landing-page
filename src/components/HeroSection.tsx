import React from "react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center pt-12 sm:pt-20 md:pt-24 px-2 sm:px-6 md:px-8 bg-gradient-to-b from-primary/10 to-background dark:to-primary/80" id="hero">
      <HeroHighlight>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight text-primary">
          <Highlight className="px-2 py-2 sm:px-4 sm:py-4">HIGH DEVELOPMENT</Highlight>
        </h1>
      </HeroHighlight>
    </section>
  );
} 