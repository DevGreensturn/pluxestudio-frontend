import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const NavigationContent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHomeActive = location.pathname === '/';
    const isAboutActive = location.pathname === '/about';
    const isServicesActive = location.pathname === '/services';
    const isPortfolioActive = location.pathname === '/portfolio';
    const isNRIActive = location.pathname === '/nri';
    const isContactUsActive = location.pathname === '#Contact';
    const disabledLinks = [ 'Contact us', 'FAQ'];
    
    useEffect(() => {
        if (location.hash === '#contact') {
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    useEffect(() => {
        if (location.hash === '#faq') {
            setTimeout(() => {
                const faqSection = document.getElementById('faq');
                if (faqSection) {
                    faqSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    const handleContactUsClick = (e) => {
        e.preventDefault();
        if (location.pathname === '/' || location.pathname === '/home' || location.pathname === '') {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        }
    };

    const handleFaqClick = (e) => {
        e.preventDefault();
        if (location.pathname === '/' || location.pathname === '/home' || location.pathname === '') {
            const faqSection = document.getElementById('faq');
            if (faqSection) {
                faqSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const faqSection = document.getElementById('faq');
                if (faqSection) {
                    faqSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        }
    };
    const handleDisabledLinkClick = (event) => event.preventDefault();

    return (
        <ul className='nav navbar-nav'>
            <li className={isHomeActive ? 'active' : ''}>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li className={isAboutActive ? 'active' : ''}>
                <NavLink to='/about'>About us</NavLink>
            </li>
            <li className={isServicesActive ? 'active' : ''}>
                <NavLink to='/services'>Services</NavLink>
            </li>
            <li className={isPortfolioActive ? 'active' : ''}>
                <NavLink to='/portfolio'>Portfolio</NavLink>
            </li>
            <li className={isNRIActive ? 'active' : ''}>
                <NavLink to='/nri'>NRI</NavLink>
            </li>
            <li>
                <a
                    href="#contact"
                    onClick={handleContactUsClick}
                >
                    Contact us
                </a>
            </li>
            <li>
                <a
                    href="#faq"
                    onClick={handleFaqClick}
                >
                    FAQ
                </a>
            </li>
            {/* <li>
                <NavLink to='/faq'>FAQ</NavLink>
            </li> */}
            {/* {disabledLinks.map((link) => (
                <li key={link}>
                    <a href="#!" onClick={handleDisabledLinkClick} aria-disabled="true" tabIndex={-1}>{link}</a>
                </li>
            ))} */}
          
        </ul>
    );
};

class Navigation extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/mobilenav.js');

    };

    render() {
        return (
            <>
                <NavigationContent />
            </>
        );
    };
};

export default Navigation;