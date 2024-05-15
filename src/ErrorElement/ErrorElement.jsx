import { useEffect } from "react";
import { Link } from "react-router-dom";

 
const ErrorElement = () => {
    useEffect(()=>{
        document.title  = "Home | date Not Found"
    },[])
    return (
        <div>
            <Link to='/'><button className="btn">Back to home</button></Link>
        </div>
    );
};

export default ErrorElement;