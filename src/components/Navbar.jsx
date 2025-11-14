import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
const sections = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActive(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="glass-blur rounded-2xl flex justify-between items-center py-4 px-2.5 md:px-10">
      <div className="flex justify-center items-center gap-2">
        <a className="text-xl font-bold gradient-text">NUR NAYEEM</a>
      </div>
      <div className="flex">
        <ul className="hidden lg:flex justify-center items-center gap-8 cursor-pointer">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`hover:scale-105 hover:text-primary transition-all duration-300 ${
                  active === section ? "text-primary font-bold" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="ml-8 btn-primary shadow-glow hover:scale-105 transition-transform duration-300 text-white py-2 px-4 rounded-lg font-bold cursor-pointer "
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
