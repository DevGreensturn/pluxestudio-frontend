import React from 'react';

export default function IntroPage() {
  return (
    <div className="section-full" style={{ background: '#f9f6f1', padding: '20px 0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-5 col-md-10 m-b30 mx-auto">
            <div
              style={{
                width: '100%',
                maxWidth: '340px',
                height: '340px',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 25px 70px rgba(0,0,0,0.15)',
                border: '1px solid #f0e9dd',
                transform: 'translateY(10px)',
                margin: '0 auto',
              }}
            >
              <img
                src="./../../assets/media/images/founder-image.jpg"
                alt="Founder portrait"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="col-lg-7 col-md-12">
            <div>
              {/* Name and Role */}
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                  color: '#333',
                }}
              >
                Preeti Ahuja
              </h3>
              <p
                style={{
                  fontSize: '12px',
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                  color: '#777',
                  marginBottom: '16px',
                }}
              >
                Founder & Creative Director
              </p>

              {/* Bio */}
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: 1.4,
                  color: '#4a4a4a',
                  marginBottom: '14px',
                  fontStyle: 'italic',
                }}
              >
                With over a decade of global exposure across the UK and the Middle East, I bring a refined, international perspective to modern Indian interior design. My passion for creating beautiful spaces began early in life—shaped by my early living in Doha, Qatar and London, UK, as well as enriched by extensive travel through the world's design capitals. These experiences helped me develop a deep understanding of global colour palettes, contemporary aesthetics, and timeless luxury.
              </p>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: 1.4,
                  color: '#4a4a4a',
                  marginBottom: '16px',
                  fontStyle: 'italic',
                }}
              >
                Much like many renowned designers, my journey into design unfolded organically—starting with creating elegant, personal spaces for friends, family, and my own home. What began as a personal passion soon evolved into a sought-after design practice, as my work drew attention for its modern sensibility, warmth, and understated sophistication.
              </p>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: 1.4,
                  color: '#4a4a4a',
                  marginBottom: '16px',
                }}
              >
                Pluxe Studio was born from a desire to combine this global perspective with an intimate, personalised design approach. As the Founder and Creative Lead at Pluxe Studio, I work closely with every client — understanding their lifestyle, aspirations, and the emotions they want their home to evoke. My goal is to design spaces that balance modern sophistication with timeless charm, while ensuring a seamless, enjoyable experience throughout the project.
              </p>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: 1.4,
                  color: '#4a4a4a',
                  marginBottom: '16px',
                }}
              >
                Based in Gurgaon, at the heart of India's premium residential landscape, I intuitively understand the tastes of luxury homeowners and craft spaces that feel elevated, meaningful, and beautifully personal.
              </p>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: 1.4,
                  color: '#4a4a4a',
                  marginBottom: '16px',
                }}
              >
                Today, Pluxe Studio serves clients across India, Dubai, and London, delivering interiors that reflect individuality, craftsmanship, and a refined global aesthetic. Every space we design is a thoughtful blend of who you are and the world-class design principles that inspire us.
              </p>

              {/* Founder Quote */}
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: 1.4,
                  color: '#4a4a4a',
                  marginBottom: '16px',
                  fontStyle: 'italic',
                }}
              >
                "Design is storytelling — and every space has a story I love to create."
              </p>

              {/* Stats */}
              {/* <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div>
                  <h5 style={{ fontSize: '14px', letterSpacing: '4px', color: '#96712a', marginBottom: '2px', fontWeight: 'bold' }}>
                    15+
                  </h5>
                  <p style={{ fontSize: '12px', color: '#777', letterSpacing: '2px' }}>Years Crafting Luxury</p>
                </div>
                <div>
                  <h5 style={{ fontSize: '14px', letterSpacing: '4px', color: '#96712a', marginBottom: '2px', fontWeight: 'bold' }}>
                    120+
                  </h5>
                  <p style={{ fontSize: '12px', color: '#777', letterSpacing: '2px' }}>Signature Residences</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
