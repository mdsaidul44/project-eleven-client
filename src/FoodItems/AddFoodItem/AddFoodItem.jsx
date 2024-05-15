import { useEffect } from "react";
import Swal from "sweetalert2";

 
 
const AddFoodItem = () => { 


    
    useEffect(()=>{
        document.title  = "Home | Add Food "
    },[])


    const handleAddFood = e =>{ 
        e.preventDefault()
        const form = e.target;
        const food_name = form.foodName.value;
        const food_category = form.foodCategory.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const quantity = form.quantity.value;
        const origin = form.origin.value;
        const added = {food_name,food_category,price,description,photo,email,quantity,origin}
        console.log(added)

        // send data to the server side
        fetch('http://localhost:5000/another', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(added)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Yes'
                      })
                }
            })
    }

    return (
        <div className=" bg-gray-500 rounded-xl shadow-2xl" >
            <div>
                <h1 className="text-2xl text-green-800 font-bold text-center p-4">Add Now</h1>
            </div>
            <form onSubmit={handleAddFood}>
                <div className="flex p-10">
                    <div className="w-1/2 mr-4">
                        <div className="mb-4">
                            <p className="mb-2">Food Name</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Food Name" type="text" name="foodName" id="" />
                        </div>
                        <div className="mb-4">
                        <p className="mb-2">Food Category</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Food Category" type="text" name="foodCategory" id="" />
                        </div>
                        <div className="mb-4">
                        <p className="mb-2">Price</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Price" type="text" name="price" id="" />
                        </div>
                        <div className="mb-4">
                        <p className="mb-2">A short description of the food item</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Description" type="text" name="description" id="" />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="mb-4">
                        <p className="mb-2">Food Image</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Photo Url" type="text" name="photo" id="" />
                        </div>
                        <div className="mb-4">
                        <p className="mb-2">Quantity</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Quantity" type="text" name="quantity" id="" />
                        </div>
                        <div className="mb-4" >
                        <p className="mb-2">User Email</p>
                            <input className="w-full p-2  rounded bg-slate-300" placeholder='email' type="email" name="email" id="" />
                        </div>
                        <div >
                        <p className="mb-2">Food Origin</p>
                            <input className="w-full p-2  rounded bg-slate-300" placeholder="Food Origin" type="origin" name="origin" id="" />
                        </div>
                    </div>
                </div>
                <div className="px-10 pb-10">
                    <input className="w-full font-bold p-2 rounded bg-green-700"  type="submit" value="Add Item" /> 
                </div>
            </form>
        </div>
    );
};

export default AddFoodItem;