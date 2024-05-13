import {
    createBrowserRouter, 
  } from "react-router-dom";
import Main from "../layout/Main";
import ErrorElement from "../ErrorElement/ErrorElement";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import AllFood from "../page/AllFood/AllFood";
import SinglePage from "../page/DetailsPage/SinglePage";
import Purchase from "../Purchase/Purchase";
import AddFoodItem from "../page/AddFoodItem/AddFoodItem";


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
        },
        {
          path:'/single/:id',
          element: <SinglePage/>,
          loader: () =>fetch('http://localhost:5000/food')
        },
        {
          path: '/purchase',
          element: <Purchase/>
        },
        {
          path: '/addfood',
          element: <AddFoodItem/>
        }
      ]
    },
  ]);

  export default router