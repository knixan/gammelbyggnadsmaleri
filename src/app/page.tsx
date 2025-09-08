// src/app/page.tsx
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutUsSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// För att hantera globala stilar eller anpassningar, kan du importera dem här
// eller i din layout-fil (src/app/layout.tsx).
// Om du har globala CSS-regler som din `<style>`-tagg i HTML,
// flytta dem till src/app/globals.css.

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
