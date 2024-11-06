import { useEffect, useState } from "react";
import { getStoredForWishList, removeWishList } from "../Utility/AddToDashBoard";
import { useLoaderData } from "react-router-dom";

import SingleWishList from "./SingleWishList";

const Wishlist = () => {
    const [allData, setAllData] = useState([])
    const [wishList, setWishList] = useState([]);
    const saveWishList = getStoredForWishList();

    const allGadgets = useLoaderData();
     
    
    useEffect(() => {
        const filterAddData = allGadgets.filter(data => saveWishList.includes(data.product_id.toString()))
        setAllData(filterAddData)
    }, [allGadgets, saveWishList]);

    const handleremoveFromWish = (id) => {
        removeWishList(id);
        
        // setWishList((preItems) => {
        //     preItems.filter((item) => item.product_id !== id);
        // })
        
        setAllData((preItems) => {
            preItems.filter((item) => item.product_id !== id);
        })
    }


    return (
        <div className="max-w-4xl mx-auto p-4 space-y-5">
            <h3 className="text-lg font-semibold">Wish List</h3>
            {
                allData.map((data, index) => <SingleWishList 
                key={index} 
                item={data}
                removeItem={handleremoveFromWish}
                ></SingleWishList>)
            }
        </div>
    );
};

export default Wishlist;