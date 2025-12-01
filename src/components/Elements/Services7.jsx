import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: '01',
        title: 'Bespoke Interior Designing',
        flaticon: 'flaticon-sketch',
        image: require('./../../images/services/service-projects/1.jpg'),
        description: 'Custom interiors that echo your style and story—with rich palettes, layered textures, and premium finishes.'
    },
    {
        count: '02',
        title: 'Sustainable Design Solutions',
        flaticon: 'flaticon-stairs',
        image: require('./../../images/services/service-projects/2.jpg'),
        description: 'Eco-friendly materials, green building practices, and energy-efficient systems that redefine responsible luxury.'
    },
    {
        count: '03',
        title: 'Turnkey Project Execution',
        flaticon: 'flaticon-window',
        image: require('./../../images/services/service-projects/3.jpg'),
        description: 'From concept to completion—civil work, furniture, lighting, styling—executed with precision and peace of mind.'
    },
    {
        count: '04',
        title: 'Space Planning & Renovation',
        flaticon: 'flaticon-skyline',
        image: require('./../../images/services/service-projects/4.jpg'),
        description: 'Maximizing comfort, utility, and elegance through intelligent layouts and smart refurbishments.'
    },
    {
        count: '05',
        title: 'Material & Finish Consulting',
        flaticon: 'flaticon-bed',
        image: require('./../../images/services/service-projects/5.jpg'),
        description: 'Advisory on sustainable high-end materials: reclaimed wood, natural stone, jute, low-VOC paints and more'
    },
    {
        count: '06',
        title: 'Sourcing & Styling',
        flaticon: 'flaticon-door',
        image: require('./../../images/services/service-projects/6.jpg'),
        description: 'Curated art, décor, textiles, and signature pieces tailored to your theme—from boho-luxe to urban contemporary.'
    }
]

class Services7 extends React.Component {
    render() {

        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b50 bg-white">
                    <div className="container">
                        <div className="row">
                            {services.map((item, index) => (
                                <div className="col-lg-4 col-md-12 m-b30" key={index}>
                                    <div className="bgcall-block d-flex flex-wrap justify-content-center align-content-end bg-cover overlay-wraper" style={{ backgroundImage: 'url(' + item.image + ')' }}>
                                        <div className="overlay-main bg-black opacity-05" />
                                        <div className="bg-content-mid-outer">
                                            <div className="bg-content-mid">
                                                <div className="sx-icon-box-wraper center   text-white">
                                                    <div className="icon-lg m-b15">
                                                        <span className="icon-cell"><i className={item.flaticon} /></span>
                                                    </div>
                                                    <div className="icon-content m-b30">
                                                        <h4 className="sx-tilte"> <NavLink to={"/services-detail"}  className="sx-text-white">{item.title}</NavLink></h4>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                                <span className="bgcall-block-number">{item.count}</span>
                                                <div className="bg-overlay" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Services7;