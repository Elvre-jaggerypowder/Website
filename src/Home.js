// src/Home.js

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductSection from "./components/ProductSection";
import BenefitSection from "./components/BenefitsSection";
import UsesSection from "./components/UsesSection";
import FooterSection from "./components/FooterSection";
import FloatingButtons from "./components/FloatingButtons";
import TestimonialList from "./components/TestimonialList";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <BenefitSection />
      <UsesSection />
      < TestimonialList />
      <FooterSection />
      <FloatingButtons />
      
    </>
  );
}

export default Home;
