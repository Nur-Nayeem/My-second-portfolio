import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center py-20" id="hero">
      <div className="flex flex-col gap-4">
        <h1 className="text-slate-900 text-5xl md:text-7xl font-black leading-tight tracking-tighter">
          Nur Mohammad Nayeem
        </h1>
        <h2 className="text-primary text-lg md:text-2xl font-bold leading-normal">
          MERN Stack Developer
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto md:text-lg">
          Crafting modern, responsive, and performant web experiences from
          concept to deployment.
        </p>
      </div>
      <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
        <button className="btn-primary border border-primary/70 shadow-glow rounded-xl px-8 py-4 text-white font-bold hover:scale-105 transition-transform duration-300 cursor-pointer">
          Hire Me
        </button>
        <button className="glass-blur rounded-xl px-6 py-3.5 text-slate-900 font-bold hover:scale-105 transition-transform duration-300 cursor-pointer relative">
          View Projects
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
