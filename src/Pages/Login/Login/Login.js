import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';
import login from '../../../images/login.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const Login = () => {
    const { allContext } = useAuth();
    const { signInUsingGoogle, setUser } = allContext;

    const location = useLocation();
    const history = useHistory();
    const redirect = location?.state?.from || '/home';


    const handleGoogleSignIn = (e) => {
        e.preventDefault()
        signInUsingGoogle()
            .then(result => {
                console.log(result);
                setUser(result.user)
                history.push(redirect)
            })
    }

    return (
        <div className="container">

            <div className="mt-5 mb-5">
                <img className="img-fluid w-25" src={login} alt="" />
            </div>

            <div className="py-5 border w-50 mx-auto mb-5 sign-in-card">
                <h1 className="text-white pb-3">Sign In With</h1>
                <button onClick={handleGoogleSignIn} type="submit" className="btn btn-success me-2"> <FontAwesomeIcon icon={faGoogle} />  Google</button>

            </div>

        </div>
    );
};

export default Login;