import { useContext, useEffect, useState } from "react"; 
import { AuthContext } from "../../AuthProvider/AuthProvider";
import OrderFoodCard from "./OrderFoodCard";
import Swal from "sweetalert2";

 

 
const OrderFoodItems = () => { 
    const {user} =useContext(AuthContext)
    const [orders,setOrders] = useState([])

    useEffect(()=>{
        document.title  = "Home | Order Food"
    },[]) 

    // console.log(orders)
    useEffect(()=>{
        fetch(`http://localhost:5000/order/${user?.email}`)
        .then(res => res.json())
        .then(data=> setOrders(data))
    },[user])


    const handleDelete = (id)=>{
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if( result.isConfirmed){
                fetch(`http://localhost:5000/order/${id}`, {
                    method: 'DELETE'
                })
                .then( res => res.json())
                .then(data=>{
                    // console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                        });
                        const remaining = orders.filter(order => order._id !== id)
                            setOrders(remaining)
                    }
                })
            }
        })
    }
     
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center my-10">My Order Collection</h1>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-10">
            {
                orders.map(order=> <OrderFoodCard key={order._id}
                    order={order}
                    handleDelete={handleDelete}
                />)
             }
            </div>
        </div>
    );
};

export default OrderFoodItems;