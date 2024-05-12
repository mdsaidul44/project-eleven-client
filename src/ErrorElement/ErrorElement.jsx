import { Link } from "react-router-dom";

 
const ErrorElement = () => {
    return (
        <div>
            <Link to='/'><button className="btn">Back to home</button></Link>
        </div>
    );
};

export default ErrorElement;