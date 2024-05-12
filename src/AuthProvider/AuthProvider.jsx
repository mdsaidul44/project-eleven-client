import { createContext, useState } from "react";

 


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([])
    const providerInfo ={
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={providerInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;