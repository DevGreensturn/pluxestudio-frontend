import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


var bnr = require('./../../images/background/f-bg.jpg');

var wa = require('./../../images/whatsapp.png');
class FooterMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: '',
            phone: ''
        };
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    handlePhoneChange = (e) => {
        const onlyDigits = e.target.value.replace(/\D/g, '');
        this.setState({ phone: onlyDigits });
    };

    handleSubmit = async (e) => {
        const form = document.getElementById('leadForm');

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const username = document.querySelector('[name="username"]').value.trim();
        const message = document.querySelector('[name="message"]').value.trim();
        const email = this.state.email.trim();
        const Phone = this.state.phone.trim();

        if (!username || !message) {
            toast.error("Please fill in all required fields");
            return;
        }

        if (!email && !Phone) {
            toast.error("Please enter either email or phone number");
            return;
        }

        if (Phone && !/^\d+$/.test(Phone)) {
            toast.error("Phone number must contain digits only");
            return;
        }

        this.setState({ loading: true });

        try {
            await axios.post(`${process.env.REACT_APP_API_BASE || 'https://pluxestudio.com/user'}/api/send-email`, {
                username,
                email,
                Phone,
                message
            });

            this.setState({ loading: false, email: '', phone: '' });
            form.reset();
            toast.success("Email sent successfully!");
        } catch (err) {
            console.error(err);
            this.setState({ loading: false });
            toast.error("Failed to send email");
        }
    };

    render() {
        const isEmailRequired = !this.state.phone;
        const isPhoneRequired = !this.state.email;
        return (
            <>
                <div className="whatsappdiv" >
                    <a href="https://api.whatsapp.com/send/?phone=919871077515&text=I+want+to+know+more+about+the+Pluxe+Studio+services" target="_blank" className="whatsapplink">
                        <img className="whatsappimg" style={{ position: 'fixed', left: '0', bottom: '0', width: '200px', zIndex: '100' }} src={wa} alt="whatsapp icon" />
                    </a></div>
                <div className="footer-top overlay-wraper bg-cover" id="contact" style={{ backgroundImage: "url(" + bnr + ")" }}>
                    <div className="overlay-main sx-bg-secondry opacity-08" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <form className="contact-form cons-contact-form bg-gray p-a30" method="post" action="#" id="leadForm" style={{ position: 'relative' }}>
                                    {this.state.loading && (
                                        <div className="loading-cover" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255, 255, 255, 0.8)' }}>
                                            <i className="fa fa-spinner fa-spin" style={{ fontSize: '30px', color: '#333' }}></i>
                                        </div>
                                    )}
                                    <div className="contact-one">
                                        <div className="section-head">
                                            <div className="sx-separator-outer separator-left">
                                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(images/background/cross-line2.png)' }}>
                                                    <h3 style={{ border: 'none', padding: "10px" }} className="">Form</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input name="username" type="text" required className="form-control" placeholder="Name" disabled={this.state.loading} />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                required={isEmailRequired}
                                                placeholder="Email"
                                                disabled={this.state.loading}
                                                value={this.state.email}
                                                onChange={this.handleEmailChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                name="Phone"
                                                type="tel"
                                                className="form-control"
                                                required={isPhoneRequired}
                                                placeholder="Phone "
                                                disabled={this.state.loading}
                                                value={this.state.phone}
                                                onChange={this.handlePhoneChange}
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" rows={4} className="form-control " required placeholder="Message" defaultValue={""} disabled={this.state.loading} />
                                        </div>
                                        <div className="text-right">
                                            <button onClick={this.handleSubmit} name="submit" id="submitButton" type="button" value="Submit" className="site-button btn-half" disabled={this.state.loading}>
                                                <span>{this.state.loading ? 'Sending...' : 'submit'}</span>
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
                                                <p><a href="tel://+919871077515" >+91  987 107 7515 </a></p>
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
        )
    }
}

export default FooterMain;
