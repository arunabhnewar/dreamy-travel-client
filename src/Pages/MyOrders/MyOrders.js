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

    const handleDelete = (id) => {
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
        <div className="container">
            <h1>Update Your Vacations Orders</h1>

            <h6>My total orders list: {myOrders?.length}</h6>
            <div className="container">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            {/* <th>Place</th> */}
                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Place</th>
                            ))}

                            {/* <th>Order Id</th> */}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Order Id</th>
                            ))}

                            {/* <th>Charge</th> */}


                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Charge</th>
                            ))}

                            {/* <th>Cancel</th> */}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Cancel</th>
                            ))}


                        </tr>
                    </thead>
                    {myOrders.map((myOrder) => (

                        <tbody key={myOrder._id}>
                            <tr>
                                {/* <td>{myOrder?.name}</td> */}
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{myOrder?.name} </td>
                                ))}

                                {/* <td>{myOrder?._id}</td> */}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{myOrder?._id} </td>
                                ))}

                                {/* <td>{myOrder?.charge}</td> */}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{myOrder?.charge} </td>
                                ))}

                                <button onClick={() => handleDelete(myOrder._id)} className="mt-3 text-danger">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </tr>

                        </tbody>
                    ))}

                </Table>
            </div>

        </div>
    );
};

export default MyOrders;