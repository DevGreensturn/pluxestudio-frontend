import React from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

class Header3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { logo: require('./../../images/Light-Logo.jpg') };
    }

    state = { isSearchActive: false };

    handleSearchToggle = () => {
        this.setState({ isSearchActive: !this.state.isSearchActive });
    };

    componentDidMount() {

        const handleScroll = () => {
            const offset = window.scrollY;

            const stickyheader = document.querySelector('.sticky-header ');

            if (offset >= 100) {
                stickyheader.classList.add('is-fixed');
                stickyheader.classList.add('color-fill');

            } else {
                stickyheader.classList.remove('is-fixed');
                stickyheader.classList.remove('color-fill');
            }
        }

        window.addEventListener('scroll', handleScroll);

        window.updateTopMostParent = (logopath) => {
            this.setState({ logo: logopath });
        };
    }

    render() {

        const isSearchActive = this.state.isSearchActive;

        return (
            <>
                <header className="site-header header-style-3 nav-wide header-fixed mobile-sider-drawer-menu">
                    <div className="sticky-header main-bar-wraper navbar-expand-lg">
                        <div className="main-bar bg-white ">
                            <div className="container clearfix">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <NavLink to={"./"}>
                                            <img src={this.state.logo} alt="Pluxe Studio" />
                                        </NavLink>
                                    </div>
                                </div>
                                {/* NAV Toggle Button */}
                                <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar icon-bar-first" />
                                    <span className="icon-bar icon-bar-two" />
                                    <span className="icon-bar icon-bar-three" />
                                </button>
                                
                                {/* EXTRA NAV */}
                                <div className="extra-nav">
                                        {/* MAIN NAVIGATION */}
                                <div className="header-nav navbar-collapse collapse justify-content-center collapse">
                                    <Navigation />
                                </div>
                                {/* SITE SEARCH */}
                                      <div className="extra-cell">
                                
                                                                        <div className="contact-slide-show">
                                                                            <NavLink to={"#"} className="get-in-touch-btn from-top" onClick={this.handleQuoteToggle}>
                                                                                Get in touch</NavLink></div>
                                                                    </div>
                                                                </div>
                                </div>
                                {/* EXTRA Nav */}
                            
                                       
                                                             
                          
                        </div>
                    </div>
                </header>


            </>
        );
    };
};

export default Header3;

