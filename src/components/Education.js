import React from "react";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="bg-white py-20">
      <div className="container mx-auto px-5">
        <div className="text-center mb-6">
          <FaGraduationCap className="w-12 h-12 text-slate inline-block mb-4" />
          <h1 className="text-5xl font-extrabold title-font text-black mb-2">Education</h1>
        </div>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl text-black font-extrabold">
            Rutgers University - New Brunswick
          </h2>
          <p className="text-2xl text-slate font-extrabold">B.S. in Computer Science</p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, Math.floor(courses.length / 3) * 3).map((course, index) => (
              <div key={index} className="bg-black shadow-lg rounded-lg p-6">
                <h3 className="text-center text-xl font-extrabold text-white mb-0.5">{course.name}</h3>
                <h2 className="text-center text-sm font-extrabold text-slate mb-2">{course.language}</h2>
                <p className="text-center font-semibold text-gray-300">{course.description}</p>
              </div>
            ))}
          </div>
          {courses.length % 3 !== 0 && (
            <div className="flex justify-center gap-6 mt-6">
              {courses.slice(Math.floor(courses.length / 3) * 3).map((course, index) => (
                <div key={index} className="bg-black shadow-lg rounded-lg p-6 w-full sm:w-1/2 lg:w-1/3">
                  <h3 className="text-center text-xl font-extrabold text-white mb-0.5">{course.name}</h3>
                  <h2 className="text-center text-sm font-extrabold text-slate mb-2">{course.language}</h2>
                  <p className="text-center font-semibold text-gray-300">{course.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const courses = [
  {
    name: "Data Structures",
    language: "Java",
    description:
      "Covers essential data structures, algorithms, searching, sorting, and hashing techniques for efficient problem-solving.",
  },
  {
    name: "Intro to Artificial Intelligence",
    language: "Python",
    description:
      "Covers fundamental AI concepts including search, knowledge representation, planning, and vision using graph structures.",
  },
  {
    name: "Computer Architecture",
    language: "C",
    description:
      "Fundamental issues in modern computer design, including processors, memory, I/O devices, and the software/hardware interface.",
  },
  {
    name: "Systems Programming",
    language: "C",
    description:
      "Hands-on programming using Linux POSIX functions for memory management, processes, file systems, sockets, and multithreading.",
  },
  {
    name: "Software Methodology",
    language: "Java, JavaFX, Android Studio",
    description:
      "Object-oriented programming, UML, APIs, debugging, GUI frameworks, version control, and mobile development in Java.",
  },
  {
    name: "Principles of Info & Data Managing",
    language: "SQL, Java, JDBC, HTML/CSS",
    description:
      "Database design, relational databases, information retrieval, XML, and database management system fundamentals.",
  },
  {
    name: "Discrete Structures",
    language: "Probability and Logic",
    description:
      "Logical proofs, induction, combinatorics, and probability theory essential for algorithms and computer science.",
  },
  {
    name: "Data Management for Data Science",
    language: "Python",
    description:
      "Curating and preparing datasets for analysis using SQL, focusing on real-world data management techniques.",
  }
];
