import { faClock, faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Vacation = ({ vacation }) => {
    const { _id, name, time, charge, img, rating, ratingCount } = vacation;
    return (
        <div className="row mx-auto">
            <div className="col-md-3 col-sm-12">

                <Card className="mx-auto my-3" style={{ width: '16rem' }} >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-start fs-6 fw-bold">{name.slice(0, 20)}</Card.Title>
                        <Card.Text className="text-start text-muted">
                            <span> <FontAwesomeIcon icon={faClock} style={{ color: "#f97150" }} /> </span>  {time}
                        </Card.Text>

                        <div className="text-start">
                            <Rating readonly
                                style={{ color: '#f97150' }}
                                initialRating={rating}
                                emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                            />{' '}
                            <span className="text-muted">{rating}</span>
                            <span className="text-muted">( reviews {ratingCount})</span>
                        </div>

                        <Card.Text className="text-start fs-5 fw-bold pt-2">
                            <sup>$</sup> {charge}
                        </Card.Text>

                        <div>
                            <Link to={`/placeorder/${_id}`}>
                                <Button variant="primary">See More</Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
};

export default Vacation;