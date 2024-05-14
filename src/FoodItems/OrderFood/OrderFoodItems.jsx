import { useContext, useEffect, useState } from "react"; 
import { AuthContext } from "../../AuthProvider/AuthProvider";
import OrderFoodCard from "./OrderFoodCard";

 

 
const OrderFoodItems = () => { 
    const {user} =useContext(AuthContext)
    const [orders,setOrders] = useState([])
    console.log(orders)
    useEffect(()=>{
        fetch(`http://localhost:5000/order/${user?.email}`)
        .then(res => res.json())
        .then(data=> setOrders(data))
    },[user])
     
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center my-10">My Order Collection</h1>
            </div>
            <div className="grid grid-cols-2 gap-10">
            {
                orders.map(order=> <OrderFoodCard key={order._id}
                    order={order}
                />)
             }
            </div>
        </div>
    );
};

export default OrderFoodItems;