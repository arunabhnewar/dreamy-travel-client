import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useForm } from "react-hook-form";

const AddVacations = () => {
    const { allContext } = useAuth();
    const { user } = allContext;
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        data.email = user?.email;
        fetch("https://nameless-crag-15556.herokuapp.com/vacations", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };

    return (
        <div>


            <h1 className="mt-5 text-center text-info">Please Add New Vacation</h1>
            <div className="login-box w-25 m-auto mt-5">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("title")}
                                placeholder="title"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("date")}
                                // placeholder="Name"
                                type="date"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("description")}
                                placeholder="Description"
                                // className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                // className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <select {...register("EventColor")} className="p-2 m-2 w-100">
                                <option value="red">red</option>
                                <option value="green">green</option>
                                <option value="blue">blue</option>
                                <option value="orange">orange</option>
                                <option value="black">black</option>
                            </select>
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn btn-info w-50" />
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AddVacations;