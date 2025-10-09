import "./Project.css";

export default function Project() {
  const projects = [
    {
      title: "Anvaya CRM",
      description:
        "A lead management app with defined lifecycle steps, sales agent assignment, and the ability to add comments or updates for each lead.",
      tech: ["React","Bootstrap", "MongoDB", "ExpressJS", "NodeJS", "ChartJS"],
      demo: "https://anvaya-crm-frontend-sandy.vercel.app/",
      code: "https://github.com/vigneshck2023/Anvaya-CRM-Frontend",
    },
    {
      title: "Ishara Ecommerce",
      description:
        "Clothing e-commerce application with RESTful APIs using Express.js and MongoDB, supporting full CRUD operations for products and orders.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      demo: "https://clothing-ecom-ishara.vercel.app/",
      code: "https://github.com/vigneshck2023/Clothing_Ecom_Ishara",
    },
    {
      title: "BookShelf Application",
      description:
        "Automated book categorization and storage using ES6 features (Promises, Async/Await), reducing manual classification effort",
      tech: ["React","Bootstrap","Framer-Motion","Lucide-React"],
      demo: "https://xnphn2.csb.app/",
      code: "https://github.com/vigneshck2023/BookFinder-Application/",
    },
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="projects-title mb-3">My Projects</h2>
          <div className="underline mx-auto mb-3"></div>
          <p className="section-subtitle">
            Here are some of my recent works that showcase my skills
          </p>
        </div>
        
        <div className="row gy-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="project-card p-4">
                <div className="project-icon mb-3">💼</div>
                <h4 className="project-name mb-3">{project.title}</h4>
                <p className="project-desc mb-3">{project.description}</p>
                
                <div className="project-tech mb-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-demo me-2"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-code"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <p className="more-projects">
            View more on my{" "}
            <a 
              href="https://github.com/vigneshck2023" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}