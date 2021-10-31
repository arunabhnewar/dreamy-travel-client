import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ManageAllOrders = () => {
    const [orderConfirm, setOrderConfirm] = useState(true);
    const [manageOrders, setManageOrders] = useState([]);


    useEffect(() => {
        fetch('https://nameless-crag-15556.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setManageOrders(data));
    }, [orderConfirm])

    const deleteHandle = id => {
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
                        const remaining = manageOrders.filter(manageOrder => manageOrder._id !== id);
                        setManageOrders(remaining);
                    }
                });
        }
    }

    const confirmHandle = id => {
        const confirm = window.confirm('Are you sure to confirm order?')
        if (confirm) {
            fetch(`https://nameless-crag-15556.herokuapp.com/orders/${id}`, {
                method: 'PUT',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount === 1) {
                        alert('Order Confirm Successfully');
                        setOrderConfirm(!confirm);
                    }
                })
        }
    }

    return (
        <div className="container-fluid my-order-section">
            <h1 className="text-white pt-5 fw-bold">Dashboard Overview</h1>
            <h6 className="text-white pt-3">Clients Total orders list: {manageOrders?.length}</h6>

            <div className="container mt-5">

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th className="text-white" key={index}>Client</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th className="text-white" key={index}>Order Id</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th className="text-white" key={index}>Place</th>
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

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th className="text-white" key={index}>Confirm</th>
                            ))}


                        </tr>
                    </thead>
                    {manageOrders.map((manageOrder) => (

                        <tbody key={manageOrder?._id}>
                            <tr>
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td className="text-white" key={index}>{manageOrder?.Name} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td className="text-white" key={index}>{manageOrder?._id} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td className="text-white" key={index}>{manageOrder?.name} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td className="text-white" key={index}>{manageOrder?.charge} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td className="text-white" key={index}>{manageOrder?.status} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td className="text-white" key={index}>
                                        <button onClick={() => deleteHandle(manageOrder._id)} className="border-0 text-danger">
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                    </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td className="text-white" key={index}>
                                        <button className="border-0 text-success" onClick={() => confirmHandle(manageOrder._id)}>
                                            <FontAwesomeIcon icon={faCheck} />
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

export default ManageAllOrders;