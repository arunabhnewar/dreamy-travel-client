import React from 'react';
import './Support.css';
import support1 from '../../../images/support/support-1.png';
import support2 from '../../../images/support/support-2.png';
import support3 from '../../../images/support/support-3.png';


const Support = () => {
    return (
        <div className="container my-5 support-section">
            <div className="row mx-auto p-5">

                <div className="col-sm-12 col-md-4">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 pb-3">
                            <img src={support1} alt="" />
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <h4 className="text-white">700+ DESTINATIONS</h4>
                            <p className="text-white pb-3">Our expert team handpicked all destinations in this site</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 pb-3">
                            <img src={support2} alt="" />
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <h4 className="text-white">BEST PRICE GUARANTEE</h4>
                            <p className="text-white pb-3">Price match within 48 hours of order confirmation</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 pb-3">
                            <img src={support3} alt="" />
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <h4 className="text-white">TOP NOTCH SUPPORT</h4>
                            <p className="text-white pb-3">We are here to help, before, during, and even after your trip.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Support;