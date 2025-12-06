import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-12 glass-blur transition-colors duration-300 rounded-2xl mt-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-blur p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2">
              B.Sc. in Computer Science & Engineering (CSE)
            </h3>

            <p className="text-lg font-semibold text-primary mb-1">
              Bangladesh University of Business & Technology (BUBT)
            </p>

            <p className="text-gray-700">Jan 2022 – Dec 2025</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="glass-blur rounded-xl p-4 shadow-sm">
                <h4 className="font-semibold mb-1">Degree</h4>
                <p className="text-gray-700 text-sm">Bachelor's Program</p>
              </div>

              <div className="glass-blur rounded-xl p-4 shadow-sm">
                <h4 className="font-semibold mb-1">Department</h4>
                <p className="text-gray-700 text-sm">
                  Computer Science & Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
