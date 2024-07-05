// pages/index.js
import HeroSection from '@/presentation/pages/hero/HeroSection';
import { VortexSection } from '@/presentation/pages/vortex/VortexSection';
import { VelocitySection } from '@/presentation/pages/velocity/VelocitySection';
import ContactUsSection from "@/presentation/pages/contact/ContactUsSection";
import InfoCards from "@/presentation/components/cards/InfoCards";
import React from "react";
import FooterSection from "@/presentation/pages/footer/FooterSection";
import CopyrightSection from "@/presentation/pages/copyright/CopyrightSection";
import Navbar from '@/presentation/components/Navbar';
import { InfiniteMovingCards } from '@/presentation/components/ui/infinite-moving-cards';

const Home = () => {
  return (
    <div>
        <main>
          <Navbar/>
            <HeroSection/>
            <VortexSection/>
            <VelocitySection/>
            <InfiniteMovingCards
  imagePath="/netfy-logo.png"
  direction="right"
  speed="slow"
/>
            <ContactUsSection/>
            <FooterSection/>
            <CopyrightSection />
        </main>
    </div>
  );
};

export default Home;