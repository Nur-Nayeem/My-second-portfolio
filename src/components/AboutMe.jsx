import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaDownload, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="about"
      className={`py-20 glass-blur transition-colors duration-300 rounded-2xl`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-lg mb-6 leading-relaxed">
              I'm a passionate aspiring full-stack developer focusing on the
              MERN stack. While I’m just starting out, I’m constantly building
              projects to sharpen my skills and create user-friendly web
              applications. I’m eager to grow, learn, and turn ideas into
              functional, well-designed experiences.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              My journey in web development began with a fascination for
              creating interactive interfaces. Today, I leverage modern
              technologies to build scalable, performant applications that solve
              real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold mb-2">Location</h4>
                <p>Dhaka, Bangladesh</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Email</h4>
                <p>nurnayem768@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Experience</h4>
                <p>No</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Availability</h4>
                <p>Freelance & Full-time</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/nur-nayeem"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex justify-center items-center gap-2  rounded-button cursor-pointer "
              >
                <BsGithub /> <span className="hidden sm:block">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nur-mohammad-nayeem-803091352/"
                target="_blank"
                className="bg-primary/90 hover:bg-primary text-white py-2 px-4 rounded-lg transition-colors duration-300 flex justify-center items-center gap-2 rounded-button cursor-pointer"
              >
                <FaLinkedin /> <span className="hidden sm:block">LinkedIn</span>
              </a>
              <a
                href={""}
                className="bg-primary/90 hover:bg-primary text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 rounded-button cursor-pointer"
              >
                <FaDownload /> <span className="hidden sm:block">Resume</span>
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-[3px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] shadow-glow">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden">
                  <img
                    src={
                      "https://avatars.githubusercontent.com/u/109820227?v=4"
                    }
                    alt="Nur Nayeem"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-sm font-bold py-2 px-4 rounded-lg shadow-lg">
                MERN Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
