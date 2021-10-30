import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Articles from '../Articles/Articles';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import Featured from '../Featured/Featured';
import Reviews from '../Reviews/Reviews';
import Support from '../Support/Support';
import Vacations from '../Vacations/Vacations';
import './Home.css';

const Home = () => {
    const { allContext } = useAuth();
    const { isLoading } = allContext;
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div>
            <Banner />
            <Support />
            <Vacations />
            <Discount />
            <Reviews />
            <Articles />
            <Featured />
        </div>
    );
};

export default Home;