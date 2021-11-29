import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Career from "../pages/Career";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";

export const Approuter = () => {
 
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/career" exact element={<Career />}/>
      <Route path="/portfolio" exact element={<Portfolio />}/>
      <Route path="/contact" exact element={<Contact />}/>
    </Routes>
  </BrowserRouter>
  );
};
