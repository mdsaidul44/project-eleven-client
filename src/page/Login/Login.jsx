import { Link } from "react-router-dom";



const Login = () => {
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
                        Welcome back!
                    </p>

                    <div className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg '>
                        <div className='px-4 py-2'>
                            <svg className='w-6 h-6' viewBox='0 0 40 40'>
                                <path
                                    d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                    fill='#FFC107'
                                />
                                <path
                                    d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                                    fill='#FF3D00'
                                />
                                <path
                                    d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                                    fill='#4CAF50'
                                />
                                <path
                                    d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                    fill='#1976D2'
                                />
                            </svg>
                        </div>

                        <span className='w-5/6 px-4 py-3 font-bold text-white text-center'>
                            Sign in with Google
                        </span>
                    </div>
                    <div className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg '>
                        <div className='px-4 py-2'>
                            <svg className="bg-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="6" height="6">
                                <path fill="#181717" d="M512 64C264.6 64 64 264.6 64 512c0 224.1 145.6 414 347.7 481.2 25.5 4.7 34.8-11.1 34.8-24.7 0-12.2-.5-52.8-.8-95.7-141.4 30.7-171.2-59.8-171.2-59.8-23.1-58.7-56.5-74.4-56.5-74.4-46.3-31.6 3.5-30.9 3.5-30.9 51.2 3.6 78.2 52.5 78.2 52.5 45.6 78.1 119.6 55.6 149 42.4 4.6-33 17.8-55.6 32.4-68.4-113.5-12.9-232.6-56.8-232.6-253.1 0-55.9 20-101.6 52.5-137.4-5.2-13-22.7-65 4.9-135.6 0 0 42.8-13.8 140.2 52.5a480.4 480.4 0 0 1 252.5 0C690.3 93.6 733 107.4 733 107.4c27.7 70.7 10.2 122.6 5 135.6 32.6 35.8 52.4 81.5 52.4 137.4 0 196.8-119.3 240-232.8 252 18.3 15.9 34.6 47.2 34.6 95.2 0 68.8-.6 124.2-.6 141.2 0 13.7 9.2 29.7 35.2 24.6C816.3 926 961.9 736.1 961.9 512c0-247.4-200.6-448-448-448z" />
                            </svg>

                        </div>

                        <span className='w-5/6 px-4 py-3 font-bold text-white text-center'>
                            Sign in with Github
                        </span>
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-white uppercase  hover:underline'>
                            or login with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    <form>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-white '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email'
                                className='block text-black w-full px-4 py-2  bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
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
                                id='loggingPassword'
                                autoComplete='current-password'
                                name='password'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                            />
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/register'
                            className='text-xs text-white uppercase  hover:underline'
                        >
                            or Register
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;