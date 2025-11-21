import React from 'react';

var bgimg1 = require('./../../images/background/bg-5.png');
var bgimg2 = require('./../../images/background/bg-1.jpg');
var bgimg3 = require('./../../images/background/cross-line2.png');
const services = [
    {
        count: '01',
        title: 'Full Home Interior',
        image: require('./../../images/pic1.jpg')
    },
    {
        count: '02',
        title: 'Bespoke Furniture',
        image: require('./../../images/pic3.jpg')
    },
    {
        count: '03',
        title: 'Land Scapping',
        image: require('./../../images/pic2.jpg')
    },
    {
        count: '04',
        title: 'Global NRI Design',
        image: require('./../../images/services/service-projects/2.jpg')
    }
];

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
                                    <h3 className="sep-line-one">What We do</h3>
                                </div>
                            </div>
                        </div>
                        <div className="section-content">
                            <div className="row">
                                {services.map((service) => (
                                    <div className="col-lg-3 col-md-6 col-sm-12" key={service.title}>
                                        <div className="number-block-one animate-in-to-top">
                                            <img src={service.image} alt="" />
                                            <div className="figcaption bg-white text-center p-a20">
                                                <h4 className="m-a0">{service.title}</h4>
                                            </div>
                                            <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                                <span>{service.count}</span>
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