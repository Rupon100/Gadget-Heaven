import { NavLink } from "react-router-dom";


const SingleCategory = ({category}) => {
    
    return (
        <NavLink to={`/category/${category.category}`} className={({ isActive }) =>
            `p-2 rounded-lg border transition-all ${
                isActive ? 'bg-purple-600 text-white' : 'hover:bg-purple-600 hover:text-white'
            }`
        }>
            <button className="m-3">{category.category}</button>
        </NavLink>
    );
};

export default SingleCategory;