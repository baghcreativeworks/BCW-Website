import React from 'react'
import './Portfolio.css'

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Corporate Video Campaign',
      category: 'Video Editing',
      description: 'Professional video editing for a tech company launch, featuring dynamic cuts, color grading, and motion graphics that increased engagement by 300%',
    },
    {
      id: 2,
      title: 'YouTube Thumbnail Series',
      category: 'Thumbnail Design',
      description: 'Eye-catching thumbnail designs that boosted click-through rates by 250% for a content creator with over 500K subscribers',
    },
    {
      id: 3,
      title: 'Product Photography Collection',
      category: 'Photography',
      description: 'High-end product photography for an e-commerce brand, resulting in a 40% increase in conversion rates',
    },
    {
      id: 4,
      title: 'Social Media Transformation',
      category: 'Social Media Management',
      description: 'Complete social media overhaul for a lifestyle brand, growing followers by 500% in 6 months with strategic content planning',
    },
    {
      id: 5,
      title: 'Brand Showcase Campaign',
      category: 'Brand Promotion',
      description: 'Multi-platform brand campaign featuring video, photography, and social content that generated 2M+ impressions',
    },
    {
      id: 6,
      title: 'Event Coverage Package',
      category: 'Video & Photography',
      description: 'Full event documentation including video highlights and photo gallery for a corporate conference with 1000+ attendees',
    },
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">
                  <span className="placeholder-text">{project.title}</span>
                </div>
              </div>
              <div className="portfolio-info">
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

