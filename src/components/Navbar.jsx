import React from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="glass-blur rounded-2xl flex justify-between items-center py-4 px-2.5 md:px-10">
      <div className="flex justify-center items-center gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden cursor-pointer">
            <IoMenu className="h-6 w-6" />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content flex flex-col gap-2.5 glass-blur rounded-box z-10 mt-7 w-52 p-4 shadow cursor-pointer"
          >
            <a
              href="#hero"
              className="hover:scale-105 hover:text-primary transition-all duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:scale-105 hover:text-primary transition-all duration-300"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:scale-105 hover:text-primary transition-all duration-300"
            >
              Skill
            </a>

            <a
              href="#projects"
              className="hover:scale-105 hover:text-primary transition-all duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:scale-105 hover:text-primary transition-all duration-300"
            >
              Contact
            </a>
          </ul>
        </div>
        <a className="text-xl font-bold">Nur Nayeem</a>
      </div>
      <div className="flex">
        <ul className="hidden lg:flex justify-center items-center gap-8 cursor-pointer">
          <a
            href="#hero"
            className="hover:scale-105 hover:text-primary transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:scale-105 hover:text-primary transition-all duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:scale-105 hover:text-primary transition-all duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:scale-105 hover:text-primary transition-all duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:scale-105 hover:text-primary transition-all duration-300"
          >
            Contact
          </a>
        </ul>
        <button className="ml-8 btn-primary shadow-glow hover:scale-105 transition-transform duration-300 text-white h-10 px-4 rounded-lg font-bold cursor-pointer ">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
