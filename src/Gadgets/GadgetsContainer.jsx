import Category from "../Category/Category";
import Gadgets from "./Gadgets";

 

const GadgetsContainer = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto text-center my-20">
                <h2 className="text-3xl font-semibold p-6">Explore Cutting-Edge Gadgets</h2>
                <div className="flex flex-row gap-2">
                    <div className="w-1/5 bg-green-600">
                       <Category></Category>
                    </div>
                    <div className="w-4/5 bg-red-700">
                        <Gadgets></Gadgets>
                    </div>
                </div>     
            </section>
        </div>
    );
};

export default GadgetsContainer;