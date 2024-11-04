import { useEffect, useState } from "react";
import Gadget from "./Gadget";

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    useEffect(() => {
        fetch('/data.json')
        .then(response => response.json())
        .then(data => setGadgets(data))
    } ,[]);

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