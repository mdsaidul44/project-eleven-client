import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";


const SinglePage = () => {
    const foodDetails = useLoaderData()
    const { id } = useParams()
    const details = foodDetails.find(food => food._id === id)
    const { food_name, food_category, price, food_img, description, made } = details
    console.log(details)
    return (
        <div>
            <div className="flex h-[420px] rounded-xl p-4 bg-gray-200">
                <div className="relative w-1/2">
                    <div className="">
                        <img className="w-[400px] rounded-xl" src="https://i.ibb.co/DKKMRyF/images-36.jpg" alt="" />
                    </div>
                    <div className="absolute top-44 left-48">
                        <img className="w-[320px] h-52  rounded-xl" src="https://i.ibb.co/ssC4WL8/cheeseburger-sliders-featured.jpg" alt="" />
                    </div>
                </div>
                <div className="w-1/2 p-10" >
                    <h1 className="font-bold text-2xl text-green-800 mb-10">User For the love of delicious food</h1>
                    <p>For the love of delicious food: an exquisite culinary journey awaits. Indulge in our carefully crafted dishes, bursting with flavor and made with love. From comforting classics to innovative creations, each bite is a celebration of taste and passion. Join us and embark on a gastronomic adventure that will tantalize your senses and leave you craving for more.</p>
                    <p className="flex mt-10"><IoLocationOutline className="mt-1 mr-2" /><span className="underline">chattogram , 2no Gate , Biplop Urdhan.</span></p>
                </div>
            </div>
            <div>
                <div className="hero mt-20 rounded-xl bg-base-300">
                    <div className="hero-content  lg:flex-row-reverse">
                        <img src={food_img} className="max-w-sm ml-32 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-4xl font-bold">{food_name}</h1>
                            <h1 className="mt-2 font-semibold">{food_category}</h1>
                            <p className="mt-4">{description}</p>
                            <p className="text-green-600 font-semibold">Price : {'$'+ price}</p>
                            <Link to={`/purchase`}><button className="flex btn mt-10 text-green-800 font-bold">Buy Now <MdOutlineShoppingCart className="mt-1 text-xl"/></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;