

const AllFoodCards = ({ allFood }) => {
    const {food_name,food_category,food_img,price}= allFood
    return (
        <div>
            <div className="card card-side bg-gray-300 shadow-xl">
                <figure className=""><img className="w-72 h-56 " src={food_img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{food_name}</h2>
                    <p className="font-semibold">{food_category}</p>
                    <p ><span className="font-bold">BD :</span><span className="text-green-600 font-semibold">{"$"+price}</span></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFoodCards;