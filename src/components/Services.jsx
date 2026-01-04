import React from 'react'
import './Services.css'

function Services() {
  const services = [
    {
      id: 1,
      image: '/service-video-editing.jpg',
      title: 'Professional Video Editing',
      description: 'Transform your raw footage into captivating stories. From corporate videos to social media content, we deliver polished, professional edits that engage and convert.',
      features: ['Color Grading', 'Motion Graphics', 'Sound Design', 'Multi-format Export']
    },
    {
      id: 2,
      image: '/service-photo-editing.jpg',
      title: 'Thumbnail & Photo Editing',
      description: 'Eye-catching thumbnails and stunning photos that stop the scroll. Professional editing that maximizes engagement and click-through rates.',
      features: ['Custom Thumbnails', 'Photo Retouching', 'Brand Consistency', 'High-Resolution Output']
    },
    {
      id: 3,
      image: '/service-android-app.jpg',
      title: 'Android App Development',
      description: 'Build powerful, user-friendly Android applications from concept to deployment. We create native mobile experiences that engage users and drive business growth.',
      features: ['Custom UI/UX Design', 'Native Development', 'API Integration', 'Performance Optimization']
    },
    {
      id: 4,
      image: '/service-social-media.jpg',
      title: 'Social Media Management & Optimization',
      description: 'Grow your online presence with strategic content planning, scheduling, and optimization. We help brands build engaged communities and drive results.',
      features: ['Content Strategy', 'Post Scheduling', 'Analytics & Insights', 'Community Engagement']
    },
    {
      id: 5,
      image: '/service-brand-showcase.jpg',
      title: 'Brand & Service Showcase',
      description: 'Elevate your brand with compelling visual storytelling. From service promotion to brand campaigns, we create content that resonates with your audience.',
      features: ['Brand Campaigns', 'Service Promotion', 'Visual Identity', 'Marketing Materials']
    },
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="services-intro">
          Professional creative services designed to elevate your brand and drive results. 
          We combine technical expertise with creative vision to deliver exceptional outcomes.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

