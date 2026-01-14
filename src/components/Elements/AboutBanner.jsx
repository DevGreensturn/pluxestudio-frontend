import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

export default function AboutBanner() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleContactUsClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/' || location.pathname === '/home' || location.pathname === '') {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/')
      setTimeout(() => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 500)
    }
  }
  return (
    <section
      className='section-full'
      style={{
        background: 'linear-gradient(135deg, #f8f5f0 0%, #e1d8cc 100%)',
      
        padding: '25px 0'
      }}
    >
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-9 col-md-12'>
            <p
              style={{
                color: '#171513',
                fontSize: '32px',
                marginBottom: '10px',
                lineHeight: 1.3,
                fontWeight: 300
              }}
            >
              Your Dream Home, Redefined
            </p>
            <p
              style={{
                color: '#595243',
                fontSize: '16px',
                marginBottom: 0,
                maxWidth: '720px'
              }}
            >
              Curated design elements, bespoke interiors, and dedicated project management for a space that feels like home.
            </p>
          </div>
          <div className='col-lg-3 col-md-12 text-lg-right text-md-left mt-4 mt-lg-0'>
            {/* <NavLink
              to='#contact'
              className='site-button'
              style={{
                backgroundColor: '#111010',
                color: '#fdfbf7',
                padding: '16px 32px',
                border: 'none',
                display: 'inline-block',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontSize: '13px'
              }}
              onClick={handleContactUsClick}
            >
              Book Free Consultation
            </NavLink> */}
            <NavLink to='/contact' className='site-button' style={{ backgroundColor: '#111010', color: '#fdfbf7', padding: '16px 32px', border: 'none', display: 'inline-block', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '13px' }}>Book Free Consultation</NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}
