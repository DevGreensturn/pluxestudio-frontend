import React from 'react'

export default function AboutMission() {
    var bgimg1 = require('./../../images/background/cross-line2.png');
  return (
    <div>
           <div className="section-full mobile-page-padding p-t80 p-b80 bg-gray">
                    <div className="container">
                        <div className="section-head text-center">
                            <div className="sx-separator-outer separator-center">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                    <h3 className="" style={{ border: 'none' , padding:"10px", }}>Mission & Vision</h3>
                                </div>
                            </div>
                        </div>
                        <div className="section-content m-t50">
                            <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <div className="col-lg-6 col-md-6 col-sm-12 m-b30" style={{ display: 'flex' }}>
                                    <div className="sx-icon-box-wraper icon-count-2-outer bg-white" style={{ 
                                        padding: '25px 25px', 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        height: '100%', 
                                        width: '100%',
                                        boxShadow: '0 2px 15px rgba(0, 0, 0, 0.08)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <div className="icon-xl inline-icon" style={{ marginBottom: '12px' }}>
                                            <span className="icon-cell"><i className="flaticon-sketch" /></span>
                                        </div>
                                        <h4 className="sx-tilte" style={{ marginBottom: '10px' }}>Our Mission</h4>
                                        <p style={{ flex: '1 1 auto', margin: 0, lineHeight: '1.7', fontSize: '14px' }}>To create extraordinary interior spaces that harmonize luxury, sustainability, and personal expression. We are committed to delivering exceptional design solutions that enhance quality of life while respecting our planet's resources. Through innovative approaches and meticulous attention to detail, we transform every project into a masterpiece that stands the test of time.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 m-b30" style={{ display: 'flex' }}>
                                    <div className="sx-icon-box-wraper icon-count-2-outer bg-white" style={{ 
                                        padding: '25px 25px', 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        height: '100%', 
                                        width: '100%',
                                        boxShadow: '0 2px 15px rgba(0, 0, 0, 0.08)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <div className="icon-xl inline-icon" style={{ marginBottom: '12px' }}>
                                            <span className="icon-cell"><i className="flaticon-stairs" /></span>
                                        </div>
                                        <h4 className="sx-tilte" style={{ marginBottom: '10px' }}>Our Vision</h4>
                                        <p style={{ flex: '1 1 auto', margin: 0, lineHeight: '1.7', fontSize: '14px' }}>To be the leading interior design studio recognized for setting new standards in sustainable luxury design. We envision a future where every space we create not only delights the senses but also contributes positively to the environment. Our goal is to inspire a movement towards conscious design that proves luxury and sustainability are not mutually exclusive—they are essential partners in creating spaces that truly matter.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
