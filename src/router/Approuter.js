import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Career from "../pages/Career";
import Home from "../pages/Home";

export const Approuter = () => {
 
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/career" exact element={<Career />}/>
    </Routes>
  </BrowserRouter>
  );
};