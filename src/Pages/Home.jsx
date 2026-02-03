import React from "react";
import HeroSection from "../Components/HeroSection";
import DealOfTheDay from "../Components/DealOfTheDay";
import HighlightStrip from "../Components/HighlightStrip";
import BrandSelectionSection from "../Components/BrandSelectionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightStrip />
      <BrandSelectionSection />
      <DealOfTheDay />
    </>
  );
}
