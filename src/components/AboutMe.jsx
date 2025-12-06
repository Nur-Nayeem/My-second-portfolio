import React from "react";
import { BsGithub } from "react-icons/bs";
import {
  FaDownload,
  FaLinkedin,
  FaProjectDiagram,
  FaLaptopCode,
  FaClock,
} from "react-icons/fa";

import resume from "../data/resume.pdf";

const AboutMe = () => {
  const cards = [
    {
      title: "My Services",
      description:
        "Full-stack development with a focus on MERN stack projects.",
      icon: <FaLaptopCode className="text-3xl text-primary" />,
    },
    {
      title: "Projects Completed",
      description: "Successfully Completed 20+ web applications.",
      icon: <FaProjectDiagram className="text-3xl text-primary" />,
    },
    {
      title: "Experience",
      description:
        "1 year of hands-on experience building real-world projects.",
      icon: <BsGithub className="text-3xl text-primary" />,
    },
    {
      title: "Support",
      description: "Available 24/7 to assist with queries and project needs.",
      icon: <FaClock className="text-3xl text-primary" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-12 glass-blur transition-colors duration-300 rounded-2xl mt-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: About text */}
          <div>
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
                <p className="break-words">nurnayem768@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Experience</h4>
                <p>Personal Projects</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Availability</h4>
                <p>Freelance & Full-time</p>
              </div>
            </div>

            <div className="flex gap-4 items-center mb-8">
              <a
                href="https://github.com/nur-nayeem"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex justify-center items-center gap-2"
              >
                <BsGithub /> <span className="hidden sm:block">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nur-mohammad-nayeem/"
                target="_blank"
                className="bg-primary/90 hover:bg-primary text-white py-2 px-4 rounded-lg transition-colors duration-300 flex justify-center items-center gap-2"
              >
                <FaLinkedin /> <span className="hidden sm:block">LinkedIn</span>
              </a>
              <a
                href={resume}
                download="Nur-Nayeem-Resume.pdf"
                className="bg-primary/90 hover:bg-primary text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FaDownload /> <span className="hidden sm:block">Resume</span>
              </a>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="grid grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 glass-blur rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-2">{card.icon}</div>
                <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                <p className="text-gray-600 text-sm text-center">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
