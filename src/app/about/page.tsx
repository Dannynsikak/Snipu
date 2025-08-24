"use client";

import OurStory from "@/components/OurStory";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./HeroSection";
import OurValues from "@/components/OurValues";

export default function About() {
  return (
    <div className="min-h-screen ">
      {/* Header */}
      <Header />
      <main className="text-white container mx-auto px-4">
        {/* Hero Section */}
        <HeroSection />
        {/* About Section */}
        <OurStory/>
        {/* Our Values */}
        <OurValues/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}



