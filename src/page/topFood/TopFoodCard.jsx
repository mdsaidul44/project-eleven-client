import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";


const TopFoodCard = ({ food }) => {
    const { food_img, food_category, price, food_name } = food
    return (
        <div >
            <div className="card w-96 bg-base-300 shadow-xl">
                <figure><img className="w-full relative h-72" src={food_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="card-title">
                            {food_name}
                            <div className="badge badge-secondary">Best</div>
                        </h2>
                        <h1 className="font-semibold">
                            {"$" + price}
                        </h1>
                    </div>
                    <div className="flex">
                        <p className="font-semibold"><span className="font-bold">Category :</span>{food_category}</p>
                        <Link to=''><button className="flex font-bold text-green-800">Details <GoArrowRight className="mt-1.5"/></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopFoodCard;