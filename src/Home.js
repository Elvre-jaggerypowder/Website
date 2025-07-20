import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MadeSection from "./components/MadeSection";
import ProductSection from "./components/ProductSection";
import AgriSection from "./components/AgriSection";
import BenefitSection from "./components/BenefitSection";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MadeSection />
      <ProductSection />
      <AgriSection />
      <BenefitSection />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
