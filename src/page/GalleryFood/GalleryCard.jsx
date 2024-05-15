

const GalleryCard = ({ food }) => {
    console.log(food)
    const { food_img } = food
    return (
        <div>
            <div className="card w-76 h-60 bg-base-100 shadow-xl image-full">
                <figure><img className="w-full" src={food_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Add More</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box bg-gray-700">
                                <div className="mb-4">
                                    <form method="dialog">
                                        <p>User Name</p>
                                        <input type="text" className="w-full p-2 rounded-xl mt-2" name="userName" id="" />
                                        <p>Your Feedback</p>
                                        <input type="text" className="w-full p-2 rounded-xl mt-2" name="feedback" id="" />
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