
const SectionOne = () => {
    return (
        <div className="bg-gray-200 rounded-xl p-10  mt-20 ">
            <div className='text-center'>
                <h1 className="text-3xl font-bold mb-5">Best Foods</h1>
                <p className="font-semibold">Pizza - A classic dish consisting of a thin or thick crust topped with tomato sauce, melted cheese, and various  <br /> toppings such as pepperoni, mushrooms, onions, or peppers. Its loved for its versatility, delicious flavors, <br /> and comforting appeal, making it a favorite among people of all ages around the world.</p>
            </div>
            <div className="flex my-20">
                <div className="w-1/2">
                    <img className="rounded-xl" src="https://i.ibb.co/wLw7z0k/istockphoto-991829024-612x612.jpg" alt="" />
                </div>
                <div className="w-1/2 bg-gray-100 rounded-xl p-10">
                    <h1 className="text-3xl font-bold">Our best food</h1>
                    <p className="mt-10">The restaurant offers a delightful culinary experience with an array of flavorful dishes that are expertly prepared and beautifully presented. From appetizers to desserts, each dish showcases fresh, high-quality ingredients and innovative cooking techniques.</p>
                    <hr className="mt-10" />
                    <h1 className="font-semibold text-xl underline mt-10">Come to chittagong if you do not want to miss eating</h1>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;