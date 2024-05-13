import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar/Navbar";

 

const Main = () => {
    return (
        <div>
            <div >
                <Navbar/>
            </div>
            <div className="lg:mx-20 mt-10 mb-20">
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Main;