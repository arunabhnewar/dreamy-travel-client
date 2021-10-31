import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo-v3.png';

const NavMenubar = () => {
    const { allContext } = useAuth();
    const { user, logOut } = allContext;
    return (
        <>

            <Navbar bg="white" variant="white" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <img className="img-fluid" src={logo} alt="" />
                    <Navbar.Brand href="#home" className="text-dark">Dreamy Travels</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={HashLink} className="text-dark" to="/home#home">Home</Nav.Link>

                        <Nav.Link as={HashLink} className="text-dark" to="/about">About</Nav.Link>
                        <Nav.Link as={HashLink} className="text-dark" to="/contact">Contact</Nav.Link>

                        {!user?.email ? (
                            <>
                                <Nav.Link as={NavLink} to="/login" className="text-dark">Sign In</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={NavLink} to="/myOrders" className="text-dark">My Orders</Nav.Link>

                                <Nav.Link as={NavLink} to="/manageAllOrders" className="text-dark">Manage All Orders</Nav.Link>

                                <Nav.Link as={NavLink} to="/addVacations" className="text-dark">Add Vacations</Nav.Link>

                                <NavDropdown
                                    title={
                                        <img
                                            style={{
                                                width: "50px",
                                                borderRadius: "50%",
                                            }}
                                            src={user?.photoURL}
                                            alt=""
                                        />
                                    }
                                >
                                    <div className="text-center">
                                        <h6>{user?.displayName}</h6>
                                        <p className="m-0 mb-2">{user?.email}</p>
                                        <button onClick={logOut} className="btn btn-success">
                                            Sign Out
                                        </button>
                                    </div>
                                </NavDropdown>

                            </>
                        )}

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default NavMenubar;