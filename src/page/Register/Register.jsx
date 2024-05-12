import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";



const Register = () => {
    const  {createUser}  = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister =async (e)=> {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password)

        try{
            const result = await createUser(email,password)
            console.log(result)
            toast.success('signUp successful')
            navigate('/')
        }catch(error){ 
            toast.error(error?.message)

        }
    } 
    
    return (
        <div className="  text-white  rounded-xl " style={{ backgroundImage: 'url(https://i.ibb.co/swvN2dz/best-food-background-0neqcd9ozlv3js9y.jpg)' }}>
            <div className="bg-opacity-60 ">
                <div className=' mx-auto  px-6 py-8 md:px-8 lg:w-1/3'>
                    <div className='flex justify-center mx-auto'>
                        <img
                            className='w-20 rounded-full'
                            src='https://i.ibb.co/GW4n4qW/Screenshot-2024-05-12-095811.png'
                            alt=''
                        />
                    </div>

                    <p className='mt-3 text-xl text-center '>
                        Please Register!
                    </p>
                    <form onSubmit={handleRegister}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-white '
                                htmlFor='LoggingEmailAddress'
                            >
                                Your Name
                            </label>
                            <input 
                                placeholder="Name"
                                name='name'
                                className='block text-black w-full px-4 py-2 bg-slate-300 border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-white '
                                htmlFor='LoggingEmailAddress'
                            >
                                Photo URL
                            </label>
                            <input 
                                placeholder="Photo Url"
                                name='photo'
                                className='block text-black w-full px-4 py-2 bg-slate-300   border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-white '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input 
                                placeholder="Email"
                                name='email'
                                className='block text-black w-full px-4 py-2 bg-slate-300 border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-white '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <input 
                                placeholder="Password"
                                name='password'
                                className='block w-full px-4 py-2 text-gray-700 bg-slate-300 border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                            />
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                REGISTER
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs text-white uppercase  hover:underline'
                        >
                            or sign In
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;