import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { addToStoredDashboardList } from "../Utility/AddToDashBoard";
import { useState } from "react";

const GadgetDetail = () => {
    const [isClicked, setIsClicked] = useState(false);
    const gadgets = useLoaderData();
    const {  product_id } = useParams();
    const product_idInt = parseInt(product_id);

    const singleDetail = gadgets.find(gadget => gadget.product_id === product_idInt);
    console.log(singleDetail)
    const {availability, description, price, product_image, product_title, rating, specification } = singleDetail;

    const ratingRound = Math.floor(rating);


    const addToWhiteList = (id) => {
        if(!isClicked){
            setIsClicked(true);
        }
        console.log(id)
    }


     
    return (
        <div>
            <div className="bg-purple-600 p-10 pb-44 text-white text-center">
                <h2 className="text-2xl font-semibold">Product Details</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="border flex gap-4 justify-center items-center flex-row max-w-4xl mx-auto -mt-24 bg-white p-4 rounded-md">
                <div className="w-2/3 h-full">
                    <img className="rounded-md" src={product_image} alt="product image" />
                </div>
                <div className="w-1/3 space-y-2">
                    <h2 className="text-2xl font-semibold">{product_title}</h2>
                    <p className="text-xl">Price: {price}$</p>
                    <div className="flex">
                        {
                            availability ? <p className="border rounded-full border-green-700 bg-green-200 text-green-700 p-1 text-sm">In Stock</p> : <p className="border rounded-full border-red-700 bg-red-200 text-red-700 p-1 text-sm">Out of stock</p>
                        }
                    </div>
                    <p className="text-gray-600 text-sm">{description}</p>
                    <ol className="list-inside">
                        <h2 className="text-xl font-semibold mb-2">Specification: </h2>
                        {
                            specification.map((speci, index) => <li className="list-decimal text-gray-600 " key={index}>{speci}</li>)
                        }
                    </ol>
                    <div className="flex items-center gap-4">
                        <h3>Rating: {rating}</h3>

                        <ReactStars
                          count={5}
                          value={ratingRound}
                          size={24}
                          activeColor="#ffd700"
                        />

                    </div>
                    <div className="flex gap-2">
                        <div onClick={() => addToStoredDashboardList(product_id)} className="p-2  rounded-full cursor-pointer flex justify-center items-center text-sm bg-purple-600 font-semibold text-white gap-2">
                           <span> Add to Cart</span>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                           </svg>
                        </div>
                        <div>
                            <div onClick={() => addToWhiteList(product_id)} className={`p-2 cursor-pointer flex justify-center border rounded-full bg-gray-200 ${isClicked && 'bg-white text-gray-500 cursor-not-allowed'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetail;