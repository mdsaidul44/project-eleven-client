import { Link } from "react-router-dom";

const Banner = () => {
    return (
        // 
        <div>
            <div className="carousel h-[600px] w-full rounded-xl">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero  h-full" style={{ backgroundImage: 'url(https://i.ibb.co/4fR8HxV/pasdart-231030-35757-qgr7xtw7d7sj0y6yhw81ac9rud4j9x46orfttfrpts.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl font-bold">Cranberry juice</h1>
                                <p className="mb-5">Cranberry juice is a tart and refreshing beverage made from the juice of cranberries, a small, red fruit native to North America.
                                </p>
                                <Link to='/allfood'><button className="btn btn-accent">See All Food</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full"> 
                    <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/T0XKV8S/Khyber-Pass-Pub-Food-Drink-Aug-9-2022-web-103.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl font-bold">Perfect Crispy French fries</h1>
                                <p className="mb-5">
                                    The Perfect Crispy French fries are a beloved classic in fast food cuisine. They are made from high-quality potatoes, precisely cut into thin strips, and fried to a golden crispiness.</p>
                                    <Link to='/allfood'><button className="btn btn-accent">See All Food</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full"> 
                    <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/hCKk57N/istockphoto-1785687184-612x612.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl font-bold">Drink Stock Photo</h1>
                                <p className="mb-5">A Drink Stock Photo typically refers to an image available for purchase or use that features a beverage or drink in a visually appealing and professional manner. </p>
                                <Link to='/allfood'><button className="btn btn-accent">See All Food</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full"> 
                    <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/kMX5LCT/platter-food-min.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl font-bold">Egg McMuffin</h1>
                                <p className="mb-5"> The Egg McMuffin is a classic breakfast sandwich offered by McDonalds. It consists of a freshly cracked Grade A egg, Canadian bacon.</p>
                                <Link to='/allfood'><button className="btn btn-accent">See All Food</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;