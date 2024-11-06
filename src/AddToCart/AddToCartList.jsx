import { MdDeleteForever } from "react-icons/md";
import {  removeStoredList } from "../Utility/AddToDashBoard";

const AddToCartList = ({ item, removeUi }) => {
    const { product_id,product_title, product_image, price,description } = item;
    // console.log(getStoredAddList());

    return (
        <div className="flex justify-between items-start border p-2 rounded-md">
            <div className="flex gap-4">
                <img className="w-44 rounded-md" src={product_image} alt="product-image" />
                <div className="w-2/3 space-y-2">
                    <h2 className="text-xl font-semibold">{product_title}</h2>
                    <p className="text-gray-600">{description}</p>
                    <p className="font-semibold">Price: {price}$</p>
                </div>
            </div>
            <div>
                <button onClick={() => {
                    removeStoredList(product_id);
                    removeUi(product_id);
                }} className="text-2xl text-red-500">
                    <MdDeleteForever />

                   
                </button>
            </div>
        </div>
    );
};

export default AddToCartList;