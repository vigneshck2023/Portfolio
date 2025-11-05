import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-simple">
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/vignesh-c-k-8a2528201/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/vigneshck2023"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:vigneshck2003@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://x.com/vigneshck2003"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
      </div>

      <p className="footer-text">
        © 2025 Vignesh C K. Made with <span className="heart">❤</span> by Vignesh.
      </p>
      <p className="footer-email">vigneshck.dev@gmail.com</p>
    </footer>
  );
}
