import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-between">
        <Link
          to="about"
          smooth={true}
          className="title-font font-semibold text-white text-2xl hover:text-teal-400 transition-colors cursor-pointer"
        >
          Ahmed Khan
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center ml-auto">
          <Link
            to="skills"
            smooth={true}
            className="mr-5 text-gray font-bold hover:text-teal-400 transition-colors cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            className="mr-5 text-gray font-bold hover:text-teal-400 transition-colors cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            className="mr-5 text-gray font-bold hover:text-teal-400 transition-colors cursor-pointer"
          >
            Contact
          </Link>
          <a
            href="../Ahmed_Khan_Resume.pdf"
            target="_blank"
            className="mr-5 text-gray font-bold hover:text-teal-400 transition-colors cursor-pointer"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
