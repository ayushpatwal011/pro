import React from "react";
import ScrollFloat from "../ui/ScrollReveal";
import { experience } from "../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="  py-10 md:px-10  flex flex-col items-center"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-8  text-gray-700">
        My Experience
      </h2>
      <div className="space-y-12 w-full max-w-5xl ">
        {experience.map((data, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 p-6  rounded-2xl shadow-lg bg-white  hover:shadow-xl transition duration-300"
          >
            {/* Image Section */}
            <div className="w-full md:w-1/3">
              <img
                src={data.img}
                alt="experience"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {data.title}
              </h3>
              <p className="text-gray-600 ">{data.dis}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
