import { useEffect } from "react";
import { Link } from "react-router-dom";


const ErrorElement = () => {
    useEffect(() => {
        document.title = "Home | date Not Found"
    }, [])
    return (
        <div> 
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-9xl font-bold">Oops!</h1>
                        <p className="py-6 text-2xl"><span className="text-4xl font-bold">404</span>  Data Not Found</p>
                        <Link to='/'><button className="btn bg-green-600">Go To Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;