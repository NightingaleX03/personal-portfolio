import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaDev } from "react-icons/fa";
import "./footer.css";
import samewise from "../images/samwise2.0.png";

const Footer = () => {
  return (
    <div className="footer">
        <br></br>
      <div className="footer-container">
        {/* Left Column */}
        <div className="footer-left">
          <img src={samewise} alt="Logo" className="footer-logo" />
          <p className="footer-message">Thank you for stopping by!</p>
        </div>

        {/* Right Column */}
        <div className="footer-right">
          <p className="footer-created-by">Created by: Sarah Mathew</p>
          <p className="footer-date">2025/01/26</p>
          <div className="footer-icons">
            <a
              href="https://www.instagram.com/nightingalex03/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://github.com/NightingaleX03"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sarah-mathew-0a4a06204/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://devpost.com/NightingaleX03"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaDev size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
