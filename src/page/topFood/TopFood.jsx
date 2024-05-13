import { useEffect, useState } from "react"; 
import TopFoodCard from "./TopFoodCard";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";



const TopFood = () => {
    const [foods, setFoods] = useState([])
    console.log(foods)
    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl font-bold mt-20 mb-6">Top Foods</h1>
                <p>The most premium dishes in our restaurant.Which are the top sailings of our restaurant so far. we serve to <br /> serve our highest quality food with our customers in mind.</p>
            </div>
            <div className="grid lg:grid-cols-3 lg:gap-20 space-y-10 my-20">
                {
                    foods.slice(0,6).map(food =>
                        <TopFoodCard
                            food={food}
                            key={food._id}
                        ></TopFoodCard>)
                }
            </div>
            <div className="text-center">
                <Link to='/allfood'><button className="btn bg-green-800 text-black">See All Food <GoArrowRight className="text-xl"/></button></Link>
            </div>
        </div>
    );
};

export default TopFood;