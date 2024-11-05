import { NavLink, Outlet } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Dashboard = () => {
    return (
        <div>
            <div className="bg-purple-600 p-10 text-white text-center space-y-6">
                <h2 className="text-4xl font-semibold">Dashboard</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
                <div className='space-x-2'>
                    <NavLink to='/dashboard/cart'
                        className={({ isActive }) => 
                            isActive 
                                ? 'px-6 py-3 bg-white text-purple-600 font-semibold rounded-full' 
                                : 'px-6 py-3 border bg-purple-600 font-semibold rounded-full'
                        }
                    >
                        <button>Cart</button>
                    </NavLink>
                    <NavLink to='/dashboard/wishlist'
                        className={({ isActive }) => 
                            isActive 
                                ? 'px-6 py-3 bg-white text-purple-600 font-semibold rounded-full' 
                                : 'px-6 py-3 border bg-purple-600 font-semibold rounded-full'
                        }
                    >
                        <button>Wish list</button>
                    </NavLink>
                </div>
            </div>

            <div>
                <Outlet></Outlet>
            </div>

             

        </div>
    );
};

export default Dashboard;