import React from 'react'

export default function AboutStory() {
    var aboutimg1 = '/assets/media/images/story.jpeg';
var bgimg1 = require('./../../images/background/cross-line2.png');  
var bgimg2 = require('./../../images/background/cross-line2.png');             
  return (
    <div>
        <style>{`
            .about-story-row {
                display: flex !important;
                align-items: stretch !important;
                width: 100% !important;
            }
            .about-story-row > div {
                display: flex !important;
                align-self: stretch !important;
                flex: 1 1 50% !important;
            }
            .about-story-row .col-lg-6 {
                max-width: 50% !important;
            }
            .about-story-row .sx-img-effect {
                width: 100% !important;
                height: 100% !important;
                display: flex !important;
                align-items: stretch !important;
            }
            .about-story-row .sx-img-effect img {
                width: 100% !important;
                height: 100% !important;
                object-fit: cover !important;
                flex-shrink: 0 !important;
            }
            .about-story-text-wrapper {
                width: 100% !important;
                display: flex !important;
                flex-direction: column !important;
                height: 100% !important;
            }
        `}</style>
         <div className="section-full mobile-page-padding p-t80  bg-white">
                    <div className="container">
                        <div className="section-content">
                            <div className="row about-story-row" style={{ display: 'flex', alignItems: 'stretch', flexWrap: 'nowrap', margin: '0', width: '100%' }}>
                                <div className="col-lg-6 col-md-12 col-sm-12 m-b30" style={{ display: 'flex', alignSelf: 'stretch', flex: '1 1 50%', padding: '0 15px', minHeight: '100%' }}>
                                    <div className="sx-img-effect zoom-slow" style={{ width: '100%', height: '100%', overflow: 'hidden', display: 'flex' }}>
                                        <img src={aboutimg1} alt="" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12" style={{ display: 'flex', alignSelf: 'stretch', flex: '1 1 50%', padding: '0 15px', minHeight: '100%' }}>
                                    <div className="about-story-text-wrapper" style={{ paddingTop: '0', paddingBottom: '0' }}>
                                    <div className="section-head" style={{marginBottom:'4px', marginTop: '0'}}>
                            <div className="sx-separator-outer separator-left">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')', border: 'none' }}>
                                    <h3 style={{ border: 'none' , padding:"8px", margin: '0' }} className="">Our Story</h3>
                                </div>
                            </div>
                        </div>
                                     
                                         <h4 className="m-t0 sx-tilte" style={{ marginTop: '8px', marginBottom: '8px' }}>Transforming Spaces, Enriching Lives</h4>
                                        <p style={{
                                            fontSize: '14px',
                                            color: '#333',
                                            marginBottom:'2px',
                                            marginTop: '0',
                                            lineHeight: '1.6',
                                            padding: '0'
                                        }}>At Pluxe Studio, we believe that exceptional interior design goes beyond aesthetics—it creates environments that inspire, comfort, and reflect the unique essence of those who inhabit them. Founded with a passion for luxury and sustainability, we have been crafting bespoke interiors that seamlessly blend elegance with environmental consciousness.</p>
                                        <p style={{
                                            fontSize: '14px',
                                            color: '#333',
                                            marginBottom:'2px',
                                            marginTop: '0',
                                            lineHeight: '1.6',
                                            padding: '0'
                                        }}>Our journey began with a simple yet powerful vision: to redefine luxury interior design by making it accessible, sustainable, and deeply personal. Every project we undertake is a testament to our commitment to excellence, innovation, and the belief that beautiful spaces should also be responsible ones.</p>
                                        <p style={{
                                            fontSize: '14px',
                                            color: '#333',
                                            marginBottom: '0',
                                            marginTop: '0',
                                            lineHeight: '1.6',
                                            padding: '0'
                                        }}>With a team of talented designers, craftsmen, and project managers, we bring decades of combined experience to every project. From residential sanctuaries to commercial spaces, we transform visions into reality, one carefully curated detail at a time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

