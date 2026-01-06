import React from 'react'

const portfolioProjects = [
  {
    image: '/assets/media/images/delhi_villa.jpg',
    title: 'Delhi Villa',
    category: 'Residential',
    location: 'New Delhi, India',
    size: 'large'
  },
  {
    image: '/assets/media/images/gym-pic.jpeg',
    title: 'Gurgaon Gym',
    category: 'Commercial',
    location: 'Gurgaon, India',
    size: 'medium'
  },
  {
    image: require('./../../images/projects/square/1.jpg'),
    title: 'Modern Living Space',
    category: 'Residential',
    location: 'Mumbai, India',
    size: 'medium'
  },
  {
    image: require('./../../images/projects/square/2.jpg'),
    title: 'Luxury Apartment',
    category: 'Residential',
    location: 'Bangalore, India',
    size: 'large'
  },
  {
    image: require('./../../images/projects/square/3.jpg'),
    title: 'London Home',
    category: 'Residential',
    location: 'London, UK',
    size: 'medium'
  },
  {
    image: require('./../../images/projects/square/4.jpg'),
    title: 'Dubai Flat',
    category: 'Residential',
    location: 'Dubai, UAE',
    size: 'medium'
  },
  {
    image: require('./../../images/projects/square/5.jpg'),
    title: 'Contemporary Office',
    category: 'Commercial',
    location: 'Delhi, India',
    size: 'large'
  },
  {
    image: '/assets/media/images/botique.png',
    title: 'Boutique Showroom',
    category: 'Commercial',
    location: 'Mumbai, India',
    size: 'medium'
  }
]

var bgimg1 = require('./../../images/background/cross-line2.png')

export default function PortfolioSections() {
  return (
    <div className="section-full mobile-page-padding p-t80 p-b50" style={{ backgroundColor: '#f2f0ec' }}>
      <div className="section-content">
        <div className="container">
          <div className="section-head">
            <div className="sx-separator-outer separator-center">
              <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                <h3 style={{ border: 'none', padding: '10px' }} className="">Our Portfolio</h3>
              </div>
            </div>
          </div>
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '-15px', marginRight: '-15px' }}>
            {portfolioProjects.map((project, index) => {
              const isLarge = project.size === 'large'
              const colClass = isLarge ? 'col-lg-6' : 'col-lg-3'
              const height = isLarge ? '450px' : '350px'
              
              return (
                <div 
                  key={index} 
                  className={`${colClass} col-md-6 col-sm-12`}
                  style={{ 
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    marginBottom: '30px'
                  }}
                >
                  <div 
                    className="portfolio-card-modern"
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      height: height,
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)'
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)'
                        }}
                      />
                      <div 
                        className="portfolio-overlay"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end',
                          padding: '30px',
                          opacity: 1,
                          transition: 'opacity 0.3s ease'
                        }}
                      >
                        <div style={{ color: '#FFF' }}>
                          <span 
                            style={{
                              display: 'inline-block',
                              fontSize: '12px',
                              fontWeight: '600',
                              letterSpacing: '1.5px',
                              textTransform: 'uppercase',
                              color: '#d4d4d4',
                              marginBottom: '12px',
                              padding: '4px 12px',
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              borderRadius: '20px',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            {project.category}
                          </span>
                          <h4 
                            style={{
                              fontSize: isLarge ? '28px' : '22px',
                              fontWeight: '700',
                              marginBottom: '8px',
                              color: '#FFF',
                              lineHeight: '1.2',
                              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                            }}
                          >
                            {project.title}
                          </h4>
                          <p 
                            style={{
                              fontSize: '14px',
                              color: '#e0e0e0',
                              marginBottom: 0,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px'
                            }}
                          >
                            <i className="fa fa-map-marker" style={{ fontSize: '12px' }}></i>
                            {project.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div 
                    style={{
                      marginTop: '20px',
                      padding: '0 5px'
                    }}
                  >
                    <h4 
                      style={{
                        fontSize: '18px',
                        color: '#171513',
                        fontWeight: '600',
                        marginBottom: '5px'
                      }}
                    >
                      {project.title}
                    </h4>
                    <p 
                      style={{
                        fontSize: '13px',
                        color: '#595243',
                        marginBottom: 0,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {project.category}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <style>{`
        .portfolio-card-modern:hover .portfolio-overlay {
          background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%) !important;
        }
        @media (max-width: 991px) {
          .portfolio-card-modern {
            height: 350px !important;
          }
        }
      `}</style>
    </div>
  )
}
