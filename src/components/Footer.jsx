import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">BCW × GS</h3>
            <p className="footer-tagline">
              Professional creative services that transform your content and elevate your brand
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Connect</h4>
              <a href="#" className="footer-link">Instagram</a>
              <a href="#" className="footer-link">Twitter</a>
              <a href="#" className="footer-link">LinkedIn</a>
              <a href="#" className="footer-link">Behance</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bagh Creative Works × Greyscale Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

