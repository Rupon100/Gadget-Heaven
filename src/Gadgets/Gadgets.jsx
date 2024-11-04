import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Gadget from "./Gadget";

 

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    useEffect(() => {
        fetch('./data.json')
        .then(response => response.json())
        .then(data => setGadgets(data))
    } ,[])
    return (
        <div>
            <h2>Gadgets data</h2>
            <p>{gadgets.length}</p>
            <Gadget></Gadget>
        </div>
    );
};

export default Gadgets;