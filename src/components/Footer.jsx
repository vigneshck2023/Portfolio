import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-simple">
      <div className="social-icons">
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:yourmail@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
      </div>

      <p className="footer-text">
        © 2025 Vignesh C K. Made with <span className="heart">❤</span> by Vignesh.
      </p>
      <p className="footer-email">vigneshck@gmail.com</p>
    </footer>
  );
}
