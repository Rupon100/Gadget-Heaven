import { useLoaderData, useParams } from "react-router-dom";

const GadgetDetail = () => {
    const gadgets = useLoaderData();
    const {  product_id } = useParams();
    const product_idInt = parseInt(product_id);

    const singleDetail = gadgets.find(gadget => gadget.product_id === product_idInt);
    console.log(singleDetail)
    const {availability, description, price, product_image, product_title, rating, specification } = singleDetail;
     
    return (
        <div>
            <div className="bg-purple-600 p-10 pb-44 text-white text-center">
                <h2 className="text-2xl font-semibold">Product Details</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="flex flex-row max-w-4xl mx-auto -mt-24 bg-white p-4 rounded-md border-2 border-red-700">
                <div className="w-2/3">
                    <img src={product_image} alt="product image" />
                </div>
                <div>
                    <h2>{product_title}</h2>
                    <p>Price: {price}$</p>
                    {
                        availability ? <p className="border rounded-full border-green-700 bg-green-400">In Stock</p> : <p className="border rounded-full border-red-700 bg-red-400">Out of stock</p>
                    }
                    <p>{description}</p>
                    <ol>
                        <h2>Specification: </h2>
                        {
                            specification.map((speci, index) => <li key={index}>{speci}</li>)
                        }
                    </ol>
                    <h3>Rating: {rating}</h3>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetail;