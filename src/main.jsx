import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import OrderRevies from './Components/OrderRevies/OrderRevies';
import Grandpa from './Components/Grandpa/Grandpa';
// routes section ---------------------------

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: ()=> fetch("tshirts.json")
      },
      {
        path: "review",
        element: <OrderRevies></OrderRevies>
      },
      {
        path: '/grandpa',
        element: <Grandpa></Grandpa>
      }
    ]
  },
]);


// routes system ------------------------------
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
