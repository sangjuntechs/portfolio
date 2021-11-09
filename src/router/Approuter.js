import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";

export const Approuter = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
};
