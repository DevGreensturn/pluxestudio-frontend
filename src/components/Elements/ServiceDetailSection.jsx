import React from 'react'

const serviceDetails = [
  {
    title: 'Full Home Interior Design',
    description: 'Concept-to-completion interior design for modern homes seeking elegance, sophistication, and cohesive visual identity.',
    includes: 'Theme development • Space planning • Moodboards • 3D renders • Material selection • Furniture & décor curation • Vendor coordination • Final styling',
    note: '→ Shared after consultation'
  },
  {
    title: 'Room Design & Transformations',
    description: 'Bespoke design solutions for individual rooms, tailored to enhance comfort, style, and daily living.',
    includes: 'Concept design • Moodboards • Layouts • Colour palettes • Optional 3D renders • Décor & material guidance',
    note: '→ Customised per project'
  },
  {
    title: 'Modular Kitchens & Wardrobes',
    description: 'Modern, efficient, and elegant modular systems crafted with precision and premium finishes.',
    includes: 'Modular kitchens • Walk-in wardrobes • Built-in wardrobes • Storage units • TV units • Study areas • Hardware & material selection',
    note: '→ Tailored to your home'
  },
  {
    title: 'Customised Furniture',
    description: 'Bespoke Furniture Design Handcrafted furniture pieces designed exclusively for your space — blending luxury, comfort, and craftsmanship.',
    includes: 'Beds • Sofas • Consoles • Dining sets • Lounge seating • Custom cabinetry',
    note: '→ Designed for your lifestyle'
  },
  {
    title: ' Commercial & Boutique Spaces',
    description: 'Luxury Commercial & Boutique Interiors Sophisticated interiors for offices, cafés, studios, and boutique brands, designed to reflect identity and elevate customer experience.',
    includes: 'Brand-aligned concepts • Space optimisation • Lighting design • Execution-ready drawings',
    note: '→ Bespoke commercial design'
  },
  {
    title: 'Luxury Commercial & Boutique Interiors',
    description: 'Elegant outdoor environments including balconies, terraces, gardens, and courtyards.',
    includes: 'Outdoor layouts • Plant palette • Decking • Seating concepts • Lighting • Water features',
    note: '→ Designed for serenity & beauty'
  },
  {
    title: 'NRI & Global Interior Design',
    description: 'Luxury virtual design for homes across the UAE, UK, US, Singapore, and beyond.',
    includes: 'Virtual consultation • Layouts • 3D renders • Material & furniture guidance • Vendor-ready drawings • Remote supervision',
    note: '→ For clients seeking global-quality design from anywhere'
  },
  {
    title: 'Execution Management',
    description: 'Complete onsite supervision for clients who prefer turnkey delivery.',
    includes: 'Site coordination • Quality checks • Material management • Installation • Final styling',
    note: '→ Optional service'
  }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

export default function ServiceDetailSection() {
  return (
    <div className="section-full mobile-page-padding p-t60 p-b50" style={{ backgroundColor: '#f2f0ec' }}>
      <div className="section-content">
        <div className="container">
          <div className="section-head">
            <div className="sx-separator-outer separator-left">
              <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                <h3 style={{ border: 'none', padding: '10px' }} className=""> Services</h3>
              </div>
            </div>
          </div>
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {serviceDetails.map((item, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 m-b20" key={index} style={{ display: 'flex' }}>
                <div className="sx-icon-box-wraper icon-count-2-outer" style={{ width: '100%', display: 'flex' }}>
                  <div className="icon-count-2 bg-white" style={{ padding: '40px 35px', width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="icon-content" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <h4 className="sx-tilte" style={{ marginBottom: '20px' }}>{item.title}</h4>
                      <p style={{ fontSize: '16px', color: '#595243', lineHeight: '1.7', marginBottom: '20px' }}>
                        {item.description}
                      </p>
                      <div style={{ marginBottom: '20px', flex: 1 }}>
                        <p style={{ fontSize: '16px', color: '#171513', fontWeight: '600', marginBottom: '10px' }}>Includes:</p>
                        <p style={{ fontSize: '14px', color: '#595243', lineHeight: '1.8', marginBottom: '5px' }}>
                          {item.includes}
                        </p>
                      </div>
                      <p style={{ fontSize: '14px', color: '#595243', marginBottom: 0, marginTop: 'auto' }}>
                        {item.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
