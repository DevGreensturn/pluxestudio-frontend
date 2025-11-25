import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const publicPhoneImage = process.env.PUBLIC_URL + '/assets/media/images/image-phones.jpeg';

const testimonials = [
    {
        device: publicPhoneImage,
        reviews: [
            {
                reviewername: 'Mr. Sethi',
                position: 'Client, DLF Phase 5, Gurgaon',
                review: 'Pluxe Studio transformed our apartment into a serene, luxurious space. The attention to detail exceeded every expectation.',
                rating: 5
            },
            {
                reviewername: 'RWA President',
                position: 'Residential Society Head, Gurgaon',
                review: 'The liaison process with residents was effortless. The studio handled compliance and communication with professionalism.',
                rating: 5
            },
            {
                reviewername: 'Mr. Andre',
                position: 'NRI Client, Dubai Marina',
                review: 'We worked with Pluxe remotely and every milestone stayed seamless. Concepts, visuals, and execution felt world-class.',
                rating: 5
            },
            {
                reviewername: 'Ms. Lara',
                position: 'NRI Client, Ealing, London',
                review: 'Despite time zones, the process was effortless. The ideas were fresh, timeless, and perfectly aligned with our tastes.',
                rating: 5
            },
            {
                reviewername: 'Ms. Chopra',
                position: 'Client, Golf Course Road, Gurgaon',
                review: 'From creative direction to handover, everything was precise and collaborative. Zero-stress experience.',
                rating: 5
            }
        ]
    },
    {
        device: publicPhoneImage,
        reviews: [
            {
                reviewername: 'Mr. Talwar',
                position: 'CEO, Delhi NCR',
                review: 'Executive lounge and residence now flow together with a restrained palette and bespoke carpentry.',
                rating: 5
            },
            {
                reviewername: 'Ms. Fernandes',
                position: 'Hotelier, Bengaluru',
                review: 'They elevated public areas with layered seating capsules and intimate lighting nodes.',
                rating: 5
            },
            {
                reviewername: 'Mr. Khanna',
                position: 'Villa Owner, Goa',
                review: 'Landscaping, pool deck, and interiors connect through one continuous material story.',
                rating: 5
            },
            {
                reviewername: 'Ms. Rao',
                position: 'Creative Director, Mumbai',
                review: 'Art direction and styling kits kept merchandising cohesive across store launches.',
                rating: 5
            },
            {
                reviewername: 'Mr. Iqbal',
                position: 'Entrepreneur, Hyderabad',
                review: 'Dashboards, budgets, and site photos meant we were never out of sync even while traveling.',
                rating: 5
            }
        ]
    }
];

var bgimg2 = require('./../../images/background/cross-line2.png');
var bgTexture = require('./../../images/background/bg6.jpg');

class Testimonials2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isMobile: false };
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        this.handleResize();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.handleResize);
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.handleResize);
        }
    }

    handleResize() {
        if (typeof window !== 'undefined') {
            const isMobile = window.innerWidth <= 768;
            if (isMobile !== this.state.isMobile) {
                this.setState({ isMobile });
            }
        }
    }

    render() {
        const { isMobile } = this.state;
        const options = {
            loop: true,
            autoplay: true,
            autoplayTimeout: 3500,
            margin: 0,
            nav: true,
            dots: false,
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
                <div className="section-full mobile-page-padding bg-repeat p-t80 p-b80" style={{ backgroundColor: '#efece4', backgroundImage: 'url(' + bgTexture + ')', backgroundSize: 'cover' }}>
                    <div className="section-content">
                        <div className="container">
                            <div className="section-head" style={{ textAlign: 'center', marginBottom: '50px' }}>
                                <p style={{ letterSpacing: '12px', fontSize: '16px', marginBottom: '10px' }}>REVIEWS</p>
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ display: 'inline-block', padding: '6px 18px', backgroundImage: 'url(' + bgimg2 + ')' }}>
                                    <h3 style={{ border: 'none', padding: '0', fontSize: '18px', fontWeight: 400, letterSpacing: '6px', textTransform: 'uppercase' }}>From our clients</h3>
                                </div>
                            </div>
                            <OwlCarousel className="owl-carousel testimonial-home-two owl-btn-vertical-center" {...options}>
                                {testimonials.map((item, index) => (
                                    <div className="item" key={index}>
                                        <div
                                            style={{
                                                position: 'relative',
                                                background: '#f6f2eb',
                                                borderRadius: '40px',
                                                minHeight: isMobile ? 'auto' : '620px',
                                                boxShadow: '0 30px 70px rgba(0,0,0,0.1)',
                                                overflow: 'hidden',
                                                padding: isMobile ? '30px 20px 20px' : '60px 80px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    inset: '30px',
                                                    background: '#fff',
                                                    borderRadius: '30px',
                                                    boxShadow: 'inset 0 0 50px rgba(0,0,0,0.05)'
                                                }}
                                            />
                                            <div style={{ position: 'relative', zIndex: 2 }}>
                                                {isMobile ? (
                                                    <>
                                                        <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto 30px', maxWidth: '320px' }}>
                                                            <img src={item.device} alt="Client showcase" style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '520px' }} />
                                                        </div>
                                                        {item.reviews.map((review, reviewIndex) => (
                                                            <div
                                                                key={`${review.reviewername}-${reviewIndex}`}
                                                                style={{
                                                                   
                                                                }}
                                                            >
                                                                <span style={{ fontSize: '12px', letterSpacing: '1.6px', color: '#d8c5b1', textTransform: 'uppercase' }}>{review.position}</span>
                                                                <h5 style={{ fontSize: '18px', marginTop: '2px', marginBottom: '6px', color: '#fff' }}>{review.reviewername}</h5>
                                                                <div style={{ marginBottom: '10px', color: '#f0c75e' }}>
                                                                    {Array.from({ length: review.rating }).map((_, starIndex) => (
                                                                        <span key={starIndex} className="fa fa-star" />
                                                                    ))}
                                                                </div>
                                                                <p style={{ fontSize: '13px', lineHeight: 1.5, margin: 0 }}>{review.review}</p>
                                                            </div>
                                                        ))}
                                                    </>
                                                ) : (
                                                    (() => {
                                                        const midpoint = Math.ceil(item.reviews.length / 2);
                                                        const leftCards = item.reviews.slice(0, midpoint);
                                                        const rightCards = item.reviews.slice(midpoint);
                                                        const cardStyle = {
                                                            background: '#4c403a',
                                                            color: '#fdf8f0',
                                                            borderRadius: '12px',
                                                            padding: '16px 18px',
                                                            width: '250px',
                                                            boxShadow: '0 20px 40px rgba(0,0,0,0.16)'
                                                        };
                                                        return (
                                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '0 40px' }}>
                                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'flex-end', marginRight: '-80px', zIndex: 3 }}>
                                                                    {leftCards.map((review, reviewIndex) => (
                                                                        <div key={`${review.reviewername}-left-${reviewIndex}`} style={cardStyle}>
                                                                            <span style={{ fontSize: '11px', letterSpacing: '1.6px', color: '#d8c5b1', textTransform: 'uppercase' }}>{review.position}</span>
                                                                            <h5 style={{ fontSize: '16px', marginTop: '2px', marginBottom: '4px', color: '#fff' }}>{review.reviewername}</h5>
                                                                            <div style={{ marginBottom: '8px', color: '#f0c75e', fontSize: '12px' }}>
                                                                                {Array.from({ length: review.rating }).map((_, starIndex) => (
                                                                                    <span key={starIndex} className="fa fa-star" />
                                                                                ))}
                                                                            </div>
                                                                            <p style={{ fontSize: '12px', lineHeight: 1.4, margin: 0 }}>{review.review}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '320px', zIndex: 2, margin: '0 30px' }}>
                                                                    <img src={item.device} alt="Client showcase" style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '560px' }} />
                                                                </div>
                                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'flex-start', marginLeft: '-80px', zIndex: 3 }}>
                                                                    {rightCards.map((review, reviewIndex) => (
                                                                        <div key={`${review.reviewername}-right-${reviewIndex}`} style={cardStyle}>
                                                                            <span style={{ fontSize: '11px', letterSpacing: '1.6px', color: '#d8c5b1', textTransform: 'uppercase' }}>{review.position}</span>
                                                                            <h5 style={{ fontSize: '16px', marginTop: '2px', marginBottom: '4px', color: '#fff' }}>{review.reviewername}</h5>
                                                                            <div style={{ marginBottom: '8px', color: '#f0c75e', fontSize: '12px' }}>
                                                                                {Array.from({ length: review.rating }).map((_, starIndex) => (
                                                                                    <span key={starIndex} className="fa fa-star" />
                                                                                ))}
                                                                            </div>
                                                                            <p style={{ fontSize: '12px', lineHeight: 1.4, margin: 0 }}>{review.review}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        );
                                                    })()
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                            <div className="text-left" style={{ marginTop: '50px' }}>
                                <NavLink
                                    to="#Contact"
                                    className="site-button"
                                    style={{
                                        backgroundColor: "#000",
                                        color: '#fff',
                                        padding: '18px 40px',
                                        fontSize: '14px',
                                        letterSpacing: '3px',
                                        textTransform: 'uppercase',
                                        border: 'none',
                                        display: 'inline-block',
                                        textDecoration: 'none',
                                        transition: 'background-color 0.3s ease'
                                    }}
                                >
                                    Book Free Consultation
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Testimonials2;