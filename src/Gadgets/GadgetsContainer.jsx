import { useEffect, useState } from "react";
import Category from "../Category/Category";
import Gadgets from "./Gadgets";

 

const GadgetsContainer = () => {
    const [gadgets, setGadgets] = useState([]);
    const [filterGadget, setFilterGadgets] = useState([]);

    useEffect(() => {
        fetch('/data.json')
        .then(response => response.json())
        .then(data => {
            setGadgets(data);
            setFilterGadgets(data);
        });
    },[]);
    //console.log(gadgets)

    const handleCategory = (category) => {
        //console.log(id);
        const categoryWise = filterGadget.filter(gadget => gadget.category === category);
        setGadgets(categoryWise)
        // console.log(categoryWise)
    }

    const handleAllGadgets = () => {
        setGadgets(filterGadget)
    }

    return (
        <div>
            <section className="max-w-7xl mx-auto text-center my-20">
                <h2 className="text-3xl font-semibold p-6">Explore Cutting-Edge Gadgets</h2>
                <div className="flex flex-row gap-2 m-4">
                    <div className="w-1/5 rounded border">
                       <Category gadgets={gadgets} handleCategory={handleCategory}  handleAllGadgets={ handleAllGadgets}></Category>
                    </div>
                    <div className="w-4/5 border rounded">
                        <Gadgets gadgets={gadgets}></Gadgets>
                    </div>
                </div>     
            </section>
        </div>
    );
};

export default GadgetsContainer;