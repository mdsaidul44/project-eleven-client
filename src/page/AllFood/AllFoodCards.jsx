import { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'

const AllFoodCards = ({ allFood }) => {
    const {_id,food_name,food_category,food_img,price}= allFood

    useEffect(()=>{
        document.title  = "Home | All Food"
    },[])

    useEffect(()=>{
        Aos.init();
    },[])

    return (
        <div> 
            <div data-aos="fade-up" data-aos-duration="1000" className="card card-side bg-gray-300 shadow-xl">
                <figure className=""><img className="lg:w-72 w-40 h-56 " src={food_img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{food_name}</h2>
                    <p className="font-semibold">{food_category}</p>
                    <p ><span className="font-bold">BD :</span><span className="text-green-600 font-semibold">{"$"+price}</span></p>
                    <div className="card-actions justify-end">
                        <Link to={`/single/${_id}`}><button className="text-green-800 font-bold flex">Details <GoArrowRight className="mt-1.5"/></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFoodCards;