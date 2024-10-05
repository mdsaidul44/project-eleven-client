// import { useLoaderData } from "react-router-dom";
// import AllFoodCards from "./AllFoodCards";
// import { useEffect, useState } from "react";
// import Aos from "aos";



// const AllFood = () => {
//     const [allFoods, setFoods] = useState([])
//     const count = useLoaderData()   
     


//     useEffect(()=>{
//         fetch('http://localhost:5000/food')
//             .then(res => res.json())
//             .then(data => setFoods(data))
//             document.title  = "Home | All Food"
//             Aos.init()
//     },[])
  
//     return (
//         <div >
//             <div  className="hero h-[500px] rounded-xl " style={{ backgroundImage: "url('https://i.ibb.co/5Tmzq8b/pexels-chanwalrus-958545.jpg')" }}>
//                 <div className="hero-overlay rounded-xl bg-opacity-60"></div>
//                 <div className="hero-content text-center text-neutral-content">
//                     <div className=" ">
//                         <h1   data-aos="fade-left"  data-aos-duration='1000'  className="mb-5 text-5xl font-bold">Our Food Collection</h1>
//                         <p    data-aos="fade-right"  data-aos-duration='1000' className="mb-5">Food donated through the Food Drive must be non-perishable and commercially canned and packaged so the food will <br /> not spoil and can be handled safely and efficiently.</p>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <h1   data-aos="fade-down"   data-aos-duration='1000'  className="text-3xl font-bold text-green-900 text-center my-20">The Food Library</h1>
//             </div>
//             <div className="text-center mb-10">
//                 <p   data-aos="fade-left"   data-aos-duration='1000'  className="font-semibold mb-2 text-2xl">Search a food</p>
//                 <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
//             </div>
//             <div className="grid lg:grid-cols-2 gap-10">
//                 {
//                     allFoods.map(allFood => <AllFoodCards
//                         key={allFood._id}
//                         allFood={allFood}
//                     ></AllFoodCards>)
//                 }
//             </div>
//             {/* Pagination controls */} 
//         </div>
//     );
// };

// export default AllFood;


// import { useLoaderData } from "react-router-dom";
import AllFoodCards from "./AllFoodCards";
import { useEffect, useState } from "react";
import Aos from "aos";

const AllFood = () => {
    const [allFoods, setFoods] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);  // State for current page
    const itemsPerPage = 5;  // Number of items per page

    // const count = useLoaderData();

    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setFoods(data));
        document.title = "Home | All Food";
        Aos.init();
    }, []);

    // Calculate total pages
    const totalPages = Math.ceil(allFoods.length / itemsPerPage);

    // Get the current foods for the page
    const indexOfLastFood = currentPage * itemsPerPage;
    const indexOfFirstFood = indexOfLastFood - itemsPerPage;
    const currentFoods = allFoods.slice(indexOfFirstFood, indexOfLastFood);

    // Function to handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div >
            {/* Hero Section */}
            <div className="hero h-[500px] rounded-xl" style={{ backgroundImage: "url('https://i.ibb.co/5Tmzq8b/pexels-chanwalrus-958545.jpg')" }}>
                <div className="hero-overlay rounded-xl bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 data-aos="fade-left" data-aos-duration='1000' className="mb-5 text-5xl font-bold">Our Food Collection</h1>
                        <p data-aos="fade-right" data-aos-duration='1000' className="mb-5">Food donated through the Food Drive must be non-perishable and commercially canned and packaged.</p>
                    </div>
                </div>
            </div>

            {/* Section Title */}
            <div>
                <h1 data-aos="fade-down" data-aos-duration='1000' className="text-3xl font-bold text-green-900 text-center my-20">The Food Library</h1>
            </div>

            {/* Search Bar */}
            <div className="text-center mb-10">
                <p data-aos="fade-left" data-aos-duration='1000' className="font-semibold mb-2 text-2xl">Search a food</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>

            {/* Food Cards */}
            <div className="grid lg:grid-cols-2 gap-10">
                {currentFoods.map(allFood => (
                    <AllFoodCards
                        key={allFood._id}
                        allFood={allFood}
                    />
                ))}
            </div>

            {/* Pagination */}
            <div className="text-center mt-10">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                    <button
                        key={pageNumber}
                        onClick={() => paginate(pageNumber)}
                        className={`mx-2 px-4 py-2 rounded ${pageNumber === currentPage ? 'bg-green-800 text-white' : 'bg-gray-300 text-black'}`}>
                        {pageNumber}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AllFood;
