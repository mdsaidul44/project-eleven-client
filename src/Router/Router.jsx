import {
    createBrowserRouter, 
  } from "react-router-dom";
import Main from "../layout/Main";
import ErrorElement from "../ErrorElement/ErrorElement";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import AllFood from "../page/AllFood/AllFood";


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
        },
        {
          path: '/allfood',
          element: <AllFood/>,
          loader: ()=> fetch('http://localhost:5000/food')
        }
      ]
    },
  ]);

  export default router