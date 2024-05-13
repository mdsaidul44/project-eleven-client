import { useLoaderData } from "react-router-dom";
import AllFoodCards from "./AllFoodCards";



const AllFood = () => {
    const allFoods = useLoaderData()
    return (
        <div >
            <div className="hero h-[500px] rounded-xl " style={{ backgroundImage: "url('https://i.ibb.co/5Tmzq8b/pexels-chanwalrus-958545.jpg')" }}>
                <div className="hero-overlay rounded-xl bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" ">
                        <h1 className="mb-5 text-5xl font-bold">Our Food Collection</h1>
                        <p className="mb-5">Food donated through the Food Drive must be non-perishable and commercially canned and packaged so the food will <br /> not spoil and can be handled safely and efficiently.</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold text-green-900 text-center my-20">The Food Library</h1>
            </div>
            <div className="text-center mb-10">
                <p className="font-semibold mb-2 text-2xl">Search a food</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
                {
                    allFoods.map(allFood => <AllFoodCards
                        key={allFood._id}
                        allFood={allFood}
                    ></AllFoodCards>)
                }
            </div>
        </div>
    );
};

export default AllFood;