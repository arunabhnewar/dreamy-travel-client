import React from 'react';
import './Articles.css';
import article1 from '../../../images/article/article-1.jpg';
import article2 from '../../../images/article/article-2.jpg';
import article3 from '../../../images/article/article-3.jpg';
import article4 from '../../../images/article/article-4.jpg';

const Articles = () => {
    return (
        <div className="my-5 pt-5">
            <div className="container my-5 pt-5">
                <h1 className="fw-bold pb-5">Recent Articles</h1>
                <div className="row mx-auto">

                    <div className="col-sm-12 col-md-3 mb-5">
                        <div className="article-card">
                            <img className="article-img" src={article1} alt="" />
                            <div className="overlay">
                                <h5 className="text-start">Change your place and get the fresh air</h5>
                                <span className="text-white-50">June 7, 2021</span> | <span className="text-white-50">Lady Gaga</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3 mb-5">
                        <div className="article-card">
                            <img className="article-img" src={article2} alt="" />
                            <div className="overlay">
                                <h5 className="text-start">Pityful a rethoric question ran</h5>
                                <span className="text-white-50">Aug 13, 2021</span> | <span className="text-white-50">katy perry</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3 mb-5">
                        <div className="article-card">
                            <img className="article-img" src={article3} alt="" />
                            <div className="overlay">
                                <h5 className="text-start">How to travel with paper map</h5>
                                <span className="text-white-50">Sept 19, 2021</span> | <span className="text-white-50">Ariana</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3 mb-5">
                        <div className="article-card">
                            <img className="article-img" src={article4} alt="" />
                            <div className="overlay">
                                <h5 className="text-start">Even the all-powerful Pointing</h5>
                                <span className="text-white-50">June 6, 2016</span> | <span className="text-white-50">Billie Eilish</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Articles;