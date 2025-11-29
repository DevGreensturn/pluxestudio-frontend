import React from 'react'

export default function AboutProcess() {
  return (
    <section className="section-full mobile-page-padding p-t80 p-b80" style={{ backgroundColor: '#fdf9f4' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h3 style={{  marginBottom: '12px', color: '#1f1f1f', letterSpacing: '0.5px' }}>Our Process</h3>
         
        </div>
        <div style={{ position: 'relative', width: '100%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(15, 23, 42, 0.22)', backgroundColor: '#000' }}>
          <img src="/assets/media/images/progree.jpeg" alt="process" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </div>
      </div>
    </section>
  )
}
