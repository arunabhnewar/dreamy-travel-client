import React from 'react';
import './Review.css';
import review1 from '../../../images/review/review-1.jpg';
import review2 from '../../../images/review/review-2.jpg';
import review3 from '../../../images/review/review-3.jpg';
import review4 from '../../../images/review/review-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {
    return (
        <div className="container my-5 pt-5">
            <h1 className="fw-bold pb-5">Client Reviews</h1>
            <div className="row mx-auto">

                <div className="col-md-3 col-sm-12 mb-5">
                    <div className="card card-item" style={{ width: "16rem" }}>
                        <img src={review1} className="card-img-top rounded-circle w-50 mx-auto p-2" alt="..." />
                        <div className="card-body">
                            <h5 class="card-title text-white">Cersei Lannister</h5>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "white" }} /> </span>
                            <br />
                            <span className="fst-italic text-white">Solo Traveler</span>
                            <p className="card-text text-white">I just wanted to say thank you to everybody at Simply Maldives for booking my stay. We’ve all had a fantastic time. I’d highly recommend them. Thank you
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12 mb-5">
                    <div className="card card-item" style={{ width: "16rem" }}>
                        <img src={review2} className="card-img-top rounded-circle w-50 mx-auto p-2" alt="..." />
                        <div className="card-body">
                            <h5 class="card-title text-white">Arya Stark</h5>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <span> <FontAwesomeIcon icon={faStarHalfAlt} style={{ color: "yellow" }} /> </span>
                            <br />
                            <span className="fst-italic text-white">Solo Traveler</span>
                            <p className="card-text text-white">Shout out to simply Maldives for completely sorting our trip to the Maldives... If you’re ever considering Maldives don’t hesitate to contact them. You won’t find better.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12 mb-5">
                    <div className="card card-item" style={{ width: "16rem" }}>
                        <img src={review3} className="card-img-top rounded-circle w-50 mx-auto p-2" alt="..." />
                        <div className="card-body">
                            <h5 class="card-title text-white">Jon Snow</h5>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <br />
                            <span className="fst-italic text-white">Solo Traveler</span>
                            <p className="card-text text-white">We've had two holidays in the Maldives provided by Simply Maldives. In both cases we stayed at two different island resorts. This added some arrangements.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12 mb-5">
                    <div className="card card-item" style={{ width: "16rem" }}>
                        <img src={review4} className="card-img-top rounded-circle w-50 mx-auto p-2" alt="..." />
                        <div className="card-body">
                            <h5 class="card-title text-white">Sansa Stark</h5>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> </span>
                            <span> <FontAwesomeIcon icon={faStar} style={{ color: "white" }} /> </span>
                            <br />
                            <span className="fst-italic text-white">Blogger</span>
                            <p className="card-text text-white">Thank you Ranjana for booking our trip. All the helpful advice you and Amit provided, gave us the confidence to go and we loved every minute of it. Thank you</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Reviews;