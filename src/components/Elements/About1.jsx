import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/about-slider/1.jpg'),
    require('./../../images/about-slider/2.jpg'),
    require('./../../images/about-slider/3.jpg'),
    require('./../../images/about-slider/4.jpg'),
    require('./../../images/about-slider/5.jpg')
]

var bgimg1 = require('./../../images/background/bg-4.png');
var bgimg2 = require('./../../images/background/cross-line2.png');

class About1 extends React.Component {

    render() {
        const options = {
            loop: true,
            autoplay: true,
            margin: 30,
            nav: true,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 1
                }
            }
        };
        return (
            <>
                <div id="About" className="section-full mobile-page-padding p-t80 p-b80 bg-white bg-no-repeat bg-bottom-left" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                    <h3 className="sep-line-one">Why Pluxe Studio?</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-lg-5 col-md-12 col-sm-12">
                                    <div className="about-home-left">
                                        <h4 className="m-t0 sx-tilte">Our Unique Value Proposition:</h4>
                                       <ul className="list-angle-right anchor-line">
                                                                                <li><strong>	Luxury Without Excess – </strong>Sophisticated design curated with restraint and elegance.</li>
                                                                                <li><strong>Sustainable by Design  – </strong> We minimize waste, use responsibly sourced materials, and prioritize wellness.</li>
                                                                                <li><strong>	Client-Centric Approach – </strong>Every space we create is a reflection of you, not us.</li>
                                                                                <li><strong>	Detail-Driven Execution  – </strong>From design to final styling, we manage it all seamlessly.</li>
                                                                            </ul>
                                        <div className="text-left">
                                            <NavLink to="#Contact" className="site-button-secondry btn-half"><span>Connect with us</span></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12 col-sm-12">
                                    <div className="about-home-right">
                                        <OwlCarousel className="owl-carousel about-home number-slider owl-btn-vertical-center" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="sx-img-effect zoom-slow">
                                                    <NavLink to={"/about-1"}><img src={item} alt="" /></NavLink>
                                                    </div>
                                                </div>

                                            ))}

                                        </OwlCarousel>
                                        <div className="about-home-before">
                                            <img src={require('./../../images/about-slider/6.jpg')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default About1;