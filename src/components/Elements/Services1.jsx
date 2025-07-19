import React from 'react';
import { NavLink, resolvePath } from 'react-router-dom';

const services = [
    {
        count: '01',
        title: 'Bespoke Interior Designing',
        flaticon: 'flaticon-sketch',
        description: 'Custom interiors that echo your style and story—with rich palettes, layered textures, and premium finishes.',
    },
    {
        count: '02',
        title: 'Sustainable Design Solutions',
        flaticon: 'flaticon-stairs',
        description: 'Eco-friendly materials, green building practices, and energy-efficient systems that redefine responsible luxury.',
    },
    {
        count: '03',
        title: 'Turnkey Project Execution',
        flaticon: 'flaticon-window',
        description: 'From concept to completion—civil work, furniture, lighting, styling—executed with precision and peace of mind.',
    },
    {
        count: '04',
        title: 'Space Planning & Renovation',
        flaticon: 'flaticon-skyline',
        description: 'Maximizing comfort, utility, and elegance through intelligent layouts and smart refurbishments.',
    },
    {
        count: '05',
        title: 'Material & Finish Consulting',
        flaticon: 'flaticon-bed',
        description: 'Advisory on sustainable high-end materials: reclaimed wood, natural stone, jute, low-VOC paints and more',
    },
    {
        count: '06',
        title: 'Sourcing & Styling',
        flaticon: 'flaticon-door',
        description: 'Curated art, décor, textiles, and signature pieces tailored to your theme—from boho-luxe to urban contemporary.',
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');
var bgimg2 = require('./../../images/background/pic.jpg');
class Services1 extends React.Component {

    render() {

        return (
            <>
                <div className="section-full mobile-page-padding p-t80  p-b50 bg-gray" style={{ backgroundImage: 'url(' + bgimg2 + ')', backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-left">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one ">All Services</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="row">
                                {services.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                        <div className="sx-icon-box-wraper  icon-count-2-outer">
                                            <div className="icon-count-2 bg-white">
                                                {/* <span className="icon-count-number">{item.count}</span> */}
                                                <div className="icon-xl inline-icon m-b5 scale-in-center">
                                                    <span className="icon-cell"><i className={item.flaticon} /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="sx-tilte">{item.title}</h4>
                                                    <p>{item.description}</p>
                                                    {/* <div className="text-left">
                                                        <NavLink to={"/services-detail"} className="site-button-link">Read More</NavLink>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase">
                        <strong>Services</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default Services1;