import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Bagh Creative Works × Greyscale Studio is a premier creative agency specializing 
              in professional video production, photography, and social media management. 
              We transform your vision into compelling visual content that captivates audiences 
              and drives engagement.
            </p>
            <p>
              From polished video edits and stunning photography to strategic social media 
              campaigns and brand promotion, we deliver results that elevate your business. 
              Our team combines technical expertise with creative innovation to ensure your 
              content stands out in today's competitive digital landscape.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

