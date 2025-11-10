import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const portfolioItems = [
    {
        image: require('./../../images/projects/square/1.jpg'),
        title: 'Luxury Living Room',
        location: 'Gurgaon'
    },
    {
        image: require('./../../images/projects/square/2.jpg'),
        title: 'Modern Kitchen',
        location: 'London'
    },
    {
        image: require('./../../images/projects/square/3.jpg'),
        title: 'Elegant Bedroom',
        location: 'Dubai'
    },
    {
        image: require('./../../images/projects/square/4.jpg'),
        title: 'Contemporary Office',
        location: 'Gurgaon'
    },
    {
        image: require('./../../images/projects/square/5.jpg'),
        title: 'Luxury Villa',
        location: 'London'
    },
    {
        image: require('./../../images/projects/square/6.jpg'),
        title: 'Minimalist Design',
        location: 'Dubai'
    }
];

class HeroSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonHover: false
        };
    }

    render() {
        const carouselOptions = {
            loop: true,
            autoplay: false,
            margin: 30,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        };

        return (
            <>
                {/* HERO SECTION */}
                <div className="hero-section" style={{ backgroundColor: '#f5f5f5', padding: '80px 0 60px', margin: 0 }}>
                    <div className="container">
                        <div className="row align-items-center">

                            {/* LEFT TEXT */}
                            <div className="col-lg-7 col-md-12 col-sm-12">
                                <div className="hero-content" style={{ paddingRight: '30px' }}>
                                    <h1 style={{
                                        fontSize: '56px',
                                        fontWeight: 300,
                                        color: '#000',
                                        marginBottom: '30px',
                                        lineHeight: '1.2',
                                        letterSpacing: '2px'
                                    }}>
                                        Timeless, Personalized, Luxury Interior Design.
                                    </h1>

                                    <p style={{
                                        fontSize: '18px',
                                        color: '#333',
                                        marginBottom: '40px',
                                        lineHeight: '1.8'
                                    }}>
                                        Creating spaces that reflect your unique style with timeless elegance and personalized luxury.
                                    </p>

                                    <NavLink
                                        to="#Contact"
                                        className="site-button"
                                        style={{
                                            backgroundColor: this.state.buttonHover ? '#C9A227' : '#D4AF37',
                                            color: '#000',
                                            padding: '18px 40px',
                                            fontSize: '14px',
                                            letterSpacing: '3px',
                                            textTransform: 'uppercase',
                                            border: 'none',
                                            display: 'inline-block',
                                            textDecoration: 'none',
                                            transition: 'background-color 0.3s ease'
                                        }}
                                        onMouseEnter={() => this.setState({ buttonHover: true })}
                                        onMouseLeave={() => this.setState({ buttonHover: false })}
                                    >
                                        Book Free Consultation
                                    </NavLink>
                                </div>
                            </div>

                            {/* ✅ NEW RIGHT SIDE DESIGN (NO IMAGE) */}
                            <div className="col-lg-5 col-md-12 col-sm-12">
                                <div
                                    style={{
                                        backgroundColor: '#ffffff',
                                        padding: '30px',
                                        borderRadius: '12px',
                                        boxShadow: '0 12px 35px rgba(0,0,0,0.12)',
                                        border: '1px solid #eee'
                                    }}
                                >
                                    <h3 style={{
                                        fontSize: '26px',
                                        fontWeight: 300,
                                        marginBottom: '20px',
                                        color: '#000',
                                        letterSpacing: '1px'
                                    }}>
                                        Why Homeowners Choose Pluxe Studio
                                    </h3>

                                    {/* Grid */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '20px'
                                    }}>
                                        {/* Point 1 */}
                                        <div>
                                            <h4 style={{
                                                fontSize: '16px',
                                                color: '#D4AF37',
                                                marginBottom: '8px'
                                            }}>
                                                Global Aesthetic Expertise
                                            </h4>
                                            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>
                                                Inspired by London, Dubai, and Gurgaon luxury homes.
                                            </p>
                                        </div>

                                        {/* Point 2 */}
                                        <div>
                                            <h4 style={{
                                                fontSize: '16px',
                                                color: '#D4AF37',
                                                marginBottom: '8px'
                                            }}>
                                                Timeless Luxury
                                            </h4>
                                            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>
                                                Designs that stay elegant for years, not seasons.
                                            </p>
                                        </div>

                                        {/* Point 3 */}
                                        <div>
                                            <h4 style={{
                                                fontSize: '16px',
                                                color: '#D4AF37',
                                                marginBottom: '8px'
                                            }}>
                                                Personalized Touch
                                            </h4>
                                            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>
                                                Every space reflects your personality and lifestyle.
                                            </p>
                                        </div>

                                        {/* Point 4 */}
                                        <div>
                                            <h4 style={{
                                                fontSize: '16px',
                                                color: '#D4AF37',
                                                marginBottom: '8px'
                                            }}>
                                                Affordable Luxury Options
                                            </h4>
                                            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>
                                                Premium designs without unnecessary overpricing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* PORTFOLIO */}
                <div className="portfolio-section" style={{ backgroundColor: '#FFF', padding: '80px 0', margin: 0 }}>
                    <div className="container">

                        <h2 style={{
                            fontSize: '42px',
                            color: '#000',
                            textAlign: 'center',
                            marginBottom: '20px',
                            fontWeight: 300,
                            letterSpacing: '2px'
                        }}>
                            Global Portfolio
                        </h2>

                        <p style={{
                            fontSize: '16px',
                            color: '#666',
                            textAlign: 'center',
                            marginBottom: '60px'
                        }}>
                            Showcasing luxury interior design projects from around the world
                        </p>

                        <OwlCarousel className="owl-carousel portfolio-carousel" {...carouselOptions}>
                            {portfolioItems.map((item, index) => (
                                <div className="item" key={index}>
                                    <div className="portfolio-item hover-shadow" style={{
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <div className="image-effect-one">
                                            <img src={item.image} alt={item.title} style={{
                                                width: '100%',
                                                height: '350px',
                                                objectFit: 'cover'
                                            }} />
                                            <div className="figcaption" style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                zIndex: 2,
                                                textAlign: 'center',
                                                color: '#FFF'
                                            }}>
                                                <h4 style={{ fontSize: '20px', marginBottom: '10px', color: '#FFF' }}>{item.title}</h4>
                                                <p style={{ fontSize: '14px', color: '#FFF' }}>{item.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>

                    </div>
                </div>
            </>
        );
    }
}

export default HeroSection;
