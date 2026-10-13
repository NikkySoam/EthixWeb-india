import React from "react";
import { Hero } from "../components/sections/Hero";
import { ServicesSection } from "../components/sections/ServicesSection";
import { IndustriesSection } from "../components/sections/IndustriesSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { WorkSection } from "../components/sections/WorkSection";
import { WhyUsSection } from "../components/sections/WhyUsSection";
import { CtaSection } from "../components/sections/CtaSection";

/**
 * HomePage – assembles the full homepage using the premium design system.
 * Header and Footer are rendered globally via App router.
 */
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <WorkSection />
      <WhyUsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
