import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};
