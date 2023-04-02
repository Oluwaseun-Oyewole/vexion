import React, { useState } from "react";
import "./App.css";
import tw from "twin.macro";
import { Layout } from "./routes/Layout";
import { navigationData } from "../utils/data";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          {navigationData?.map(({ path, element }) => {
            return (
              <Routes>
                <Route path={path} element={element} />
              </Routes>
            );
          })}
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
