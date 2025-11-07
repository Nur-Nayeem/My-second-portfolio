import React from "react";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../data/myData";

const Projects = () => {
  return (
    <section
      id="projects"
      className={`py-20 glass-blur transition-colors duration-300 rounded-2xl mt-10`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Here are some of my recent MERN stack projects. Each project
            demonstrates different aspects of full-stack development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <ProjectsCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              demoLink={project.demoLink}
              downloadLink={project.downloadLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Nur-Nayeem?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-primary hover:scale-105 text-white font-medium py-3 px-8 rounded-lg shadow-glow transition-all duration-300 rounded-button cursor-pointer"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
