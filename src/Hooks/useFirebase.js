import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    //get name
    const getName = e => {
        setName(e.target.value);

    }
    //get email
    const getEmail = e => {
        setEmail(e.target.value);

    }
    //get password
    const getPassword = e => {
        setPassword(e.target.value);
    }

    // registration with email & password
    const newRegister = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = (result.user)
                console.log(user);
                setError('')
                setUserName();
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // set user name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    // verify email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => { })
    }

    //google sign in
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // handle login
    const handleLogin = () => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    // handle log out
    const logOut = () => {
        signOut(auth)

    }

    return {
        user,
        setUser,
        isLoading,
        error,
        setError,
        verifyEmail,
        sendEmailVerification,
        setUserName,
        signInUsingGoogle,
        newRegister,
        handleLogin,
        getName,
        getEmail,
        getPassword,
        logOut
    }
}


export default useFirebase;