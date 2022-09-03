import React from "react";

import {
  AboutUs,
  FindUs,
  Footer,
  Laurels,
  SpecialMenu,
  Home,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<SpecialMenu />} />
        <Route path="/awards" element={<Laurels />} />
        <Route path="/contact" element={<FindUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);

export default App;
