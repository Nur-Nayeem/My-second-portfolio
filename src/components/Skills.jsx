import React from "react";

const Skills = () => {
  return (
    <section
      id="about"
      className={`py-20 glass-blur transition-colors duration-300 rounded-2xl mt-10`}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
        <div className="w-20 h-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] mx-auto"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto px-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 glass-blur rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt=""
              className="w-16 h-16 object-contain mb-3"
            />
            <p className="text-lg font-medium text-gray-800 text-center">
              React JS
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
