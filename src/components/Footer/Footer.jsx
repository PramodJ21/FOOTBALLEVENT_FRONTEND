import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container container">
      {/* Social Media Section */}
      <div className="footer__socials">
        <h3 className="footer__socials-title">Connect With Us</h3>
        <div className="footer__socials-list">
          <a 
            href="https://www.instagram.com/amigos.11_?igsh=MWZzZGprbWhzdXlxag==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer__social-link instagram"
            aria-label="Visit our Instagram page"
          >
            <FaInstagram className="footer__social-icon" />
          </a>
          <a 
            href="https://chat.whatsapp.com/BIhnPtqY3FrGsIjxeqZOaQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer__social-link whatsapp"
            aria-label="Join our WhatsApp group"
          >
            <FaWhatsapp className="footer__social-icon" />
          </a>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="footer__contact">
        <h3 className="footer__contact-title">Contact Details</h3>
        <div className="footer__contact-info">
          <div className="footer__contact-item">
            <span className="footer__contact-name">Atharva Gosavi:</span>
            <a href="tel:8180090267" className="footer__contact-link">8180090267</a>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-name">Himanshu Wankhede:</span>
            <a href="tel:9322771251" className="footer__contact-link">9322771251</a>
          </div>
        </div>
      </div>

      {/* Copyright/Additional Info Section */}
      <div className="footer__meta">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Amigos 11. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;