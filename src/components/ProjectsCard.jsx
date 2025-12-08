import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const ProjectsCard = ({
  image,
  title,
  description,
  technologies,
  demoLink,
  downloadLink,
  githubLink,
}) => {
  return (
    <div className="relative glass-blur rounded-xl overflow-hidden group border border-white/20 hover:shadow-[0_0_15px_2px_rgba(71,37,244,0.6)] transition-all duration-500 min-h-72">
      {/* Ribbon */}
      <div className="absolute top-0 left-0 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-xs font-semibold px-3 py-1 rounded-br-lg shadow-md z-20">
        Featured
      </div>

      {/* Added h-full to the main flex container */}
      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-1/2 relative h-60 md:h-auto">
          <img
            src={image}
            className="w-full h-full transition-all duration-500 group-hover:scale-105"
          />
        </div>

        <div className="md:w-1/2 p-6 flex flex-col gap-4 h-full">
          <h3 className="text-slate-900 text-xl font-bold">{title}</h3>

          <p className="text-slate-600 text-sm">
            {description.slice(0, 110) + "..."}
          </p>

          {/* Technology Chips */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-full shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons - mt-auto ensures this pushes to the bottom of the card content */}
          <div className="flex gap-3 mt-auto">
            <a
              href={demoLink ? demoLink : downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-sm px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
            >
              <BiLinkExternal />
              <span>{demoLink ? "Live Demo" : "Download"}</span>
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary text-base-100 text-sm px-4 py-2 rounded-lg hover:bg-[#001321] transition-all duration-300 shadow-md"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
