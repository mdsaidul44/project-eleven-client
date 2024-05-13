

const Purchase = () => {
    return (
        <div className="  shadow-2xl bg-base-100">
            <div>
                <h1 className="text-2xl text-green-800 font-bold text-center p-4">Order Now</h1>
            </div>
            <form className=" ">
                <div className="flex p-10">
                    <div className="w-1/2 mr-4">
                        <div className="mb-4">
                            <p className="mb-2">Food Name</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Food Name" type="text" name="foodName" id="" />
                        </div>
                        <div className="mb-4">
                        <p className="mb-2">Price</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Price" type="text" name="price" id="" />
                        </div>
                        <div className="mb-4">
                        <p className="mb-2">Quantity</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Quantity" type="text" name="quantity" id="" />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="mb-4">
                        <p className="mb-2">Buyer Name</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Buyer Name" type="text" name="buyerName" id="" />
                        </div>
                        <div className="mb-4">
                        <p className="mb-2">Buyer Email</p>
                            <input className="w-full p-2 rounded bg-slate-300" placeholder="Buyer Email" type="email" name="buyerEmail" id="" />
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