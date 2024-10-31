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
import LogoGrid from '@/presentation/components/ui/logo-grid';
import IntegrationsLandingPage from '@/presentation/components/ui/integrations';
import { Features } from '@/presentation/pages/features/features';
import MARIADetailedDashboard from '@/presentation/pages/features/features2';
import MARIAKPIDashboard from '@/presentation/pages/features/kpis';
import LastSection from '@/presentation/pages/lastsection';

const Home = () => {
  return (
    <div className="bg-white">
        <main>
          <Navbar/>
            <HeroSection/>
            <Features/>
            <MARIADetailedDashboard/>
            <LogoGrid />
            <div className="bg-[#2c2e3a]">
              <MARIAKPIDashboard/>
            </div>
            <div className="bg-[#2c2e3a]">
              <IntegrationsLandingPage />
            </div>
            <ContactUsSection/>
            <LastSection/>
            <FooterSection/>
        </main>
    </div>
  );
};

export default Home;