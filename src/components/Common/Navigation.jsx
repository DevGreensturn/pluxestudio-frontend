import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavigationContent = () => {
    const location = useLocation();
    const isAboutActive = location.pathname === '/about';
    const isHomeActive = location.pathname === '/';
    const disabledLinks = ['Services', 'Portfolio', 'NRI', 'Contact us', 'FAQ'];
    const handleDisabledLinkClick = (event) => event.preventDefault();

    return (
        <ul className="nav navbar-nav">
            <li className={isHomeActive ? 'active' : ''}>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className={isAboutActive ? 'active' : ''}>
                <NavLink to="/about">About us</NavLink>
            </li>
            {disabledLinks.map((link) => (
                <li key={link}>
                    <a href="#!" onClick={handleDisabledLinkClick} aria-disabled="true" tabIndex={-1}>{link}</a>
                </li>
            ))}
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