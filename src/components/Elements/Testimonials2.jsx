import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    // {
    //     // image: require('./../../images/testimonials/pic1.jpg'),
    //     reviewername: 'Aarti Mehra',
    //     position: 'Homeowner, New Delhi',
    //     review: 'Elegant, warm, and perfectly styled — Pluxe turned my space into something truly personal'
    // },
    {
        // image: require('./../../images/testimonials/pic2.jpg'),
        // reviewername: ' Neha Sinha ',
        // position: ' First-time Homebuyer, Gurugram',
        review: 'Working with Pluxe Studio was such a good experience. Ms. Preeti really listened to what we wanted and turned our place into something that feels both stylish and comfortable. It finally feels like our home.'
    },
    {
        // image: require('./../../images/testimonials/pic3.jpg'),
        // reviewername: 'Rohan Kapoor',
        // position: 'Entrepreneur, Gurgaon',
        review: 'What I loved most was how Pluxe Studio team  paid attention to the little things. Even the smallest details were thought through, and the whole process felt easy and stress-free because they handled everything so well.'
    },
    {
        // image: require('./../../images/testimonials/pic4.jpg'),
        // reviewername: 'Aditya Menon ',
        // position: 'Senior Consultant, Bangalore',
        review: 'We’re honestly so happy with how our home turned out. Pluxe Studio led by Ms Preeti,  not only delivered on time but also brought in ideas we never would have imagined ourselves. The end result is better than we expected.'
    }
]

var bgimg1 = require('./../../images/background/bg6.jpg');
var bgimg2 = require('./../../images/background/cross-line2.png');

class Testimonials2 extends React.Component {
    render() {
        const options = {
            loop: true,
        autoplay: true,
        autoplayTimeout: 2500,

            margin: 30,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                }
            }
        };
        return (
            <>
                <div className="section-full mobile-page-padding bg-repeat p-t80 p-b80" style={{ backgroundColor: '#f2f0ec' }}>
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className={`${this.props.separatoralignment} sx-separator-outer`}>
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                        <h3 className="sep-line-one">Testimonial</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* TESTIMONIAL START */}
                            <OwlCarousel className="owl-carousel testimonial-home-two owl-btn-vertical-center" {...options}>
                                {testimonials.map((item, index) => (
                                    <div className="item" key={index}>
                                        <div className="testimonial-1 hover-animation-1 bg-gray">
                                            <div className="testimonial-detail clearfix">
                                                {/* <div className="testimonial-pic  scale-in-center"><img src={item.image} alt="" width={100} height={100} /></div> */}
                                                <span className="testimonial-position">{item.position}</span>
                                                <h4 className="testimonial-name">{item.reviewername}</h4>
                                                <span className="fa fa-quote-right" />
                                            </div>
                                            <div className="testimonial-text">
                                                <p>{item.review}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Testimonials2;