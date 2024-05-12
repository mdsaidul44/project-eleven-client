import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar/Navbar";

 

const Main = () => {
    return (
        <div>
            <div className="mt-5">
                <Navbar/>
            </div>
            <div className="m-20">
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Main;