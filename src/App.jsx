import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing Page/LandingPage";
import InquiryForm from "./components/Login-JoinUs/InquiryForm";
import AgentsPage from "./components/Agents/AgentsPage";
import Properties from "./components/Property/Properties";
import Story from "./components/Stories/Story";
import MyMap from "./components/Gmap/MyMap";
import StickyIcons from "./components/StickyIcons.jsx/StickyIcons";

const App = () => {
  useEffect(() => {
    var Tawk_API = window.Tawk_API || {};
    var Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/683179e512ae50190a96fdc1/1is0k8abf";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<InquiryForm />} path="/inquiryForm" />
        <Route element={<Story />} path="/story" />
        {/* <Route element={<AgentsPage />} path="/agents" /> */}
        <Route element={<Properties />} path="/properties" />
      </Routes>
      <StickyIcons />
      <MyMap />
      <Footer />
    </Router>
  );
};

export default App;
