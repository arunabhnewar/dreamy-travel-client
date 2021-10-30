import React from 'react';
import './Featured.css';
import featured1 from '../../../images/featured/featured-1.png';
import featured2 from '../../../images/featured/featured-2.png';
import featured3 from '../../../images/featured/featured-3.png';
import featured5 from '../../../images/featured/featured-5.png';

const Featured = () => {
    return (
        <div className="my-5 pt-5">
            <div className="container my-5 pt-5">
                <h1 className="fw-bold">We are featured in</h1>
                <p className="text-muted">See what others are saying about us</p>

                <div className="row pt-4 featured-section">
                    <div className="col-sm-12 col-md-3">
                        <img className="img-fluid" src={featured1} alt="" />
                    </div>

                    <div className="col-sm-12 col-md-3">
                        <img className="img-fluid" src={featured2} alt="" />
                    </div>

                    <div className="col-sm-12 col-md-3">
                        <img className="img-fluid" src={featured3} alt="" />
                    </div>

                    <div className="col-sm-12 col-md-3">
                        <img className="img-fluid" src={featured5} alt="" />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Featured;