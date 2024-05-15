

const AddedFoodCard = ({ food }) => {
    console.log(food)
    const { food_name, food_category, price, photo,description } = food;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl h-60 w-60" />
                </figure>
                <div className="card-body items-center ">
                    <h2 className="card-title font-bold">{food_name}</h2>
                    <div >
                        <p className="font-bold">{food_category}</p>
                        <p>Description : {description.slice(0, 50)}</p>
                        <p className="font-semibold">price: {price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedFoodCard;