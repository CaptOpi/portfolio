import React from "react";
import Typewriter from "typewriter-effect";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function About() {
  return (
    <section id="about" className="flex items-center justify-center bg-zinc-100 py-20">
      <div className="container mx-auto flex px-10 md:flex-row flex-col items-center justify-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
          <span className="typewriter font-extrabold text-3xl lg:text-5xl">
            <p>Hi, I'm <span style={{ color: "#627bac" }}>Ahmed!</span></p>
          </span>
          <br className="hidden lg:inline-block" />
          <div className="minWidth-220 flex items-center justify-center text-center font-extrabold text-2xl lg:text-4xl">
            <span>I'm A&nbsp;</span>
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span style="color: #627bac;">Software Developer</span>')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('<span style="color: #627bac;">Backend Developer</span>')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('<span style="color: #627bac;">Problem Solver</span>')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('<span style="color: #627bac;">Team Player</span>')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('<span style="color: #627bac;">Computer Enthusiast</span>')
                  .pauseFor(1500)
                  .deleteAll()
                  .start();
              }}
            />
          </div>

          <div className="pt-5 flex gap-10 justify-center">
            <a
              href="https://github.com/captopi"
              className="github-btn ml-2 inline-flex border-0 py-3 px-8 focus:outline-none items-center text-color:white font-medium rounded-lg text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/ahmed-khan12"
              className="github-btn ml-2 inline-flex border-0 py-3 px-8 focus:outline-none items-center text-color:white font-medium rounded-lg text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="w-8 h-8" />
            </a>
          </div>
        </h1>
      </div>
    </section>
  );
}
