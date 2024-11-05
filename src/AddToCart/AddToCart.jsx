import { useParams } from "react-router-dom";

 

const AddToCart = () => {
     
    return (
        <div>
            <div>
                <h2>Cart</h2>
                <div>
                    <h2>Total Cost: 100</h2>
                    <button className="flex">
                        <span>Short by Price</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                        </svg>
                    </button>
                    <button>Purchase</button>
                </div>
            </div>
            <div>
                <div></div>
            </div>
        </div>
    );
};

export default AddToCart;