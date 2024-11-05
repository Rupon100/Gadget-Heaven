
import Gadget from "./Gadget";

const Gadgets = ({ gadgets }) => {
    
    return (
        <div className="p-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    gadgets.map(gadget => <Gadget key={gadget.product_id} gadgets={gadget}></Gadget>)
                }
            </div> 
        </div>
    );
};

export default Gadgets;