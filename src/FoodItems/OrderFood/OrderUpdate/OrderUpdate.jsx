
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";





const OrderUpdate = () => {

    useEffect(()=>{
        document.title  = "Home | Update Order"
    },[])

    const food = useLoaderData()
    const { foodName, price, img, date, buyerName, email, quantity } = food
    console.log(food)
    const handleUpdate = event =>{
        event.preventDefault()
        const form = event.target;
        const foodName = form.foodName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const buyerName = form.buyerName.value;
        const email = form.email.value;
        const date = form.date.value;
        const img = form.img.value;
        const updateOrder ={foodName,price,quantity,buyerName,email,date,img}
        console.log(updateOrder)
    }
    return (
        <div className=" my-20" >
            <div>
                <h1 className="text-3xl font-bold text-center mb-6 text-cyan-700">Update Now</h1>
            </div>
            <form onSubmit={handleUpdate} className=" ">
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
                            <p className="mb-2">Buyer Email</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Buyer Email" defaultValue={email} type="email" name="buyerEmail" id="" />
                        </div>
                        <div >
                            <p className="mb-2">Buying Date</p>
                            <input className="w-full p-2 rounded bg-slate-300" type="date" name="date" defaultValue={date} id="" />
                        </div>
                    </div>
                </div>
                <div className="mb-4 px-10">
                    <p className="mb-2">Photo URL</p>
                    <input className="w-full p-2 rounded bg-slate-300" defaultValue={img} type="text" name="img" id="" />
                </div>
                <div className="px-10 pb-10">
                    <input className="w-full font-bold p-2 rounded bg-cyan-700" type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default OrderUpdate;