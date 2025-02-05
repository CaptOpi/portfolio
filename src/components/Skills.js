import React from "react";
import { skills } from "../data"; 

export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-20">
      <div className="max-w-screen-4xl mx-auto px-5">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 sm:w-1/3 md:w-1/4 w-full">
              <div className="bg-black rounded flex p-6 h-48 items-center justify-center outline outline-4 outline-slate transition-transform duration-300 ease-in-out transform hover:bg-slate cursor-pointer hover:translate-y-[-10px] hover:shadow-lg">
                <span className="title-font font-extrabold text-white text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl overflow-hidden text-ellipsis whitespace-nowrap">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
