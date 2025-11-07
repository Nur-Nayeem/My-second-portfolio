import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <div className="gradient-bg">
      <header className="container mx-auto py-5">
        <Navbar />
      </header>
      <main className="container mx-auto">
        <HeroSection />
        <AboutMe />
      </main>
    </div>
  );
};

export default App;
