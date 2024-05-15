import { useLoaderData } from "react-router-dom";
import GalleryCard from "./GalleryCard";

 

const GalleryFood = () => {
    const foods = useLoaderData()
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Food Gallery</h1>

            <div className="grid grid-cols-4 gap-4 mt-10">
                {
                    foods.map(food=> <GalleryCard key={food._id}
                    food={food}
                    />)
                }
            </div>
        </div>
    );
};

export default GalleryFood;