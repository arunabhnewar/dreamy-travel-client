import React from 'react';
import './Discount.css';
import discount from '../../../images/discount.jpg';

const Discount = () => {
    return (
        <div className="py-5">
            <div className="discount-section mt-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <img className="img-fluid" src={discount} alt="" />
                        </div>

                        <div className="col-sm-12 col-md-6 justify-content-center align-self-center">
                            <h5 className="text-white pt-2">Winter is Coming</h5>
                            <h2 className="fw-bold text-white">Up to 40% Discount!</h2>
                            <button className="btn btn-primary mt-2">Learn More</button>
                            <br /> <br />
                            <span className="text-white-50">*Terms applied</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;