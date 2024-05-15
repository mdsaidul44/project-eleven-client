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
import AddFoodItem from "../FoodItems/AddFoodItem/AddFoodItem";
import OrderFoodItems from "../FoodItems/OrderFood/OrderFoodItems";
import OrderUpdate from "../FoodItems/OrderFood/OrderUpdate/OrderUpdate";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import GalleryFood from "../page/GalleryFood/GalleryFood"; 
import AddedFood from "../FoodItems/AddedFood/AddedFood";


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
          loader: ({params}) =>fetch(`http://localhost:5000/food/${params.id}`)
        },
        {
          path: '/purchase/:id',
          element: <PrivateRoute><Purchase/></PrivateRoute>,
          loader: ({params}) =>fetch(`http://localhost:5000/food/${params.id}`)
        },
        {
          path: '/addfood',
          element: <AddFoodItem/>
        },
        {
          path: '/orderfood',
          element: <OrderFoodItems/> 
        },
        {
          path:'/orderupdate/:id',
          element: <OrderUpdate/>,
          loader: ({params})=>fetch(`http://localhost:5000/orderupdate/${params.id}`)
        },
        {
          path: '/addfood',
          element: <GalleryFood/>
        },
        {
          path: 'addedfood',
          element: <AddedFood/>,
          loader: ()=> fetch('http://localhost:5000/another')
        }
      ]
    },
  ]);

  export default router