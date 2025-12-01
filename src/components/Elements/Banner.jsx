import React from 'react';
import { NavLink } from 'react-router-dom';

class Banner extends React.Component {
    render() {
        return (
            <>
                <style>{`
                    .sx-bnr-inr {
                        height: 450px !important;
                        max-height: 450px !important;
                        overflow: hidden !important;
                    }
                    .sx-bnr-inr .sx-breadcrumb li::before,
                    .sx-bnr-inr .sx-breadcrumb li::after {
                        color: #fff !important;
                    }
                    .sx-bnr-inr .sx-breadcrumb li {
                        color: #fff !important;
                    }
                    .sx-bnr-inr h3,
                    .sx-bnr-inr p {
                        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.9) !important;
                    }
                `}</style>
                <div className="sx-bnr-inr overlay-wraper bg-parallax bg-top-center" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + this.props.bgimage + ')', height: '500px', maxHeight: '500px', position: 'relative', overflow: 'hidden' }}>
                    <div className="overlay-main" style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <div className="sx-bnr-inr-entry">
                            <div className="banner-title-outer">
                                <div className="banner-title-name">
                                    <h3 className="m-tb0" style={{ color: '#fff' }}>{this.props.title}</h3>                                <p style={{ color: '#fff' }}>
                                        {this.props.description}
                                    </p>
                                </div>
                            </div>
                            {/* BREADCRUMB ROW */}
                            <div >
                                <ul className="sx-breadcrumb breadcrumb-style-2" style={{ color: '#fff' }}>
                                <li><NavLink to={"/"} style={{ color: '#fff' }}>Home</NavLink></li>
                                    <li style={{ color: '#fff' }}>{this.props.pagename}</li>
                                </ul>
                            </div>
                            {/* BREADCRUMB ROW END */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Banner;