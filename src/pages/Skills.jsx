import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaCuttlefish, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiGit, SiRedux } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="skill-icon" /> },
        { name: "CSS3", icon: <FaCss3Alt className="skill-icon" /> },
        { name: "JavaScript", icon: <FaJs className="skill-icon" /> },
        { name: "React", icon: <FaReact className="skill-icon" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="skill-icon" /> },
        { name: "Redux", icon: <SiRedux className="skill-icon" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="skill-icon" /> },
        { name: "Express.js", icon: <SiExpress className="skill-icon" /> },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="skill-icon" /> },
        { name: "Git", icon: <SiGit className="skill-icon" /> },
      ],
    },
    {
      title: "Programming",
      skills: [
        { name: "C++", icon: <FaCuttlefish className="skill-icon" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="skills-title mb-3">Skills & Technologies</h2>
          <div className="underline mx-auto mb-3"></div>
          <p className="skills-subtitle">
            Technologies I use to build amazing web applications
          </p>
        </div>
        
        <div className="row gy-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="skill-category p-4">
                <div className="category-header mb-4">
                  <h4 className="category-title">{category.title}</h4>
                  <div className="category-line"></div>
                </div>
                <div className="skills-grid">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skill-item text-center">
                      <div className="skill-icon-wrapper">
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}