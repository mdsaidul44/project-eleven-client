import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";

 


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([])

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const providerInfo ={
        user,
        createUser,
        setUser
    }
    return (
        <AuthContext.Provider value={providerInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;