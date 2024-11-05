import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LeisureTravel from "./pages/LeisureTravel";
import CorporateTravel from "./pages/CorporateTravel";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/leisure" element={<LeisureTravel />} />
      <Route path="/corporate" element={<CorporateTravel />} />
    </Routes>
  );
};

export default App;
