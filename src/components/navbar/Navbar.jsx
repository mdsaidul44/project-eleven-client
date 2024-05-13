import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";


const Navbar = () => {
    const { user, logout } = useContext(AuthContext) 

    const handleLogout = async () => {
        try {
            await logout()
            toast.success('User LogOut Successfully')
        } catch (err) {
            toast.error(err?.message)
        }
    }
    return (
        <div>
            <div className="navbar bg-base-100 p-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'><li><a>Home</a></li></Link>
                            <Link to='/allfood'><li><a>All Foods</a></li></Link>
                            <Link to='/gallery'><li><a>Gallery</a></li></Link> 
                        </ul>
                    </div>
                    <Link to='/' className="-mr-3"><img className="w-14 -mr-3" src="https://i.ibb.co/GW4n4qW/Screenshot-2024-05-12-095811.png" alt="" /></Link>
                    <Link to='/' className="btn btn-ghost text-2xl "><span className="text-green-800 font-bold ">Chatgaiya</span><span className="text-gray-600 font-bold">Cafe</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu font-bold menu-horizontal px-1">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <Link to='/allfood'><li><a>All Foods</a></li></Link>
                        <Link to='/gallery'><li><a>Gallery</a></li></Link> 
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div className="mr-6">
                        {
                            user ?  
                            <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box font-bold w-52">
                                    <Link to='/addedfood'><li> <a className="justify-between"> My added food items</a></li></Link>
                                    <Link to='/addfood'><li><a>Add a food item</a></li></Link>
                                    <Link to='/orderfood'></Link>
                                    <li><Link onClick={handleLogout}>LogOut</Link></li>
                                </ul>
                            </div>
                            : 
                                <Link to='/login'><button className="btn bg-green-700 text-white  ">LogIn</button></Link>
                        }
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Navbar;