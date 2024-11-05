import { NavLink, useLoaderData } from "react-router-dom";
import SingleCategory from "./SingleCategory";

 

const Category = ({ gadgets, handleCategory, handleAllGadgets }) => {
    const categories = useLoaderData();
    
    return (
        <div className="p-3 space-y-4 m-4">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `p-2 rounded-lg border transition-all ${
                  isActive ? 'bg-purple-600 text-white' : 'hover:bg-purple-600 hover:text-white'
                }`
              }
            >
              <button onClick={handleAllGadgets} className="m-3">All Gadgets</button>
            </NavLink>

            {
                categories.map(category => <SingleCategory key={category.id} category={category} gadgets={gadgets} handleCategory={handleCategory}></SingleCategory>)
            }
        </div>
    );
};

export default Category;