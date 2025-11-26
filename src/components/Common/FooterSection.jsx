import React from 'react'
import { NavLink } from 'react-router-dom'

const quickLinks = [
  { label: 'About', to: '/about', isActive: true },
  { label: 'Services', to: '#', isActive: false },
  { label: 'Projects', to: '#', isActive: false },
  { label: 'Blog', to: '#', isActive: false }
]

const serviceLinks = [
  { label: 'Luxury Residences' },
  { label: 'Commercial Spaces' },
  { label: 'Turnkey Execution' },
  { label: 'Design Consultation' }
]

const contactDetails = [
  { icon: 'fa-phone', label: '+91 987 107 6565', href: 'tel:+919871076565' },
  { icon: 'fa-envelope', label: 'info@pluxestudio.com', href: 'mailto:info@pluxestudio.com' },
  { icon: 'fa-map-marker', label: '13/33, Infocity 2, Gurugram - 122001', href: 'https://maps.app.goo.gl/vxppwK1s9NqYv9Ch8' }
]

const socialLinks = [
  { icon: 'fa-instagram', href: 'https://www.instagram.com/pluxe_studio/' },
  { icon: 'fa-facebook', href: 'https://www.facebook.com/pluxestudio' },
  { icon: 'fa-twitter', href: 'https://x.com/PluxeStudio' },
  { icon: 'fa-pinterest', href: 'https://www.pinterest.com' }
]

const highlights = [
  { value: '250+', label: 'Signature projects' },
  { value: '30+', label: 'Cities delivered' },
  { value: '12', label: 'Years crafting spaces' }
]

export default function FooterSection() {
  const year = new Date().getFullYear()

  const handleNewsletter = (event) => {
    event.preventDefault()
  }

  const blockClick = (event) => {
    event.preventDefault()
  }

  return (
    <section
      className="footer-section bg-dark"
      style={{
        background: 'linear-gradient(135deg,#050505,#141414)',
        color: '#fff',
        paddingTop: '80px'
      }}
    >
      <div className="container">
      
        <div className="row" style={{ paddingTop: '50px', paddingBottom: '50px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="col-lg-3 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
            <h5 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '13px', color: '#d4af37' }}>Studio</h5>
            <h3 style={{ fontSize: '26px', fontWeight: 400, marginTop: '10px', marginBottom: '15px', color: '#fff' }}>Pluxe Studio</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '20px' }}>
              Crafting timeless interiors driven by research, material mastery, and human-centric design.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {socialLinks.map((item) => (
                <a
                  key={item.icon}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <i className={`fa ${item.icon}`} />
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
            <h5 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>Explore</h5>
            <ul className="list-unstyled" style={{ margin: 0, padding: 0 }}>
              {quickLinks.map((item) => (
                <li key={item.label} style={{ marginBottom: '12px' }}>
                  {item.isActive ? (
                    <NavLink
                      to={item.to}
                      style={{
                        color: 'rgba(255,255,255,0.75)',
                        textDecoration: 'none',
                        fontSize: '15px',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <a
                      href="#"
                      onClick={blockClick}
                      aria-disabled="true"
                      style={{
                        color: 'rgba(255,255,255,0.6)',
                        textDecoration: 'none',
                        fontSize: '15px',
                        letterSpacing: '0.5px',
                        cursor: 'default'
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
            <h5 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>Services</h5>
            <ul className="list-unstyled" style={{ margin: 0, padding: 0 }}>
              {serviceLinks.map((item) => (
                <li key={item.label} style={{ marginBottom: '12px' }}>
                  <a
                    href="#"
                    onClick={blockClick}
                    aria-disabled="true"
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      fontSize: '15px',
                      letterSpacing: '0.5px',
                      cursor: 'default'
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
            <h5 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>Connect</h5>
            <ul className="list-unstyled" style={{ margin: 0, padding: 0 }}>
              {contactDetails.map((item) => (
                <li key={item.label} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px', color: 'rgba(255,255,255,0.8)' }}>
                  <i className={`fa ${item.icon}`} style={{ marginRight: '12px', marginTop: '4px', color: '#d4af37' }} />
                  <a
                    href={item.href}
                    target={item.icon === 'fa-map-marker' ? '_blank' : undefined}
                    rel={item.icon === 'fa-map-marker' ? 'noreferrer' : undefined}
                    style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', lineHeight: '1.6' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <div className="col-md-6 col-sm-12" style={{ marginBottom: '15px' }}>
            <span style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '1px' }}>© 2021 Pluxe Studio. All rights reserved.</span>
          </div>
          <div className="col-md-6 col-sm-12">
            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', color: 'rgba(255,255,255,0.6)' }}>
              <a href="#" onClick={blockClick} aria-disabled="true" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', cursor: 'default' }}>Privacy</a>
              <a href="#" onClick={blockClick} aria-disabled="true" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', cursor: 'default' }}>Terms</a>
              <a href="#" onClick={blockClick} aria-disabled="true" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', cursor: 'default' }}>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}