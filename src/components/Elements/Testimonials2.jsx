import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const publicPhoneImage = process.env.PUBLIC_URL + '/assets/media/images/image-phones.jpeg';

const testimonials = [
    {
        reviewername: 'Mr. Sethi',
        position: 'Client, DLF Phase 5, Gurgaon',
        rating: 5,
        review: 'Pluxe Studio transformed our apartment into a serene, luxurious space. The attention to detail, colour palette selection, and overall harmony exceeded every expectation. It truly feels like a home designed just for us.'
    },
    {
        reviewername: 'Mr. Andre',
        position: 'NRI Client, Dubai Marina',
        rating: 5,
        review: 'We worked with Pluxe Studio entirely online, and the process was smoother than any design firm we\'ve worked with locally. The concepts, 3D visuals, and final execution were world-class. Our Dubai home finally feels like the calming, modern retreat we always wanted.'
    },
    {
        reviewername: 'Ms. Lara',
        position: 'NRI Client, Ealing, London',
        rating: 5,
        review: 'Despite working across time zones, Pluxe Studio made the entire process effortless. The design ideas were fresh, timeless, and perfectly aligned with our taste. Truly global quality.'
    },
    {
        reviewername: 'Ms. Chopra',
        position: 'Client, Golf Course Road, Gurgaon',
        rating: 5,
        review: 'From the smallest details to the overall design, everything was executed with creativity, precision, and passion by Pluxe Studio. Ms. Ahuja and her teams sense of aesthetics, practical approach, and commitment to delivering on time made the entire experience stress-free and enjoyable.'
    },
    {
        reviewername: 'Ms. Chopra',
        position: 'Client, Golf Course Road, Gurgaon',
        rating: 5,
        review: 'From the smallest details to the overall design, everything was executed with creativity, precision, and passion by Pluxe Studio. Ms. Ahuja and her teams sense of aesthetics, practical approach, and commitment to delivering on time made the entire experience stress-free and enjoyable.'
    }
];

const groupedTestimonials = [
    {
        device: publicPhoneImage,
        reviews: testimonials
    }
];

var bgimg2 = require('./../../images/background/cross-line2.png');
var bgTexture = require('./../../images/background/bg6.jpg');

class Testimonials2 extends React.Component {
    render() {
        
        const carouselOptions = {
            loop: true,
            autoplay: true,
            margin: 20,
            nav: true,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                }
            }
        };

        const cardStyle = {
            background: '#4c403a',
            color: '#fdf8f0',
            borderRadius: '12px',
            padding: '24px 22px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.16)',
            margin: '0 10px',
            minHeight: '100px'
        };

        return (
            <>
                <div className="section-full mobile-page-padding bg-repeat p-t80 p-b80 testimonials-desktop" style={{ backgroundColor: '#efece4', backgroundImage: 'url(' + bgTexture + ')', backgroundSize: 'cover' }}>
                    <div className="section-content">
                        <div className="container">
                            <div className="section-head" style={{ textAlign: 'center' }}>
                              
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ display: 'inline-block', padding: '4px 14px', backgroundImage: 'url(' + bgimg2 + ')' }}>
                                    <h3 style={{ border: 'none', padding: '0', fontWeight: "bold", letterSpacing: '6px', textTransform: 'uppercase', margin: 0 }}>
                                        REVIEWS
                                    </h3>
                                    <p style={{ border: 'none', padding: '0', fontSize: '16px', fontWeight: 400, letterSpacing: '2px', textTransform: 'none', margin: '8px 0 0 0', fontStyle: 'italic' }}>
                                        From our clients
                                    </p>
                                </div>
                            </div>
                            <div className="testimonial-static-grid">
                                {groupedTestimonials.map((item, index) => (
                                    <div className="item" key={index}>
                                        <div
                                            style={{
                                                position: 'relative',
                                                background: '#f6f2eb',
                                                borderRadius: '40px',
                                                minHeight: '800px',
                                                boxShadow: '0 30px 70px rgba(0,0,0,0.1)',
                                                overflow: 'visible',
                                                padding: '80px 60px 60px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    inset: '24px',
                                                    background: '#fff',
                                                    borderRadius: '30px',
                                                    boxShadow: 'inset 0 0 50px rgba(0,0,0,0.05)'
                                                }}
                                            />
                                            <div style={{ position: 'relative', zIndex: 2 }}>
                                                {(() => {
                                                    const leftCards = item.reviews.slice(0, 3);
                                                    const rightCards = item.reviews.slice(3, 5);
                                                    const cardStyle = {
                                                        background: '#4c403a',
                                                        color: '#fdf8f0',
                                                        borderRadius: '12px',
                                                        padding: '14px 18px',
                                                        width: '380px',
                                                        boxShadow: '0 20px 40px rgba(0,0,0,0.16)'
                                                    };
                                                    return (
                                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '0', marginTop: '0', width: '100%' }}>
                                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', alignItems: 'flex-end', marginRight: '-50px', zIndex: 3 }}>
                                                                {leftCards.map((review, reviewIndex) => (
                                                                    <div
                                                                        key={`${review.reviewername}-left-${reviewIndex}`}
                                                                        style={{
                                                                            ...cardStyle,
                                                                            transform: reviewIndex === 0 ? 'translateY(-25px)' : reviewIndex === 1 ? 'translateY(0px)' : 'translateY(25px)'
                                                                        }}
                                                                    >
                                                                        <p style={{ fontSize: '13px', letterSpacing: '1.2px', color: '#d8c5b1', textTransform: 'uppercase', marginBottom: '4px', whiteSpace: 'nowrap' }}>
                                                                            {review.position}
                                                                        </p>
                                                                        <p style={{ fontSize: '14px', letterSpacing: '0.8px', color: '#fff', marginTop: '0', marginBottom: '6px', whiteSpace: 'nowrap' }}>{review.reviewername}</p>
                                                                        <p style={{ marginBottom: '6px', color: '#f0c75e', fontSize: '13px' }}>
                                                                            {Array.from({ length: review.rating }).map((_, starIndex) => (
                                                                                <span key={starIndex} className="fa fa-star" />
                                                                            ))}
                                                                        </p>
                                                                        <p style={{ fontSize: '13px', lineHeight: 1.35, margin: 0 }}>{review.review}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '280px', zIndex: 2, margin: '0 20px' }}>
                                                                <img src={item.device} alt="Client showcase" style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '500px' }} />
                                                            </div>
                                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', alignItems: 'flex-start', marginLeft: '-50px', zIndex: 3 }}>
                                                                {rightCards.map((review, reviewIndex) => (
                                                                    <div
                                                                        key={`${review.reviewername}-right-${reviewIndex}`}
                                                                        style={{
                                                                            ...cardStyle,
                                                                            transform: reviewIndex === 0 ? 'translateY(-15px)' : 'translateY(15px)'
                                                                        }}
                                                                    >
                                                                        <p style={{ fontSize: '13px', letterSpacing: '1.2px', color: '#d8c5b1', textTransform: 'uppercase', marginBottom: '4px', whiteSpace: 'nowrap' }}>
                                                                            {review.position}
                                                                        </p>
                                                                        <p style={{ fontSize: '14px', letterSpacing: '0.8px', color: '#fff', marginTop: '0', marginBottom: '6px', whiteSpace: 'nowrap' }}>{review.reviewername}</p>
                                                                        <p style={{ marginBottom: '6px', color: '#f0c75e', fontSize: '13px' }}>
                                                                            {Array.from({ length: review.rating }).map((_, starIndex) => (
                                                                                <span key={starIndex} className="fa fa-star" />
                                                                            ))}
                                                                        </p>
                                                                        <p style={{ fontSize: '13px', lineHeight: 1.35, margin: 0 }}>{review.review}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    );
                                                })()}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-left" style={{ marginTop: '50px' }}>
                                <NavLink
                                    to="#Contact"
                                    className="site-button"
                                    style={{
                                        backgroundColor: "#000",
                                        color: '#fff',
                                        padding: '14px 32px',
                                        fontSize: '13px',
                                        letterSpacing: '3px',
                                        textTransform: 'uppercase',
                                        border: 'none',
                                        display: 'inline-block',
                                        textDecoration: 'none',
                                        transition: 'background-color 0.3s ease'
                                    }}
                                >
                                    <p style={{ margin: 0, fontSize: '13px' }}>Book Free Consultation</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-full mobile-page-padding bg-repeat p-t80 p-b80 testimonials-mobile" style={{ backgroundColor: '#efece4', backgroundImage: 'url(' + bgTexture + ')', backgroundSize: 'cover' }}>
                    <div className="section-content">
                        <div className="container">
                            <div className="section-head" style={{ textAlign: 'center' }}>
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ display: 'inline-block', padding: '4px 14px', backgroundImage: 'url(' + bgimg2 + ')' }}>
                                    <p style={{ border: 'none', padding: '0', fontSize: '13px', fontWeight: 400, letterSpacing: '6px', textTransform: 'uppercase', margin: 0 }}>
                                        REVIEWS
                                    </p>
                                    <p style={{ border: 'none', padding: '0', fontSize: '14px', fontWeight: 400, letterSpacing: '2px', textTransform: 'none', margin: '8px 0 0 0', fontStyle: 'italic' }}>
                                        From our clients
                                    </p>
                                </div>
                            </div>
                            {groupedTestimonials.map((item, index) => (
                                <div key={index}>
                                    <OwlCarousel className="owl-carousel" {...carouselOptions}>
                                        {item.reviews.map((review, reviewIndex) => (
                                            <div key={`${review.reviewername}-${reviewIndex}`} style={cardStyle}>
                                                <p style={{ fontSize: '14px', letterSpacing: '1.2px', color: '#d8c5b1', textTransform: 'uppercase', marginBottom: '4px', whiteSpace: 'nowrap' }}>
                                                    {review.position}
                                                </p>
                                                <p style={{ fontSize: '14px', letterSpacing: '0.8px', color: '#fff', marginTop: '0', marginBottom: '8px', whiteSpace: 'nowrap' }}>{review.reviewername}</p>
                                                <p style={{ marginBottom: '8px', color: '#f0c75e', fontSize: '13px' }}>
                                                    {Array.from({ length: review.rating }).map((_, starIndex) => (
                                                        <span key={starIndex} className="fa fa-star" />
                                                    ))}
                                                </p>
                                                <p style={{ fontSize: '14px', lineHeight: 1.45, margin: 0 }}>{review.review}</p>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                </div>
                            ))}
                            <div className="text-left" style={{ marginTop: '50px' }}>
                                <NavLink
                                    to="#Contact"
                                    className="site-button"
                                    style={{
                                        backgroundColor: "#000",
                                        color: '#fff',
                                        padding: '14px 32px',
                                        fontSize: '13px',
                                        letterSpacing: '3px',
                                        textTransform: 'uppercase',
                                        border: 'none',
                                        display: 'inline-block',
                                        textDecoration: 'none',
                                        transition: 'background-color 0.3s ease'
                                    }}
                                >
                                    <p style={{ margin: 0, fontSize: '13px' }}>Book Free Consultation</p>
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