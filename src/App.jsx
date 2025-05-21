import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import ExploreMore from "./components/ExploreMore";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <Home />
      <About />
      <ExploreMore />
      <Footer />
    </div>
  );
};

export default App;
