import React from 'react';
import { NavLink } from 'react-router-dom';

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
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="#welcome_wrapper">Home</a>
                        
                    </li>
                    <li><a href="#About">About us</a>
                       
                    </li>
                    <li>
                        <a href="#WhatWeDo">What we Do</a>
                      
                    </li>
                    <li> 
                        <a href="#Projects">Projects</a>
                    
                    </li>
                    
                    <li><a href="#Faq">FAQ</a></li>
                    <li><a href="#Contact">Contact us</a></li>
                </ul>
            </>
        );
    };
};

export default Navigation;