import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/pages/App.css";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const roles = ["Full Stack Developer", "Problem Solver"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  const handleTyping = useCallback(() => {
    const currentRole = roles[loopNum % roles.length];

    if (isDeleting) {
      setDisplayText(currentRole.substring(0, currentIndex - 1));
      setCurrentIndex(prev => prev - 1);

      if (currentIndex === 0) {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    } else {
      setDisplayText(currentRole.substring(0, currentIndex + 1));
      setCurrentIndex(prev => prev + 1);

      if (currentIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }
    }
  }, [currentIndex, isDeleting, loopNum, roles]);

  useEffect(() => {
    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(timer);
  }, [handleTyping, isDeleting]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        {/* === HERO SECTION === */}
        <section
          id="hero"
          className="hero d-flex align-items-center justify-content-center text-start"
        >
          <div className="binary-background"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>

          <div className="container">
            <div className="col-lg-8">
              <h1 className="hero-name mb-2">Vignesh C K</h1>
              <h3 className="hero-role mb-3">
                <span className="typed-text">{displayText}</span>
                <span className="cursor">|</span>
              </h3>
              <div className="underline mb-4"></div>

              <p className="hero-tagline mb-3">
               Passionate Full-Stack Developer crafting seamless and intuitive digital experiences.
              </p>
              <p className="hero-tech mb-4">
                Turning ideas into impactful products <span className="tech-highlight">React</span>,{" "}
                <span className="tech-highlight">Node.js</span>, and{" "}
                <span className="tech-highlight">MongoDB</span> to build
                — building scalable, modern, and user-focused applications. 
              </p>

              <div className="hero-buttons mt-4">
                <button 
                  className="btn btn-primary me-3"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </button>
                <button className="btn btn-outline-light">
                  <a
                    href="https://drive.google.com/file/d/1NVrVOm6jKV1IQBkp5lQWEgChpGIHNOpU/view?usp=sharing"
                    className="viewResume"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* === ABOUT SECTION === */}
        <section id="about" className="about-section py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="about-box p-4">
                  <h2 className="about-title mb-3">About Me</h2>
                  <p className="about-text">
                    I'm a{" "}
                    <span className="highlight">
                      2025 Computer Science graduate
                    </span>
                    , passionate about building high-performance, user-friendly
                    web applications with clean and efficient code.
                  </p>
                  <p className="about-text">
                    I enjoy solving complex problems, turning ideas into
                    intuitive digital experiences, and continuously learning to
                    grow as a developer.
                  </p>
                  <p className="about-text">
                    My goal is to create meaningful solutions that combine
                    performance, creativity, and real-world impact.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 text-center">
                <div className="code-animation">
                  <div className="code-line">{"function Developer() {"}</div>
                  <div className="code-line indent">
                    {'const mindset = "Eager to learn and grow";'}
                  </div>
                  <div className="code-line indent">
                    {"return passion + curiosity + mindset;"}
                  </div>
                  <div className="code-line">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Project/>
        <Skills/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}