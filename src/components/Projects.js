import React from "react";
import { projects } from "../data";
import { GiH2O } from "react-icons/gi";

export default function Projects() {
  return (
    <section id="projects" className="text-white bg-black body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-0 w-full">
        <div className="flex flex-col w-full mb-20">
          <h1 className="mx-auto inline-block w-10 mb-4" />
          <h2 className="text-5xl font-extrabold title-font text-white mb-4">
            Projects I worked on
          </h2>
          <p>
            <span className="text-xl italic">Hover to see more information</span>
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="w-full md:w-2/3 lg:w-1/2 p-4"
            >
              <div className="relative flex flex-col">
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center"
                    src={project.image}
                  />
                </div>
                <div className="absolute inset-0 w-full h-full px-8 py-10 flex items-center justify-center text-center rounded-md border-4 border-white bg-black opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
                  <div>
                    <h2 className="tracking-widest text-lg title-font font-extrabold text-slate mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-xl font-extrabold text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="font-bold text-md leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
