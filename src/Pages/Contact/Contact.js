import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationArrow, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div className="container-fluid contact-section">
                <div className="row d-flex justify-content-center align-items-center contact">
                    <div className="col-md-6 mt-5 pt-5">
                        <h1 className="contact-title mt-5 pt-5">Contact With Us</h1>
                        <p className="text-white mt-3 text-center mb-5">Get In Touch</p>
                    </div>
                </div>
            </div>

            <div className="container mt-5 pt-5 contact-content">
                <div className="row mx-auto">

                    <div className="col-md-4 col-sm-12">
                        <span> <FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: "24px" }} /> </span>
                        <br /> <br />
                        <h4 className="fw-bold">PHONE</h4>
                        <h6 className="text-danger" style={{ cursor: "pointer" }} >+1-2345-2345</h6>
                        <h6 className="text-danger pb-5" style={{ cursor: "pointer" }}>+3-5599-77-00</h6>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <span> <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "24px" }} /> </span>
                        <br /> <br />
                        <h4 className="fw-bold">EMAIL</h4>
                        <h6 className="text-danger" style={{ cursor: "pointer" }}>contact@dreamy_travels.com</h6>
                        <h6 className="text-danger pb-5" style={{ cursor: "pointer" }}>support@dreamy_travels.com</h6>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <span> <FontAwesomeIcon icon={faLocationArrow} style={{ fontSize: "24px" }} /> </span>
                        <br /> <br />
                        <h4 className="fw-bold">LOCATION</h4>
                        <h6 className="text-danger">Beach Str. 345, 67559 Miami, USA</h6>
                        <h6 className="text-danger pb-5" style={{ cursor: "pointer" }}>View On Google Map</h6>
                    </div>
                </div>
            </div>


            <div className="container-fluid mt-5 pt-5 form-section">
                <div className="container">
                    <h1 className="fw-bold">LEAVE US YOUR INFO</h1>
                    <p className="text-white-50 fst-italic">and we will get back to you.</p>

                    <form className="row g-3">
                        <div className="col-md-6  col-sm-12">
                            <label htmlFor="inputFullName" className="form-label text-white"></label>
                            <input type="name" className="form-control" id="inputFullName" placeholder="Full Name" />
                        </div>

                        <div className="col-md-6  col-sm-12">
                            <label htmlFor="inputEmail" className="form-label text-white"></label>
                            <input type="name" className="form-control" id="inputEmail" placeholder="Email" />
                        </div>

                        <div className="col-md-6  col-sm-12">
                            <label htmlFor="inputPhone" className="form-label text-white"></label>
                            <input type="phone" className="form-control" id="inputPhone" placeholder="Phone" />
                        </div>

                        <div className="col-md-6  col-sm-12">
                            <label htmlFor="inputText" className="form-label text-white"></label>
                            <input type="text" className="form-control" id="inputText" placeholder="Subject" />
                        </div>

                        <div className="col-md-12 col-sm-12">
                            <label htmlFor="inputMessage" className="form-label text-white"></label>
                            <textarea className="form-control text-muted" name="message" id="inputMessage" cols="150" rows="10" placeholder="message" >Message</textarea>
                        </div>

                        <div className="col-12">
                            <Button href="#" className="btn btn-primary p-2 w-50 mb-5">Submit</Button>
                        </div>
                    </form>
                </div>


            </div>

        </div >
    );
};

export default Contact;