import React from 'react'

export default function AboutStory() {
    var aboutimg1 = require('./../../images/about-slider/1.jpg');
var bgimg1 = require('./../../images/background/cross-line2.png');  
var bgimg2 = require('./../../images/background/cross-line2.png');             
  return (
    <div>
         <div className="section-full mobile-page-padding p-t80  bg-white">
                    <div className="container">
                        <div className="section-content">
                            <div className="row" style={{ display: 'flex', alignItems: 'stretch' }}>
                                <div className="col-lg-6 col-md-12 col-sm-12 m-b30" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="sx-img-effect zoom-slow" style={{ width: '100%', maxHeight: '500px', overflow: 'hidden' }}>
                                        <img src={aboutimg1} alt="" style={{ width: '100%',  display: 'block' }} />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12" style={{ display: 'flex' }}>
                                    <div>
                                    <div className="section-head" style={{marginBottom:'20px'}}>
                            <div className="sx-separator-outer separator-left">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')', border: 'none' }}>
                                    <h3 style={{ border: 'none' , padding:"10px", }} className="">Our Story</h3>
                                </div>
                            </div>
                        </div>
                                     
                                         <h4 className="m-t0 sx-tilte">Transforming Spaces, Enriching Lives</h4>
                                        <p style={{
                                            fontSize: '14px',
                                            color: '#333',
                                            marginBottom:'8px',
                                            lineHeight: '1.8'
                                        }}>At Pluxe Studio, we believe that exceptional interior design goes beyond aesthetics—it creates environments that inspire, comfort, and reflect the unique essence of those who inhabit them. Founded with a passion for luxury and sustainability, we have been crafting bespoke interiors that seamlessly blend elegance with environmental consciousness.</p>
                                        <p style={{
                                            fontSize: '14px',
                                            color: '#333',
                                            marginBottom:'8px',
                                            lineHeight: '1.8'
                                        }}>Our journey began with a simple yet powerful vision: to redefine luxury interior design by making it accessible, sustainable, and deeply personal. Every project we undertake is a testament to our commitment to excellence, innovation, and the belief that beautiful spaces should also be responsible ones.</p>
                                        <p style={{
                                            fontSize: '14px',
                                            color: '#333',
                                            marginBottom: '0',
                                            lineHeight: '1.8'
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

