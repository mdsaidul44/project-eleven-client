import {
    createBrowserRouter, 
  } from "react-router-dom";
import Main from "../layout/Main";
import ErrorElement from "../ErrorElement/ErrorElement";
import Home from "../page/Home";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement : <ErrorElement/>,
      children:[
        {
          path: '/',
          element: <Home/>
        }
      ]
    },
  ]);

  export default router