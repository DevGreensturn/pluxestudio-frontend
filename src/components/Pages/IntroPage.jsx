import React from 'react';

export default function IntroPage() {
  return (
    <div className="section-full p-t80 p-b80" style={{ background: '#f9f6f1', padding: '80px 0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-5 col-md-10 m-b30 mx-auto">
            <div
              style={{
               
              }}
            >
              <img
                src="./../../assets/media/images/founder-image.jpg"
                alt="Founder portrait"
                style={{
                  width: '200px',
                  height: '200px',
             
                  borderRadius: '50%',
              
                }}
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="col-lg-7 col-md-12">
            <div>
              {/* Main Title */}
            
              {/* Name and Role */}
              <h3
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                  color: '#333',
                }}
              >
                Preeti  Ahuja
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                  color: '#777',
                  marginBottom: '24px',
                }}
              >
                Founder & Creative Director
              </p>

              {/* Bio */}
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.4,
                  color: '#4a4a4a',
                  marginBottom: '18px',
                  fontStyle: 'italic',
                }}
              >
                Pluxe Studio, founded in 2019, blends luxury living with sustainability, creating bespoke interiors for high-end residences and commercial projects. Every concept integrates energy-efficient innovations and low-waste processes to deliver timeless elegance with environmental responsibility.
              </p>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.4,
                  color: '#4a4a4a',
                  marginBottom: '24px',
                  fontStyle: 'italic',
                }}
              >
                With expertise in sustainable design and client relations, we partner with homeowners, NRIs, millennial couples, and developers to craft premium interiors that honor refined aesthetics and mindful living while ensuring each space remains future-ready.
              </p>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                <div>
                  <h5 style={{ fontSize: '15px', letterSpacing: '4px', color: '#96712a', marginBottom: '4px', fontWeight: 'bold' }}>
                    15+
                  </h5>
                  <p style={{ fontSize: '13px', color: '#777', letterSpacing: '2px' }}>Years Crafting Luxury</p>
                </div>
                <div>
                  <h5 style={{ fontSize: '15px', letterSpacing: '4px', color: '#96712a', marginBottom: '4px', fontWeight: 'bold' }}>
                    120+
                  </h5>
                  <p style={{ fontSize: '13px', color: '#777', letterSpacing: '2px' }}>Signature Residences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
