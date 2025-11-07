import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div className="h-screen gradient-bg">
      <header className="container mx-auto py-5">
        <Navbar />
      </header>
      <main className="container mx-auto">
        <HeroSection />
      </main>
    </div>
  );
};

export default App;
