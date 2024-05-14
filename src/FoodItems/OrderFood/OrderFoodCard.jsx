import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

const OrderFoodCard = ({ order }) => {
    const { foodName, img, price, buyerName,email,date } = order
    return (
        <div>
            <div className="card w-[600px] h-36 card-side bg-gray-500 shadow-xl">
                <figure><img className="w-44 h-full" src={img} alt="Movie" /></figure>
                <div className="card-body text-indigo-100">
                    <div className="flex justify-between">
                        <div>
                        <h2 className="card-title">{foodName}</h2>
                        <p>{buyerName}</p>
                        <p className="text-green-400">{"$"+price}</p>
                        </div>
                        <div>
                            <div className="ml-36">
                            <button ><MdOutlineEdit className="text-2xl text-black"/></button>
                            <button><MdDelete className="text-2xl ml-4 text-red-400"/></button>
                            </div>
                            <p className=" mt-6"> Date: {date}</p>
                            <p className="underline">{email}</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default OrderFoodCard;