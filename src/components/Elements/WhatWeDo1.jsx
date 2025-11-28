import React from 'react';

var bgimg1 = require('./../../images/background/bg-5.png');
var bgimg2 = require('./../../images/background/bg-1.jpg');
var bgimg3 = require('./../../images/background/cross-line2.png');
const services = [
    {
        count: '01',
        title: 'Home Interiors',
             image: '/assets/media/images/NRI_Global.jpg'
    },
    {
        count: '02',
        title: 'Bespoke Furniture',
        image: '/assets/media/images/furniture-pic.jpeg'
    },
    {
        count: '03',
        title: 'Landscapping ',
        image: require('./../../images/pic2.jpg')
    },
    {
        count: '04',
        title: 'NRI Designs ',
        image: require('./../../images/pic1.jpg')
    },
    {
        count: '05',
        title: 'Commercial',
        image: '/assets/media/images/Commercial.jpg'
    }
]

class WhatWeDo1 extends React.Component {
    render() {
        return (
            <>
                <div id="WhatWeDo" className="section-full  mobile-page-padding  p-t80 p-b30 bg-repeat overflow-hide" style={{  backgroundColor: '#f2f0ec' }}>
                    <div className="container right-half-bg-image-outer">
                        <div className="right-half-bg-image bg-parallax bg-fixed bg-top-right" data-stellar-background-ratio={0} style={{ backgroundImage: 'url(' + bgimg2 + ')' }} />
                        <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg3 + ')' }}>
                                    <h3 style={{ border: 'none' , padding:"10px"}} className="">What We do</h3>
                                </div>
                            </div>
                        </div>
                        <div className="section-content">
                            <div className="row what-we-do-grid">
                                {services.map((service) => (
                                    <div key={service.title} className="what-we-do-card">
                                        <div className="number-block-one animate-in-to-top" style={{ display: 'flex', flexDirection: 'column', height: '100%', flex: '1 1 auto' }}>
                                            <div style={{ width: '100%', aspectRatio: '4/3', minHeight: '210px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <img src={service.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                            </div> 
                                            <div className="figcaption bg-white text-center" style={{ padding: '15px 10px' }}>
                                                <p className="m-a0" style={{ fontSize: '15px', margin: 0, lineHeight: '1.4', whiteSpace: 'nowrap', fontWeight: '600' }}>
                                                    {service.title}
                                                </p>
                                            </div>
                                            <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                                <span style={{ fontSize: '36px', fontWeight: 'bold' }}>{service.count}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* <div className="large-title-block full-content bg-gray">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="large-title">
                                            <h3 className="m-tb0"> Creating Luxurious Design Statements</h3>
                                        </div>
                                    </div> 
                                    <div className="col-lg-6 col-md-12	col-sm-12">
                                        <div className="large-title-info">
                                            <p>Soothing Colors and Mordern Patterns, Combined with unique uses of Light, Texture and Space, Create a space that magnifies</p>
                                            <div className="text-left">

                                                 <div className="site-button-link">
                                            <a href="https://wa.me/919871077515" className="get-in-touch-btn from-top" onClick={this.handleQuoteToggle}>
                                               Book Consultation</a></div>
                                    </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default WhatWeDo1;