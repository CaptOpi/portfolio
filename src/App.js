import React, { useState, useEffect } from "react";
import Skills from "./components/Skills"; 
import Projects from "./components/Projects"; 
import About from "./components/About"; 
import Education from "./components/Education"; 
import "animate.css";
function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isNavTransparent, setIsNavTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavVisible(true);  
        setIsNavTransparent(false);  
      } else {
        setIsNavVisible(false);  
        setIsNavTransparent(true); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="top" className="App">
      <div
        className={`transition-all duration-300 ease-in-out fixed top-0 left-0 w-full p-3.5 bg-slate z-40`}
      >
      </div>
      <header>
        <nav
          id="nav-on-scroll"
          className={`bg-slate fixed top-0 left-0 w-full z-40 shadow duration-300 ease-in-out transition-all transform ${isNavVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <div
            className={`w-full sm:w-11/12 md:w-12/12 lg:w-9/12 mx-auto py-5 flex transition-all duration-300 ease-in-out ${isNavTransparent ? 'bg-transparent' : 'bg-slate'
              }`}
          >
            <div className="bg-cover bg-center h-full w-full">
              <div className="flex  items-center w-full">
                <h1 className="text-2xl font-extrabold">
                  <a href="#top" className="text-black hover:text-blue-500">
                    <span className="inline-block rounded-md animate__animated xl:mr-6 animate__fadeInDown border-4 border-black text-black select-none p-2 inline-block text-2xl xl:text-3xl font-extrabold">
                      AK
                    </span>
                  </a>
                </h1>
                <div className="flex">
                  <a
                    href="#skills"
                    className="p-1.5 inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
                  >
                    Skills
                  </a>
                  <a
                    href="#education"
                    className="p-1.5 inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
                  >
                    Education
                  </a>
                  <a
                    href="#projects"
                    className="p-1.5 inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
                  >
                    Projects
                  </a>
                  <a
                    href="./Ahmed_Khan_Resume.pdf"
                    target="_blank"
                    className="p-1.5 inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="xl:p-20 pt-10 xl:pb-22">
        <div className="w-12/12 sm:w-11/12 md:w-12/12 lg:w-9/12 col-centered">
          <h1 className="text-2xl font-extrabold">
            <a href="#top" className="text-black kill-link-style">
              <span className="duration-1000 inline-block rounded-md animate__animated xl:mr-6 animate__fadeInDown border-4 border-black select-none p-2 inline-block text-2xl xl:text-3xl font-extrabold">
                AK
              </span>
            </a>
            <a
              href="#skills"
              className="delay1 p-1.5 inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
            >
              Skills
            </a>
            <a
              href="#education"
              className="delay2 p-1.5 inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
            >
              Education
            </a>
            <a
              href="#projects"
              className="delay3 p-1.5 inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
            >
              Projects
            </a>
            <a
              href="./Ahmed_Khan_Resume.pdf"
              target="_blank"
              className="delay4 p-1.5 inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
            >
              Resume
            </a>
          </h1>
          <div className="mt-20">
          <div style={{"w":"full", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
            <img src="FullSizeRender.jpg" alt="noImage" style={{filter: "brightness(1.5)",animation: 'fadeIn 3s forwards',border:"5px solid black",width:"400px",height:"400px","borderRadius" :"100%"}}/>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Education />
      <Projects />
      <footer className="shadow py-6 bg-gray-200">
        <div className="text-lg container mx-auto px-4 text-center font-extrabold">
          <p>&copy; 2025 Ahmed Khan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
