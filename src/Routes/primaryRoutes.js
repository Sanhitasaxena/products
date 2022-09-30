import React from "react";
import {Switch, Route} from "react-router-dom"
import Products from "../components/products"

import Cover from "../components/cover";

const PrimaryRoutes = ()=>{
    return(
        <>
        <Switch>
            <Route exact path="/"><Cover/></Route>
            <Route exact path="/products"><Products/></Route>
            
        </Switch>
        </>
    )
}

export default PrimaryRoutes