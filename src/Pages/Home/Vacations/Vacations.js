import React, { useEffect, useState } from 'react';
import Vacation from '../Vacation/Vacation';
import './Vacations.css';

const Vacations = () => {
    const [vacations, setVacations] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/vacations')
            .then(res => res.json())
            .then(data => setVacations(data));
    }, [])

    return (
        <div className="my-5 pt-5">
            <h1 className="fw-bold">Our Vacation Packages</h1>
            <div className="vacation-container py-5">
                {
                    vacations.map(vacation => <Vacation key={vacation._id} vacation={vacation}></Vacation>)
                }
            </div>
        </div>
    );
};

export default Vacations;