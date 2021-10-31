import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import useAuth from '../../Hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { allContext } = useAuth();
    const { user } = allContext;
    const { email } = user;

    useEffect(() => {
        fetch(`https://nameless-crag-15556.herokuapp.com/orders/${email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://nameless-crag-15556.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remaining = myOrders.filter(myOrder => myOrder._id !== id);
                        setMyOrders(remaining);
                    }
                });
        }
    }

    return (
        <div className="container-fluid my-order-section">
            <h1 className="text-white pt-5 fw-bold">Update Your Vacations Orders</h1>

            <h6 className="text-white pt-3">My total orders list: {myOrders?.length}</h6>
            <div className="container mt-5">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th className="text-white" key={index}>Place</th>
                            ))}


                            {Array.from({ length: 1 }).map((_, index) => (
                                <th className="text-white" key={index}>Order Id</th>
                            ))}


                            {Array.from({ length: 1 }).map((_, index) => (
                                <th className="text-white" key={index}>Charge</th>
                            ))}


                            {Array.from({ length: 1 }).map((_, index) => (
                                <th className="text-white" key={index}>Status</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th className="text-white" key={index}>Cancel</th>
                            ))}


                        </tr>
                    </thead>
                    {myOrders.map((myOrder) => (

                        <tbody key={myOrder._id}>
                            <tr>

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td className="text-white" key={index}>{myOrder?.name} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td className="text-white" key={index}>{myOrder?._id} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td className="text-white" key={index}>{myOrder?.charge} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td className="text-white" key={index}>{myOrder?.status} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td className="text-white" key={index}>
                                        <button onClick={() => handleDelete(myOrder._id)} className="border-0 text-danger">
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                    </td>
                                ))}

                            </tr>

                        </tbody>
                    ))}

                </Table>
            </div>

        </div>
    );
};

export default MyOrders;