import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import './AddVacations.css';

const AddVacations = () => {
    const { allContext } = useAuth();
    const { user } = allContext;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        data.email = user?.email;
        fetch("https://nameless-crag-15556.herokuapp.com/vacations", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('New Vacation successfully added')
                    reset();
                }
            });
        console.log(data);
    };

    return (
        <div className="container-fluid pt-5 add-vacations-section">


            <h1 className="mt-3 text-center text-white fw-bold">Add New Vacation</h1>
            <div className=" w-50 mx-auto mt-5">
                <div className="d-flex justify-content-center align-items-center pb-5">
                    <div className="container">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Name"
                                className="p-2 m-2 w-100 border border-white rounded-2"
                            />

                            <input
                                {...register("time")}
                                placeholder="Days"
                                className="p-2 m-2 w-100 border border-white rounded-2"
                            />

                            <input
                                {...register("region")}
                                placeholder="Region"
                                className="p-2 m-2 w-100 border border-white rounded-2"
                            />

                            <input
                                {...register("minAge", { min: 0, max: 99 })}
                                type="number"
                                placeholder="Min Age"
                                className="p-2 m-2 w-100 border border-white rounded-2"
                            />

                            <input
                                {...register("maxPeople", { min: 0, max: 100 })}
                                type="number"
                                placeholder="Max People"
                                className="p-2 m-2 w-100 border border-white rounded-2"
                            />

                            <input
                                {...register("charge")}
                                placeholder="Charge"
                                className="p-2 m-2 w-100 border border-white rounded-2"
                            />

                            <input
                                {...register("rating")}
                                placeholder="Rating"
                                className="p-2 m-2 w-100 border border-white rounded-2"
                            />

                            <input
                                {...register("ratingCount")}
                                placeholder="Rating Given"
                                className="p-2 m-2 w-100 border border-white rounded-2"
                            />

                            <input
                                {...register("description")}
                                placeholder="Description"

                                className="p-2 m-2 w-100 border border-white rounded-2"
                            />

                            <input
                                {...register("img", { required: true })}
                                placeholder="Image Link"

                                className="p-2 m-2 w-100 border border-white rounded-2"
                            />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn btn-primary w-50 rounded-2" />
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AddVacations;