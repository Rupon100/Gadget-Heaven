
import { NavLink } from "react-router-dom";

const Gadget = ({gadgets}) => {
    // console.log(gadgets);
    const {product_id,product_title,product_image,availability,price,category} = gadgets;
    
    return (
        <div className="border rounded-md p-3 space-y-2">
            <img className="h-44 rounded-md" src={product_image} alt="product image" />
            <h2 className="text-lg font-semibold">{product_title}</h2>
            <p>Price: {price} $</p>
            <button className="p-2 rounded-full border-2 border-purple-600 text-purple-600 font-semibold">
                <NavLink to={`/gadgets/${product_id}`}>View Details</NavLink>
            </button>
        </div>
    );
};

export default Gadget;