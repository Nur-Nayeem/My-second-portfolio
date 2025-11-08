import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="container mx-auto rounded-t-2xl py-12 glass-blur transition-colors duration-300 mt-10">
      <div className="grid grid-cols-1 gap-12">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold mb-4">NUR NAYEEM</h1>
          <p className="mb-4  text-gray-600">
            A passionate MERN stack developer focused on creating beautiful,
            functional, and user-centered digital experiences.
          </p>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://github.com/nur-nayeem"
              target="_blank"
              className="text-gray-600 hover:text-primary  transition-colors duration-300 cursor-pointer"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/nur-mohammad-nayeem-803091352/"
              target="_blank"
              className="text-gray-600 hover:text-primary  transition-colors duration-300 cursor-pointer"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://www.facebook.com/nur.nayeem614"
              target="_blank"
              className="text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href="https://twitter.com/username"
              target="_blank"
              className="text-gray-600 hover:text-purple-600transition-colors duration-300 cursor-pointer"
            >
              <FaXTwitter className="text-xl" />
            </a>
          </div>

          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-4">
            <li>
              <a
                href="#hero"
                className="text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-5 max-w-5xl mx-auto text-gray-600/10" />

      <div className="text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Nur Nayeem. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
