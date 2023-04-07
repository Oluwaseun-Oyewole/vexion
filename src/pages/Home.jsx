import React from "react";
import { Hero } from "../components/UI/Hero";
import { BannerSection } from "../components/Banner";
import { VexionApp } from "../components/UI/App";
import { Internet } from "../components/UI/Internet/Index";
import { ManageSection } from "../components/Manage";
import { Community } from "../components/Community";
import { Pricing } from "../components/Pricing";

export const Home = () => {
  return (
    <>
      <Hero />
      <BannerSection
        title="These companies work with us "
        imgSrc="/assets/img/Logos.png"
      />
      <VexionApp />
      <Internet />
      <ManageSection />
      <Community />
      <Pricing />
    </>
  );
};
