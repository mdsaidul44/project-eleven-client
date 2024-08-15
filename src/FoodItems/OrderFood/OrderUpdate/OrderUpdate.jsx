
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";





const OrderUpdate = () => {
    const food = useLoaderData()
    const { _id,foodName, price, img, date, buyerName,quantity } = food
    // console.log(food)

    useEffect(()=>{
        document.title  = "Home | Update Order"
    },[])
 
    const handleUpdateOrder = (event) =>{
        event.preventDefault()
        const form = event.target;
        const foodName = form.foodName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const buyerName = form.buyerName.value; 
        const date = form.date.value;
        const img = form.img.value;
        // console.log(foodName,price,quantity,buyerName,date,img)
        const updateOrder ={foodName,price,quantity,buyerName,date,img,}
        // console.log(updateOrder)

        fetch(`http://localhost:5000/orderupdate/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Success',
                        text: 'Update Art Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })
    }
    return (
        <div className=" my-20" >
            <div>
                <h1 className="text-3xl font-bold text-center mb-6 text-cyan-700">Update Now</h1>
            </div>
            <form onSubmit={handleUpdateOrder} className=" ">
                <div className="lg:flex px-10">
                    <div className="lg:w-1/2 lg:mr-4">
                        <div className="mb-4">
                            <p className="mb-2">Food Name</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Food Name" defaultValue={foodName} type="text" name="foodName" id="" />
                        </div>
                        <div className="mb-4">
                            <p className="mb-2">Price</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Price" type="text" defaultValue={"$"+price} name="price" id="" />
                        </div>
                        <div className="mb-4">
                            <p className="mb-2">Quantity</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Quantity" type="text" defaultValue={quantity} name="quantity" id="" />
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="mb-4">
                            <p className="mb-2">Buyer Name</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Buyer Name" type="text" defaultValue={buyerName} name="buyerName" id="" />
                        </div>
                        <div className="mb-4">
                            <p className="mb-2">Photo Url</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Photo URL" defaultValue={img} type="text" name="img" id="" />
                        </div>
                        <div >
                            <p className="mb-2">Buying Date</p>
                            <input className="w-full p-2 rounded bg-slate-300" type="date" name="date" defaultValue={date} id="" />
                        </div>
                    </div>
                </div> 
                <div className="px-10 mt-4 pb-10">
                    <input className="w-full font-bold p-2 rounded bg-cyan-700" type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default OrderUpdate;