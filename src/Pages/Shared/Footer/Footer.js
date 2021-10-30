import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faWhatsappSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import creditcard from '../../../images/creditcard-logo.png';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container pt-5">
                <div className="row">

                    <div className="col-md-3 col-sm-12 mb-3">
                        <h3 className="text-white pb-2">Address</h3>
                        <span className="text-muted">Beach Str. 345</span>
                        <br />
                        <span className="text-muted">67559 Miami</span>
                        <br />
                        <span className="text-muted">USA</span>
                    </div>

                    <div className="col-md-3 col-sm-12 mb-3">
                        <h3 className="text-white pb-2">About Us</h3>
                        <span className="text-muted">Travel Blog and Tips</span>
                        <br />
                        <span className="text-muted">Working With Us</span>
                        <br />
                        <span className="text-muted">Be Our Partner</span>
                    </div>

                    <div className="col-md-3 col-sm-12 mb-3">
                        <h3 className="text-white pb-2">Support</h3>
                        <span className="text-muted">Customer Support</span>
                        <br />
                        <span className="text-muted">Terms and Conditions</span>
                        <br />
                        <span className="text-muted">Contact Channels</span>
                    </div>

                    <div className="col-md-3 col-sm-12 mb-3">
                        <h3 className="text-white pb-2">Pay Safely With Us</h3>
                        <span className="text-muted">The payment is encrypted and</span>
                        <br />
                        <span className="text-muted">transmitted securely with an SSL</span>
                        <br />
                        <span className="text-muted">protocol.</span>
                        <img className="img-fluid" src={creditcard} alt="" />
                    </div>
                </div>

                <hr className="text-muted mx-auto mt-3" />
                <div className="row">
                    <div className="col-sm-12 col-md-6 mb-2">
                        <span className="pe-2 text-muted">Follow Us with</span>
                        <span className="pe-2"><FontAwesomeIcon style={{ fontSize: "20px", cursor: 'pointer', color: 'lightblue' }} icon={faTwitterSquare} /></span>
                        <span className="pe-2"> <FontAwesomeIcon style={{ fontSize: "20px", cursor: 'pointer', color: 'lightblue' }} icon={faInstagramSquare} /> </span>
                        <span className="pe-2"> <FontAwesomeIcon style={{ fontSize: "20px", cursor: 'pointer', color: 'lightblue' }} icon={faFacebookSquare} /> </span>
                        <span className="pe-2"> <FontAwesomeIcon style={{ fontSize: "20px", cursor: 'pointer', color: 'lightblue' }} icon={faWhatsappSquare} /> </span>
                        <span className="pe-2"> <FontAwesomeIcon style={{ fontSize: "20px", cursor: 'pointer', color: 'lightblue' }} icon={faYoutubeSquare} /> </span>
                    </div>

                    <div className="col-sm-12 col-md-6 mb-2">
                        <span className="text-muted">newardevil.com @ all rights reserved</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;