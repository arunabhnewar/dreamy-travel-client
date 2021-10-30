import React from 'react';
import './About.css';
import team1 from '../../images/team/team-1.jpg';
import team2 from '../../images/team/team-2.jpg';
import team3 from '../../images/team/team-3.jpg';
import team4 from '../../images/team/team-4.jpg';
import team5 from '../../images/team/team-5.jpg';
import team6 from '../../images/team/team-6.jpg';
import about2 from '../../images/about-2.jpg';
import icon10 from '../../images/experience/icon-10.png';
import icon11 from '../../images/experience/icon-11.png';
import icon12 from '../../images/experience/icon-12.png';

const About = () => {
    return (
        <div>
            <div className="container-fluid about-section">
                <div className="row d-flex justify-content-center align-items-center about">
                    <div className="col-md-6 mt-5 pt-5 text-center">
                        <h1 className="about-title mt-5 pt-5 text-white">About Us</h1>
                    </div>
                </div>
            </div>

            <div className="about-dreamy-travels">
                <div className="container my-5 py-5">
                    <div className="row mx-auto">
                        <div className="col-md-6 col-sm-12" >
                            <img className="img-fluid" src={about2} alt="" />
                        </div>

                        <div className="col-md-6 col-sm-12 justify-content-center align-self-center" >
                            <h1 className="text-white pt-2">About Dreamy Travels</h1>
                            <span className="text-white">Every one of our Travel Consultant’s offer specialist destination and resort information, and is highly experienced in guiding, planning and booking the perfect all over in the world Holiday for each and every customer.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5 team-section">
                <div className="container">
                    <h1 className="mb-5 pt-5 fw-bold">Meet The Team</h1>
                    <div className="row mx-auto">

                        <div className="col-sm-12 col-md-4">
                            <div className="team-card mb-5 pb-5">
                                <img className="img-fluid" src={team1} alt="" />
                                <h5 className="text-center fw-bold pt-3">JEANETTE KINGSTON</h5>
                                <span className="">Chief Executive Officer</span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <div className="team-card mb-5 pb-5">
                                <img className="img-fluid" src={team2} alt="" />
                                <h5 className="text-center fw-bold pt-3">ALAN COOPER</h5>
                                <span className="">Vice President</span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <div className="team-card mb-5 pb-5">
                                <img className="img-fluid" src={team3} alt="" />
                                <h5 className="text-center fw-bold pt-3">JOHN SMITHY</h5>
                                <span className="">Chief Financial Officer</span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <div className="team-card mb-5 pb-5">
                                <img className="img-fluid" src={team4} alt="" />
                                <h5 className="text-center fw-bold pt-3">PETER SANDLER</h5>
                                <span className="">Senior Engineer</span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <div className="team-card mb-5 pb-5">
                                <img className="img-fluid" src={team5} alt="" />
                                <h5 className="text-center fw-bold pt-3">RICARDO GOMEZ</h5>
                                <span className="">HR Manager</span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <div className="team-card mb-5 pb-5">
                                <img className="img-fluid" src={team6} alt="" />
                                <h5 className="text-center fw-bold pt-3">JAMES SMITH</h5>
                                <span className="">Chief Technology Officer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-5 py-5">
                <div className="container about-dreamy-travels">
                    <h1 className="py-5 text-white fw-bold">Experience</h1>
                    <div className="row mx-auto pb-5">
                        <div className="col-md-4 col-sm-12">
                            <img src={icon10} alt="" />
                            <h5 className="py-3 text-white">40,000+ CUSTOMERS</h5>
                        </div>

                        <div className="col-md-4 col-sm-12">
                            <img src={icon11} alt="" />
                            <h5 className="py-3 text-white">AWARD WINNING</h5>
                        </div>

                        <div className="col-md-4 col-sm-12">
                            <img src={icon12} alt="" />
                            <h5 className="py-3 text-white">SECURE PAYMENT</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;