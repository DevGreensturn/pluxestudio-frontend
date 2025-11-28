import React from 'react';
import { NavLink } from 'react-router-dom';

class Banner extends React.Component {
    render() {
        return (
            <>
                <style>{`
                    .sx-bnr-inr {
                        height: 300px !important;
                        max-height: 300px !important;
                        overflow: hidden !important;
                    }
                `}</style>
                <div className="sx-bnr-inr overlay-wraper bg-parallax bg-top-center" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + this.props.bgimage + ')', height: '300px', maxHeight: '300px', position: 'relative', overflow: 'hidden' }}>
                    <div className="overlay-main" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <div className="sx-bnr-inr-entry">
                            <div className="banner-title-outer">
                                <div className="banner-title-name">
                                    <h2 className="m-tb0">{this.props.title}</h2>                                <p>
                                        {this.props.description}
                                    </p>
                                </div>
                            </div>
                            {/* BREADCRUMB ROW */}
                            <div>
                                <ul className="sx-breadcrumb breadcrumb-style-2">
                                <li><NavLink to={"./"}>Home</NavLink></li>
                                    <li>{this.props.pagename}</li>
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