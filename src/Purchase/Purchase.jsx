import { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";



const Purchase = () => {
    const food = useLoaderData()
    const {food_name,price,food_img} = food; 
    const {user} = useContext(AuthContext)
    // console.log(user)

    useEffect(()=>{
        document.title  = "Home | Order Page"
    },[])
    const handleOrder = event =>{
        event.preventDefault()
        const form = event.target; 
        const quantity = form.quantity.value; 
        const buyerName =form.buyerName.value;
        const email = user?.email;
        const date = form.date.value;
         

        const order = {foodName:food_name,img:food_img,price:price,email,quantity,buyerName,date}
        // console.log(order)

        fetch('https://my-assignment-eleven-server-inky.vercel.app/order',{
            method: 'POST',
            headers: {
                'content-type' :'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(data => {
            // console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }


    return (
        <div className="  shadow-2xl bg-base-100">
            <div>
                <h1 className="text-2xl text-green-800 font-bold text-center p-4">Order Now</h1>
            </div>
            <form onSubmit={handleOrder}>
                <div className="lg:flex p-10">
                    <div className="lg:w-1/2 lg:mr-4">
                        <div className="mb-4">
                            <p className="mb-2">Food Name</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Food Name" defaultValue={food?.food_name} type="text" name="foodName" id="" />
                        </div>
                        <div className="mb-4">
                        <p className="mb-2">Price</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Price" type="text" defaultValue={"$"+ food?.price} name="price" id="" />
                        </div>
                        <div className="mb-4">
                        <p className="mb-2">Quantity</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Quantity" type="text" name="quantity" id="" />
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="mb-4">
                        <p className="mb-2">Buyer Name</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Buyer Name" type="text" name="buyerName" id="" />
                        </div>
                        <div className="mb-4">
                        <p className="mb-2">Buyer Email</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Buyer Email" defaultValue={user?.email} type="email" name="buyerEmail" id="" />
                        </div>
                        <div >
                        <p className="mb-2">Buying Date</p>
                            <input className="w-full p-2 rounded bg-slate-300" type="date" name="date" id="" />
                        </div>
                    </div>
                </div>
                <div className="px-10 pb-10">
                    <input className="w-full font-bold p-2 rounded bg-green-700"  type="submit" value="Order Confirm" /> 
                </div>
            </form>
            <div className="flex justify-between p-10">
                <div >
                   <Link to='/allfood'> <button className="flex btn"><GoArrowLeft className="text-xl mt-1"/>More Buy</button></Link>
                </div>
                <div>
                    <Link  to='/orderfood'><button className="flex btn">My Order Food <GoArrowRight/></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Purchase;