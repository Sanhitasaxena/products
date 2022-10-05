import React from "react";
import { Link } from "react-router-dom";

const DropDown = ()=>{
    return(
        <>
        <ul className="dropdown-nav-items">
            <li><Link to = "/electronics">Electronics</Link></li>
            <li><Link to = "/groceries">Groceries</Link></li>
            <li><Link to = "/cosmetics">Cosmetics</Link></li>
            <li><Link to = "/clothing">Clothing</Link></li>
            
        </ul>
        </>
    )
}

export default DropDown