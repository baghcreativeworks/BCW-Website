import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Bagh Creative Works</span>
            <span className="title-connector">×</span>
            <span className="title-line">Greyscale Studio</span>
          </h1>
          <p className="hero-subtitle">
            Professional video editing, photography, and social media services that transform your content into compelling stories. Elevate your brand with creative excellence.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">Explore Services</a>
            <a href="#contact" className="btn btn-secondary">Get Started</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="retro-grid">
            <div className="hero-image-container">
              <img src="/hero-image.jpg" alt="Bagh Creative Works × Greyscale Studio" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

