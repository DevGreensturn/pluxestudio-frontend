import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const nrimg = '/assets/media/images/nri.jpg'
const separator = require('./../../images/background/cross-line2.png')

export default function NriSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactUsClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/' || location.pathname === '/home' || location.pathname === '') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };
  return (
    <div className="section-full mobile-page-padding p-t80 p-b80 bg-repeat overflow-hide" style={{ backgroundColor: '#f2f0ec' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-12 m-b30">
            <div >
              <img src={nrimg} alt="Global luxury interior design"  />
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
           
            <h4 className="m-t0 sx-tilte" style={{ fontSize: '26px', lineHeight: 1.3, marginBottom: '16px' }}>Designing Homes Across the World</h4>
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '24px' }}>
              Pluxe Studio offers a seamless, luxury-first online design experience for global clients. Our work spans Dubai, London, Singapore, and beyond -- delivering sophisticated interiors that blend global trends with personal comfort.
            </p>
            <div style={{ display: 'grid', gap: '14px', marginBottom: '26px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'start', gap: '10px', padding: '14px 16px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 8px 25px rgba(0,0,0,0.06)' }}>
                <div style={{ fontWeight: 600, fontSize: '14px', letterSpacing: '0.3px', color: '#2d2a32', textTransform: 'uppercase' }}>What's Included</div>
                <div style={{ fontSize: '14px', lineHeight: 1.7, color: '#4a4752' }}>Virtual consultation | Space planning | 3D visuals | Furniture & decor guidance | Vendor-ready drawings | Remote coordination</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'start', gap: '10px', padding: '14px 16px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 8px 25px rgba(0,0,0,0.06)' }}>
                <div style={{ fontWeight: 600, fontSize: '14px', letterSpacing: '0.3px', color: '#2d2a32', textTransform: 'uppercase' }}>Why It Works</div>
                <div style={{ fontSize: '14px', lineHeight: 1.7, color: '#4a4752' }}>Global aesthetic | Personalised design | Smooth virtual execution | Exceptional detailing</div>
              </div>
            </div>
            <div className="text-left" style={{ marginTop: '50px' }}>
              {/* <NavLink
                to="#contact"
                className="site-button"
                style={{
                  backgroundColor: "#000",
                  color: '#fff',
                  padding: '14px 32px',
                  fontSize: '13px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  border: 'none',
                  display: 'inline-block',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease'
                }}
                onClick={handleContactUsClick}
              >
                <p style={{ margin: 0, fontSize: '13px' }}>Book Free Consultation</p>
              </NavLink> */}
              <NavLink to='/contact' className='site-button' style={{ backgroundColor: '#000', color: '#fff', padding: '14px 32px', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', border: 'none', display: 'inline-block', textDecoration: 'none', transition: 'background-color 0.3s ease' }}>Book Free Consultation</NavLink>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}