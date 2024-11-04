
const Gadget = ({gadgets}) => {
    console.log(gadgets);
    const {product_title,product_image,availability,price,category} = gadgets;
    return (
        <div>
            <img src={product_image} alt="product image" />
            <h2>{product_title}</h2>
            <p>Price: {price} $</p>
            <button className="p-2 rounded-full border-2 border-purple-600 text-purple-600 font-semibold">View Details</button>
        </div>
    );
};

export default Gadget;