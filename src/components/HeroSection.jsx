import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="py-24 md:py-32 relative overflow-hidden">
      {/* subtle background blobs */}
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl bg-linear-to-r from-[#632EE3]/30 via-[#9F62F2]/20 to-[#632EE3]/30" />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* TEXT SIDE */}
        <div className="text-center md:text-left flex flex-col gap-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Hi, I'm
            <br />
            <span className="gradient-text">Nur Mohammad Nayeem</span>
          </h1>

          <h2 className="text-primary text-lg md:text-xl font-semibold">
            MERN Stack Developer
          </h2>

          {/* BUTTONS */}
          <div className="mt-4 flex flex-wrap gap-4 md:justify-start justify-center">
            <a
              href="#contact"
              className="btn-primary rounded-xl px-8 py-4 text-white font-bold hover:scale-105 shadow-glow transition-transform duration-300 cursor-pointer"
            >
              Hire Me
            </a>

            <a
              href="#projects"
              className="glass-blur rounded-xl px-6 py-3.5 font-semibold text-slate-900 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full p-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] shadow-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src="https://avatars.githubusercontent.com/u/109820227?v=4"
                  alt="Nur Nayeem"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Bottom Badge */}
            <span className="absolute -bottom-4 right-0 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg shadow-md text-sm font-semibold">
              MERN Developer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
