import React from "react";
import Navbar from "../Navbar";
import Home from "../Home";
import About from "../About";
import ExploreMore from "../ExploreMore";
import Footer from "../Footer";
import PlotLayout from "../PlotLayot/PlotLayout";

const LandingPage = () => {
  return (
    <div>
      <Home />
      <About />
      <PlotLayout />
      <ExploreMore />
    </div>
  );
};

export default LandingPage;
