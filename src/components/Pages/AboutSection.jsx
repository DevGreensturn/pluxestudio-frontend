import React from 'react';
import Header from './../Common/Header3';
import FooterMain from './../Common/Footer4';
import Banner from './../Elements/Banner';
import CountUp from 'react-countup';
import bnrimg from './../../images/banner/5.jpg';
import FooterSection from './../Common/FooterSection';
import AboutStory from '../Elements/AboutStory';
import AboutMission from '../Elements/AboutMission';
import AboutCore from '../Elements/AboutCore';
import AboutProcess from '../Elements/AboutProcess';
import AboutBanner from '../Elements/AboutBanner';

var bgimg3 = require('./../../images/background/cross-line2.png');
var bgimg4 = require('./../../images/background/pic.jpg');


const AboutSection = () => {
    const process = [
        {
            number: '01',
            title: 'Discovery',
            description: 'We begin by understanding your vision, lifestyle, and aspirations through detailed consultations.'
        },
        {
            number: '02',
            title: 'Design',
            description: 'Our team creates comprehensive design concepts with 3D visualizations and material selections.'
        },
        {
            number: '03',
            title: 'Development',
            description: 'Refining every detail, finalizing specifications, and preparing for seamless execution.'
        },
        {
            number: '04',
            title: 'Delivery',
            description: 'Expert project management ensures timely completion with attention to every detail.'
        }
    ];

    return (
        <>
            <Header />
            <div className="page-content">
            <Banner title="About Us" pagename="About Us" description="Crafting extraordinary spaces that blend luxury, sustainability, and timeless elegance." bgimage="/assets/media/images/about.jpg" />
                
                <AboutBanner />
               <AboutStory />

             <AboutMission />

              <AboutCore />
              <AboutProcess />

                {/* <div className="section-full overlay-wraper sx-bg-secondry mobile-page-padding p-t80 p-b50 bg-parallax" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + bgimg3 + ')' }}>
                    <div className="overlay-main bg-black opacity-0.10" />
                    <div className="container">
                        <div className="section-content">
                            <div className="counter-blocks">
                                <div className="row">
                                    <div className="col-xl-3 col-md-6 m-b30">
                                        <div className="sx-count text-white sx-icon-box-wraper bg-repeat p-a30" style={{ backgroundImage: 'url(' + bgimg4 + ')' }}>
                                            <h2 className="m-t0 sx-text-primary text-right"><span className="counter"><CountUp end={54} duration={5} /></span>+</h2>
                                            <h4 className="m-b0">Projects Completed</h4>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 m-b30">
                                        <div className="sx-count text-white sx-icon-box-wraper bg-repeat p-a30" style={{ backgroundImage: 'url(' + bgimg4 + ')' }}>
                                            <h2 className="m-t0 sx-text-primary text-right"><span className="counter"><CountUp end={10} duration={5} /></span>+</h2>
                                            <h4 className="m-b0">Years of Experience</h4>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 m-b30">
                                        <div className="sx-count text-white sx-icon-box-wraper bg-repeat p-a30" style={{ backgroundImage: 'url(' + bgimg4 + ')' }}>
                                            <h2 className="m-t0 sx-text-primary text-right"><span className="counter"><CountUp end={98} duration={5} /></span>%</h2>
                                            <h4 className="m-b0">Client Satisfaction</h4>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 m-b30">
                                        <div className="sx-count text-white sx-icon-box-wraper bg-repeat p-a30" style={{ backgroundImage: 'url(' + bgimg4 + ')' }}>
                                            <h2 className="m-t0 sx-text-primary text-right"><span className="counter"><CountUp end={85} duration={5} /></span>%</h2>
                                            <h4 className="m-b0">Eco-Friendly Materials</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div className="section-full mobile-page-padding p-t80 p-b80 bg-gray">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 m-b30">
                                    <div className="about-content">
                                        <div className="section-head">
                                            <div className="sx-separator-outer separator-left">
                                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                                    <h3 className="sep-line-one">Our Process</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="m-t20">We follow a structured yet flexible approach that ensures your vision is realized with precision and care. Our process is designed to be collaborative, transparent, and efficient, keeping you informed at every step.</p>
                                        {process.map((item, index) => (
                                            <div className="process-item m-t30" key={index}>
                                                <div className="d-flex align-items-start">
                                                    <div className="process-number bg-white p-a15 m-r20">
                                                        <h3 className="m-t0 m-b0 sx-text-primary">{item.number}</h3>
                                                    </div>
                                                    <div className="process-content">
                                                        <h4 className="sx-tilte m-b10">{item.title}</h4>
                                                        <p className="m-b0">{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="sx-img-effect zoom-slow">
                                        <img src={aboutimg2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-full mobile-page-padding p-t80 p-b80 bg-white">
                    <div className="container">
                        <div className="section-head text-center">
                            <div className="sx-separator-outer separator-center">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                    <h3 className="sep-line-one">Why Choose Us</h3>
                                </div>
                            </div>
                        </div>
                        <div className="section-content m-t50">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                    <div className="sx-icon-box-wraper icon-count-2-outer bg-white p-a30">
                                        <div className="icon-xl inline-icon m-b15">
                                            <span className="icon-cell"><i className="flaticon-sketch" /></span>
                                        </div>
                                        <h4 className="sx-tilte m-b10">Bespoke Design</h4>
                                        <p>Every project is uniquely tailored to reflect your personality, lifestyle, and aspirations. No cookie-cutter solutions—only custom designs crafted exclusively for you.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                    <div className="sx-icon-box-wraper icon-count-2-outer bg-white p-a30">
                                        <div className="icon-xl inline-icon m-b15">
                                            <span className="icon-cell"><i className="flaticon-stairs" /></span>
                                        </div>
                                        <h4 className="sx-tilte m-b10">Turnkey Solutions</h4>
                                        <p>From initial concept to final styling, we handle every aspect of your project. One team, one point of contact, seamless execution from start to finish.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                    <div className="sx-icon-box-wraper icon-count-2-outer bg-white p-a30">
                                        <div className="icon-xl inline-icon m-b15">
                                            <span className="icon-cell"><i className="flaticon-window" /></span>
                                        </div>
                                        <h4 className="sx-tilte m-b10">Sustainable Luxury</h4>
                                        <p>We prove that luxury and sustainability can coexist beautifully. Our designs incorporate eco-friendly materials and practices without compromising on elegance.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                    <div className="sx-icon-box-wraper icon-count-2-outer bg-white p-a30">
                                        <div className="icon-xl inline-icon m-b15">
                                            <span className="icon-cell"><i className="flaticon-bed" /></span>
                                        </div>
                                        <h4 className="sx-tilte m-b10">Expert Team</h4>
                                        <p>Our multidisciplinary team brings together designers, architects, project managers, and craftsmen with years of experience in luxury interior design.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                    <div className="sx-icon-box-wraper icon-count-2-outer bg-white p-a30">
                                        <div className="icon-xl inline-icon m-b15">
                                            <span className="icon-cell"><i className="flaticon-door" /></span>
                                        </div>
                                        <h4 className="sx-tilte m-b10">Quality Assurance</h4>
                                        <p>We maintain the highest standards of quality in materials, craftsmanship, and project management. Your satisfaction is our guarantee.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                    <div className="sx-icon-box-wraper icon-count-2-outer bg-white p-a30">
                                        <div className="icon-xl inline-icon m-b15">
                                            <span className="icon-cell"><i className="flaticon-skyline" /></span>
                                        </div>
                                        <h4 className="sx-tilte m-b10">Transparent Communication</h4>
                                        <p>We believe in keeping you informed throughout the journey. Regular updates, clear timelines, and honest communication are at the heart of our service.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <FooterMain id="Contact" />
            <FooterSection />
        </>
    );
};

export default AboutSection;
