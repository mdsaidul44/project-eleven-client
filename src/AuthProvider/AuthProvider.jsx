import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";

 


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([])
    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    // register
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    // Login
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const providerInfo ={
        user,
        createUser,
        loginUser,
        signInWithGoogle,
        setUser
    }

    return (
        <AuthContext.Provider value={providerInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;