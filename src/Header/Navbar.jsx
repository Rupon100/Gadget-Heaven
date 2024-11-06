import { NavLink, useLocation } from "react-router-dom";
import { getStoredAddList, getStoredForWishList } from "../Utility/AddToDashBoard";
import { useEffect, useState } from "react";


 

const Navbar = () => {
     const [price, setPrice] = useState(0);
     const [gadgets, setGadgets] = useState([]);
     const [addlist, setAddList] = useState([]);
     const savedItem = getStoredAddList();
     const saveForWish = getStoredForWishList();



     const location = useLocation();
     const isHome = location.pathname === '/';



    const links = <div className="flex flex-row gap-2">
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to="/statistics">Statistics</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
            <NavLink to="/about-us">About Us</NavLink>
        </li>
    </div>


    const updateAddList = () => {
      const savedItem = getStoredAddList();
      const filterAddData = gadgets.filter(data => savedItem.includes(data.product_id.toString()));
      setAddList(filterAddData);
    
      const totalPrice = filterAddData.reduce((sum, item) => sum + item.price, 0);
      setPrice(totalPrice);
    };


    useEffect(() => {
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setGadgets(data));

    }, [])

    useEffect(() => {
      updateAddList();
   }, []);
  //gadgets, savedItem]
    

    useEffect(() => {
      const savedItem = getStoredAddList();
      const filterAddData = gadgets.filter(data => savedItem.includes(data.product_id.toString()))
      setAddList(filterAddData)

      const totalPrice = filterAddData.reduce((sum,item) => sum + item.price, 0);
      setPrice(totalPrice)
    }, [gadgets])


   
      
    
    return (
        <div className="mx-4">
          <div className={`max-w-7xl mx-auto navbar bg-base-100 m-4 ${isHome ? 'bg-purple-600 text-white rounded-t-md -mb-4' : ''}`}>
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
              </div>
              <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                { links }
              </ul>
            </div>
            <div className="navbar-end gap-2">

               <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="badge badge-sm indicator-item">{addlist.length}</span>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                    <div className="card-body">
                      <span className="text-lg font-bold">{addlist.length} Items</span>
                      <span className="text-info">Subtotal: {price}$</span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">View cart</button>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="p-2 mr-2  cursor-pointer flex justify-center items-center">
                 <div className="indicator">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                   </svg>
                   <span className="badge badge-sm indicator-item">{saveForWish.length}</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Navbar;