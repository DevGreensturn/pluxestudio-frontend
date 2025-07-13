import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';

var bnr = require('./../../images/background/f-bg.jpg');
class FooterMain extends React.Component {
    render() {
        return (
            <>
                       <div className="footer-top overlay-wraper bg-cover" style={{backgroundImage:"url(" + bnr + ")"}}>
                                    <div className="overlay-main sx-bg-secondry opacity-08" />
            <div className="container">
            <div className="row">
<div className="col-lg-8 col-md-12 col-sm-12">
    <form className="contact-form cons-contact-form bg-gray p-a30" method="post" action="#">
        <div className="contact-one">
            {/* TITLE START */}
            <div className="section-head">
                <div className="sx-separator-outer separator-left">
                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(images/background/cross-line2.png)' }}>
                        <h3 className="sep-line-one">Form</h3>
                    </div>
                </div>
            </div>
            {/* TITLE END */}
            <div className="form-group">
                <input name="username" type="text" required className="form-control" placeholder="Name" />
            </div>
            <div className="form-group">
                <input name="email" type="text" className="form-control" required placeholder="Email" />
            </div>
            <div className="form-group">
                <textarea name="message" rows={4} className="form-control " required placeholder="Message" defaultValue={""} />
            </div>
            <div className="text-right">
                <button name="submit" type="button" value="Submit" className="site-button btn-half"><span> submit</span>
                </button>
            </div>
        </div>
    </form>
</div>
<div className="col-lg-4 col-md-12 col-sm-12">
    <div className="contact-info block-shadow bg-white bg-center p-a40" style={{ backgroundImage: 'url(images/background/bg-map.png)' }}>
        <div>
            {/* TITLE START */}
            <div className="section-head">
                <div className="sx-separator-outer separator-left">
                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(images/background/cross-line2.png)' }}>
                        <h3 className="sep-line-one">Info</h3>
                    </div>
                </div>
            </div>
            {/* TITLE END */}
            <div className="sx-icon-box-wraper left p-b30">
                <div className="icon-xs"><i className="fa fa-phone" /></div>
                <div className="icon-content">
                    <h5 className="m-t0">Phone number</h5>
                    <p>+91  98714 41515</p>
                </div>
            </div>
            <div className="sx-icon-box-wraper left p-b30">
                <div className="icon-xs"><i className="fa fa-envelope" /></div>
                <div className="icon-content">
                    <h5 className="m-t0">Email address</h5>
                    <p>info@pluxestudio.com</p>
                </div>
            </div>
            <div className="sx-icon-box-wraper left">
                <div className="icon-xs"><i className="fa fa-map-marker" /></div>
                <div className="icon-content">
                    <h5 className="m-t0">Address info</h5>
                    <p>13/33, Infocity 2, Gurugram - 122001</p>
                </div>
            </div>
             <div className="extra-cell">
                                        <ul className="list-unstyled social-bx text-black d-flex flex-wrap align-content-center">
                                            <li><a href="https://www.facebook.com/pluxestudio" target="_blank"><i className="fa fa-facebook" /></a></li>
                                            <li><a href="https://www.instagram.com/pluxe_studio/" target="_blank"><i className="fa fa-instagram" /></a></li>
                                            <li><a href="https://x.com/PluxeStudio" target="_blank"><i className="fa fa-twitter" /></a></li>
                                            <li><a href="https://www.google.com" target="_blank"><i className="fa fa-pinterest" /></a></li>
                                        </ul>
                                    </div>

        </div>
    </div>
    </div>
</div>
</div>
</div>
</>
)}
}

export default FooterMain;
