import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Purchase = () => {
    const food = useLoaderData()
    const {food_name,price,food_img} = food; 
    const {user} = useContext(AuthContext)
    console.log(user)


    const handleOrder = event =>{
        event.preventDefault()
        const form = event.target; 
        const quantity = form.quantity.value; 
        const buyerName =form.buyerName.value;
        const email = user?.email;
         

        const order = {foodName:food_name,img:food_img,price:price,email,quantity,buyerName}
        console.log(order)

        fetch('http://localhost:5000/order',{
            method: 'POST',
            headers: {
                'content-type' :'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
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
            <form onSubmit={handleOrder} className=" ">
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
        </div>
    );
};

export default Purchase;