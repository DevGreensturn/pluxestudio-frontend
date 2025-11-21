import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavigationContent = () => {
    const location = useLocation();
    const isAboutActive = location.pathname === '/about';
    const isHomeActive = location.pathname === '/';

    return (
        <ul className="nav navbar-nav">
            <li className={isHomeActive ? 'active' : ''}>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className={isAboutActive ? 'active' : ''}>
                <NavLink to="/about">About us</NavLink>
            </li>
            <li>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
                <NavLink to="/nri">NRI</NavLink>
            </li>
          
         
            <li><a href="#Contact">Contact us</a></li>
            <li><a href="#Faq">FAQ</a></li>
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