import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom"; 

const OrderFoodCard = ({ order ,handleDelete }) => { 
    const {_id, foodName, img, price, buyerName, email, date } = order

    useEffect(()=>{
        document.title  = "Home | Order Items"
    },[]) 


  

    return (
        <div>
            <div className="card lg:w-[600px] h-36 card-side bg-gray-500 shadow-xl">
                <figure><img className="lg:w-44 h-full" src={img} alt="Movie" /></figure>
                <div className="card-body text-indigo-100">
                    <div className="lg:flex justify-between">
                        <div>
                            <h2 className="card-title">{foodName}</h2>
                            <p>{buyerName}</p>
                            <p className="text-green-400">{"$" + price}</p>
                        </div>
                        <div>
                            <div className="lg:ml-36">
                                <Link to={`/orderupdate/${_id}`}><button ><MdOutlineEdit className="text-2xl text-black" /></button>
                                </Link>
                                <button onClick={() => handleDelete(_id)}><MdDelete className="text-2xl ml-4 text-red-400" /></button>
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