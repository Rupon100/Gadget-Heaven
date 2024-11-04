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
        path: '/dashboard',
        element: <Dashboard></Dashboard>
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
