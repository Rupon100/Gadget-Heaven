import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gadgets from "../Gadgets/Gadgets";
import GadgetsContainer from "../Gadgets/GadgetsContainer";

 

const Home = () => {
    return (
       <div className="m-4">
            <div className="max-w-7xl mx-auto bg-purple-600 p-16 text-white text-center space-y-4 rounded-md pb-44">
                <div className="m-4 space-y-4">
                  <h1 className="text-4xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                  <p className="text-gray-100">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                  <button className="cursor-pointer p-2 bg-white text-purple-600 font-semibold rounded-full">Shop Now</button>
                </div>
            </div>
            <Banner></Banner>
            <GadgetsContainer></GadgetsContainer>
       </div>
    );
};

export default Home;