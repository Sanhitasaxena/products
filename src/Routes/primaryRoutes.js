import React from "react";
import {Switch, Route} from "react-router-dom"
import Electronics from "../components/Categories/electronics"
import Cosmetics from "../components/Categories/cosmetics"
import Groceries from "../components/Categories/groceries"
import Clothing from "../components/Categories/clothing"
// import Products from "../components/products"

import Cover from "../components/cover";

const PrimaryRoutes = ()=>{
    return(
        <>
        <Switch>
            <Route exact path="/"><Cover/></Route>
            {/* <Route exact path="/products"><Products/></Route> */}
            <Route exact path="/electronics"><Electronics/></Route>
            <Route exact path="/cosmetics"><Cosmetics/></Route>
            <Route exact path="/groceries"><Groceries/></Route>
            <Route exact path="/clothing"><Clothing/></Route>
        </Switch>
        </>
    )
}

export default PrimaryRoutes