import Aos from "aos";
import { useEffect } from "react";


const GalleryCard = ({ food }) => {
    console.log('this is food' ,food)
    // console.log(food)
    const { food_img ,food_name,food_made} = food

    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration='1000' className="border-8 border-black w-76 h-64 rounded-xl image-full">
                <figure><img className="w-full h-60 object-cover" src={food_img} alt="Shoes" /></figure>
                <div className="absolute inset-0 group-hover:opacity-100 duration-200 card-body text-white bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity">
                    <h2 className="card-title ">{food_name}</h2>
                    <p className="">{food_made}</p>
                    <div className="card-actions justify-end">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn-sm bg-white text-black font-bold rounded" onClick={() => document.getElementById('my_modal_5').showModal()}>ADD</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box bg-gray-700">
                                <div className="mb-4">
                                    <form method="dialog">
                                        <p>User Name</p>
                                        <input type="text" className="w-full p-2 rounded-xl mt-2" name="userName" id="" />
                                        <p>Your Feedback</p>
                                        <input type="text" className="w-full p-2 text-black rounded-xl mt-2" name="feedback" id="" />
                                        <p>Photo</p>
                                        <input type="text" className="w-full p-2 rounded-xl mt-2" name="photo" id="" />
                                        <button className="btn mt-4 bg-green-700">Add</button>
                                    </form>
                                </div> 
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;

// <div class="grid grid-cols-3 gap-4">
// <div class="relative">
// <img src="image1.jpg" alt="User Image 1" class="w-full h-full object-cover rounded-lg">
// <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
//     <div class="text-center text-white">
//         <p class="font-bold">User Name</p>
//         <p>User Feedback</p>
//     </div>
// </div>
// </div>
// <!-- Repeat the above block for each image -->
// </div>
