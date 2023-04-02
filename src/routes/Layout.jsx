import React from "react";
import { Navigation } from "../components/Navigation";

export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};
