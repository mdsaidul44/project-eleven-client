import {
    createBrowserRouter, 
  } from "react-router-dom";
import Main from "../layout/Main";
import ErrorElement from "../ErrorElement/ErrorElement";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement : <ErrorElement/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        }
      ]
    },
  ]);

  export default router