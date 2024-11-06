import { Link, useLoaderData, useParams } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import { getStoredAddList } from "../Utility/AddToDashBoard";
import { useEffect, useState } from "react";
import AddToCartList from "./AddToCartList";
import  modalImage from '../assets/Group.png'

const AddToCart = () => {
    const [price, ttlPrice] = useState(0);
    const [addlist, setAddList] = useState([]);
    // const [showModal, setShowModal] = useState(false);
    const allData = useLoaderData();
    const getId = getStoredAddList();
    

    useEffect(() => {
        const filterAddData = allData.filter(data => getId.includes(data.product_id.toString()))
        setAddList(filterAddData)
         
        const totalPrice = filterAddData.reduce((sum,item) => sum + item.price, 0);
        ttlPrice(totalPrice)

    }, [])

    const shortByPrice = () => {
        console.log('worked')
        const descendingOrder =  [...addlist].sort((a,b) => b.price - a.price);
        setAddList(descendingOrder); 
    }


    const removeUi = (id) => {
        setAddList((preList) => {
            const updateList = preList.filter(item => item.product_id !== id);

            const totalPrice = updateList.reduce((sum,item) => sum + item.price, 0);
            ttlPrice(totalPrice);

            return updateList;
        });
    }


    const handleremove = () => {
        document.getElementById('my_modal_5').showModal();
       
    }

    const deleteAll = () => {
        ttlPrice(0);
        setAddList([]);
        localStorage.setItem('read-list', JSON.stringify([]));
    }
    
     
     
    return (
        <div className="flex flex-col max-w-4xl mx-auto p-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Cart</h2>
                <div className="flex justify-center items-center gap-4">
                    <h2 className="text-xl font-semibold">Total Cost: {price.toFixed(2)}</h2>
                     
                    <button onClick={shortByPrice} className="flex justify-center p-1 items-center rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500">
                        <div className="flex gap-2 justify-center items-center rounded-full bg-white p-1.5">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Sort by Price</span>
                            <CiFilter />
                        </div>
                   </button>

                    {/* <button onClick={handleremove} className={` px-4 py-2 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full text-white ${addlist.length === 0 && 'bg-gray-700'}`}>Purchase</button> */}
                    <button 
                    onClick={handleremove} 
                    disabled={addlist.length === 0}
                    className={` px-4 py-2  ${addlist.length === 0 ? 'bg-gray-400 rounded-full' : 'bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full text-white'}`}>Purchase</button>

                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box flex flex-col justify-center items-center">
                        <img src={modalImage} alt="modal image" />
                        <h3 className="font-bold text-xl py-4">Payment Successfully</h3>
                        <div className="divider"></div>
                        <p className="py-2 text-xl text-gray-600">Thanks for purchasing.</p>
                        <p className="py-2 text-xl text-gray-600">Total: {price}</p>
                        <div className="modal-action">
                          <form method="dialog">
                            <Link to='/' onClick={deleteAll} className="btn">Close</Link>
                          </form>
                        </div>
                      </div>
                    </dialog>

                </div>
            </div>
            <div className="py-6">
                <div className="space-y-4 py-4">
                    {
                        addlist.map((item, index) => <AddToCartList 
                        key={index} 
                        item={item}
                        removeUi={removeUi}
                        ></AddToCartList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AddToCart;