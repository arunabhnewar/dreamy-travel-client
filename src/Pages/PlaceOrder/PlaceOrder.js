import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faClock, faGlobe, faStar as fullStar, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import './PlaceOrder.css';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
    const { id } = useParams();
    const [orders, setOrders] = useState({});
    const { allContext } = useAuth();
    const { user } = allContext;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    useEffect(() => {
        fetch('https://nameless-crag-15556.herokuapp.com/vacations')
            .then(res => res.json())
            .then(data => {
                const orders = data?.find(order => order?._id === id)
                setOrders(orders)
                reset(orders)
            })
    }, [id, reset])



    const onSubmit = data => {
        data.status = "pending"
        delete data._id;
        fetch('https://nameless-crag-15556.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your order successfully added')
                    reset();
                }
            })
    };

    return (
        <div className="place-order-section">
            <h1 className="fw-bold text-white pt-5">Place Your Order Here</h1>

            <div className="container-fluid py-5 ">
                <div className="row mx-auto">

                    <div className="col-md-5 col-sm-12 align-self-center">

                        <h1 className="pb-3 text-white fw-bold">Edit User Details</h1>
                        <form className="order-form " onSubmit={handleSubmit(onSubmit)}>

                            <input className='p-2 me-2 mb-3 border-0 rounded-3' defaultValue={user?.displayName} {...register("Name")} />

                            <input className='p-2 me-2 mb-3 border-0 rounded-3' defaultValue={user?.email} {...register("email", { required: true })} />

                            {errors?.email && <span className="error">This field is required</span>}
                            <br />

                            <input className='p-2 me-2 mb-3 border-0 rounded-3' placeholder="Address" defaultValue="" {...register("address")} />

                            <input className='p-2 me-2 mb-3 border-0 rounded-3' placeholder="City" defaultValue="" {...register("city")} />
                            <br />
                            <input className='p-2 me-2 mb-3 border-0 rounded-3' placeholder="phone number" defaultValue="" {...register("phone")} />

                            <input className='p-2 me-2 mb-3 border-0 rounded-3' defaultValue={orders?._id} {...register("vacation")} />
                            <br />

                            <input className="bg-primary border-0 w-50 text-white mb-5 rounded-3 p-2" type="submit" value="Booking" />

                        </form>
                    </div>


                    <div className="col-md-7 col-sm-12">

                        <div className="text-start">
                            <img className="img-fluid pb-3" src={orders?.img} alt="" />
                        </div>

                        <div className=" text-start">
                            <h4 className="text-white pb-1 fw-bold">{orders?.name}</h4>

                            <h6 className="text-white pb-1"> <span> <FontAwesomeIcon icon={faClock} style={{ color: "white" }} /> </span> {orders?.time}</h6>
                            <h6 className="text-white pb-1"> <span> <FontAwesomeIcon icon={faGlobe} style={{ color: "white" }} /> </span> {orders?.region}</h6>
                            <h6 className="text-white pb-1"><span> <FontAwesomeIcon icon={faUser} style={{ color: "white" }} /> </span> {orders?.minAge}</h6>
                            <h6 className="text-white pb-1"> <span> <FontAwesomeIcon icon={faUsers} style={{ color: "white" }} /> </span> {orders?.maxPeople}</h6>

                            <Rating readonly
                                style={{ color: "green" }}
                                initialRating={orders?.rating}
                                emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                            />{' '} <span className="text-white">{orders?.rating}</span> |
                            <span className="text-white">({orders?.ratingCount} reviews) </span>

                            <h6 className="text-white pt-2 pb-1">Description: {orders?.description}</h6>

                            <h2 className="text-white fw-bold"> <sup>$</sup>{orders?.charge}</h2>
                        </div>

                        <div className=" text-start">
                            <Link to='/home'>
                                <button className="btn btn-primary mt-4"> <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back </button>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlaceOrder;



// {/* 
//                             <div className="row mx-auto">
//                                 {/* <div className="col-sm-12 col-md-5">
//                                 <img className="img-fluid pb-3" src={orders?.img} alt="" />
//                             </div> */}

// {/* <div className="col-md-7 col-sm-12 text-start">

//                                 <img className="img-fluid pb-3" src={orders?.img} alt="" />

//                                 <h4 className="text-white pb-1 fw-bold">{orders?.name}</h4>

//                                 <h6 className="text-white pb-1"> <span> <FontAwesomeIcon icon={faClock} style={{ color: "white" }} /> </span> {orders?.time}</h6>
//                                 <h6 className="text-white pb-1"> <span> <FontAwesomeIcon icon={faGlobe} style={{ color: "white" }} /> </span> {orders?.region}</h6>
//                                 <h6 className="text-white pb-1"><span> <FontAwesomeIcon icon={faUser} style={{ color: "white" }} /> </span> {orders?.minAge}</h6>
//                                 <h6 className="text-white pb-1"> <span> <FontAwesomeIcon icon={faUsers} style={{ color: "white" }} /> </span> {orders?.maxPeople}</h6>


//                                 <Rating readonly
//                                     style={{ color: "green" }}
//                                     initialRating={orders?.rating}
//                                     emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
//                                     fullSymbol={<FontAwesomeIcon icon={fullStar} />}
//                                 />{' '} <span className="text-white">{orders?.rating}</span> |
//                                 <span className="text-white">({orders?.ratingCount} reviews) </span>

//                                 <h6 className="text-white pt-2 pb-1">Description: {orders?.description}</h6>

//                                 <h2 className="text-white fw-bold"> <sup>$</sup>{orders?.charge}</h2>

//                                 <Link to='/home'>
//                                     <button className="btn btn-primary mt-4"> <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back </button>
//                             //     </Link> */}
//                             // </div > * /}