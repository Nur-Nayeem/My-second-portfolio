import React from "react";
import { skills } from "../data/myData";

const Skills = () => {
  return (
    <section
      id="skills"
      className={`py-12 glass-blur transition-colors duration-300 rounded-2xl mt-10`}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
        <div className="w-20 h-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] mx-auto"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 glass-blur rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={skill.img}
              alt=""
              className="w-16 h-16 object-contain mb-3"
            />
            <p className="text-lg font-medium text-gray-800 text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
