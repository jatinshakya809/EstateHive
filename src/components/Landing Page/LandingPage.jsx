import React from "react";
import Navbar from "../Navbar";
import Home from "../Home";
import About from "../About";
import ExploreMore from "../ExploreMore";
import Footer from "../Footer";
import PlotLayout from "../PlotLayot/PlotLayout";
import AboutOwner from "../AboutUs/AboutOwner";
import MoreImages from "../MoreImages";

const LandingPage = () => {
  return (
    <div>
      <Home />
      <AboutOwner />
      <About />
      <MoreImages />
      <PlotLayout />
      <ExploreMore />
    </div>
  );
};

export default LandingPage;
