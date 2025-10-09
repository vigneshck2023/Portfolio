import { Link } from "react-scroll";
import "./Header.css";

export default function Header() {
  return (
    <header className="navbar">
      <div className="logo-container">
        <span className="logo-tag">&lt;</span>
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="nav-logo"
          style={{ cursor: "pointer" }}
        >
          Vignesh C K
        </Link>
        <span className="logo-tag">/&gt;</span>
      </div>

      <nav className="nav-links">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="nav-item"
          offset={-70}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="nav-item"
          offset={-50}
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="nav-item"
          offset={-50}
        >
          Projects
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="nav-item"
          offset={-50}
        >
          Skills
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="nav-item"
          offset={-50}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
