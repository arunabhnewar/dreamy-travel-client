import React from 'react';
import './NotFound.css';
import error from '../../images/error.jpg';

const NotFound = () => {
    return (
        <div className="container mt-4 error-section">
            <img className="img-fluid w-75" src={error} alt="" />
        </div>
    );
};

export default NotFound;