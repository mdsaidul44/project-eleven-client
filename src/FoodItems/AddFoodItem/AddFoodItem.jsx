 
const AddFoodItem = () => {
    return (
        <div className=" bg-gray-500 rounded-xl shadow-2xl" >
            <div>
                <h1 className="text-2xl text-green-800 font-bold text-center p-4">Add Now</h1>
            </div>
            <form className=" ">
                <div className="flex p-10">
                    <div className="w-1/2 mr-4">
                        <div className="mb-4">
                            <p className="mb-2">Food Name</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Food Name" type="text" name="foodName" id="" />
                        </div>
                        <div className="mb-4">
                        <p className="mb-2">Food Category</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Food Category" type="text" name="foodcategory" id="" />
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
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Quantity" type="email" name="quantity" id="" />
                        </div>
                        <div className="mb-4" >
                        <p className="mb-2">User Email</p>
                            <input className="w-full p-2  rounded bg-slate-300" placeholder="User Email" type="date" name="date" id="" />
                        </div>
                        <div >
                        <p className="mb-2">Food Origin</p>
                            <input className="w-full p-2  rounded bg-slate-300" placeholder="Food Origin" type="origin" name="date" id="" />
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