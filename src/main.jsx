import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage/ErrorPage';
import Root from './Root/Root'
import Home from './Home/Home';
import Category from './Category/Category';
import Dashboard from './Dashboard/Dashboard';
import Statistics from './Statistics/Statistics';
import Gadget from './Gadgets/Gadget';
import Gadgets from './Gadgets/Gadgets';
import GadgetDetail from './Gadgets/GadgetDetail';
import AddToCart from './AddToCart/AddToCart';
import Wishlist from './AddToCart/Wishlist';
import AboutUs from './AboutUs/AboutUs';
 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../category.json'),
        children: [
          {
            path: '/category/:category',
            element: <Category></Category>,
          }, 
        ]
      },
      {
        path: '/gadgets/:product_id',
        loader: () => fetch('/data.json'),
        element: <GadgetDetail></GadgetDetail>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard/cart',
            loader: () => fetch('/data.json'),
            element: <AddToCart></AddToCart>
          },
          {
            path: '/dashboard/wishlist',
            loader: () => fetch('/data.json'),
            element: <Wishlist></Wishlist>
          }
        ]
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
