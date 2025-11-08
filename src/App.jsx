import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="gradient-bg">
      <header className="fixed top-4 w-full z-50">
        <nav className="container mx-auto py-2">
          <Navbar />
        </nav>
      </header>
      <main className="container mx-auto pt-32">
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer className="container mx-auto" />
      </footer>
    </div>
  );
};

export default App;
