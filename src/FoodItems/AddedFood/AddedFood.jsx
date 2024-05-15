import { Link, useLoaderData } from "react-router-dom";
import AddedFoodCard from "./AddedFoodCard";

 
 
 const AddedFood = () => {
    const addFood = useLoaderData()
    return (
        <div className="bg-gray-300 lg:p-10 rounded-lg">
             <div>
                <h1 className="text-3xl font-bold text-center text-green-600">Added Items</h1>
                <p className="text-center mt-4">Food is any substance consumed by an organism for nutritional support. Food is usually of plant, <br />animal, or fungal origin and contains essential nutrients such as carbohydrates,<br /> fats, proteins, vitamins, or minerals.</p>
             </div>
             <div className="grid lg:grid-cols-3 gap-10 mt-20">
                {
                    addFood.map(food => <AddedFoodCard 
                     key={food._id}
                     food={food}
                    />)
                }
             </div>
             <div className="text-center mt-10 ">
                <Link to='/addfood'><button className="btn bg-green-700">More Add Food</button></Link>
             </div>
        </div>
    );
 };
 
 export default AddedFood;