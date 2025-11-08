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
    <div className="flex flex-col glass-blur p-6 rounded-xl overflow-hidden hover:shadow-2xl hover:scale-102 transition-all duration-300 h-full">
      <img className="w-full h-48 bg-cover bg-center rounded-lg" src={image} />
      <div className="flex flex-col justify-between max-h-60 h-full gap-3 mt-4">
        <h3 className="text-slate-900 text-xl font-bold">{title}</h3>
        <p className="text-slate-600 text-sm">
          {description.slice(0, 82) + "..."}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-2 text-xs font-medium bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a
            href={demoLink ? demoLink : downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/90 hover:bg-primary hover:scale-105 text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm flex items-center gap-2 rounded-button cursor-pointer"
          >
            <BiLinkExternal />{" "}
            <span>{demoLink ? "Live Demo" : "Download Link"}</span>
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors duration-300 text-sm flex items-center gap-2 rounded-button cursor-pointer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
