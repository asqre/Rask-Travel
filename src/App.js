import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LeisureTravel from "./pages/LeisureTravel";
import CorporateTravel from "./pages/CorporateTravel";
import Love from "./pages/Love";
import TermsAndCondition from "./pages/TermsAndCondition";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/leisure" element={<LeisureTravel />} />
      <Route path="/travel-trends" element={<CorporateTravel />} />
      <Route path="/leisure-unveiled" element={<Love />} />
      <Route path="/terms" element={<TermsAndCondition />} />
    </Routes>
  );
};

export default App;
