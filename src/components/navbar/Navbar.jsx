import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to='/' className="-mr-3"><img className="w-14 -mr-3" src="https://i.ibb.co/GW4n4qW/Screenshot-2024-05-12-095811.png" alt="" /></Link>
                    <Link to='/' className="btn btn-ghost text-2xl "><span className="text-green-800 font-bold ">Chatgaiya</span><span className="text-gray-600 font-bold">Cafe</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu font-bold menu-horizontal px-1">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <li><a>All Foods</a></li>
                        <li><a>Gallery</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/register'><button className="btn mr-2">Register</button></Link>
                    <Link to='/login'><button className="btn mr-2">Login</button></Link>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box font-bold w-52">
                            <li>
                                <a className="justify-between"> My added food items</a>
                            </li>
                            <li><a>Add a food item</a></li>
                            <li><a>My ordered food items</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;