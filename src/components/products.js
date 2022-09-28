import React from "react";
import { useState } from "react";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);

  const getProducts = () => {
    const myProducts = axios.get("https://dummyjson.com/products/");
    myProducts
      .then((res) => {
        console.log(res.data.products);
        setData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div id="mainContainer">
        <div id="headContainer">
        <h3 id="headline">MY PRODUCTS</h3>
        <button onClick={getProducts} id="btn">Get my products</button>
        </div>

        <div id="container">
          {data.map((item) => {
            return (
              <>
                <div id="itemDiv" key={item.id}>
                  <div>
                    <img
                      src={item.thumbnail}
                      alt="true"
                      height="250px"
                      width="250px"
                      id="img"
                    />
                    <div id="titlePrice">
                      <p>
                        <b>{item.title}</b>
                      </p>
                      <p>
                        <b>${item.price}</b>
                      </p>
                    </div>
                    <div id="buttons" className="d-flex flex-column m-1 p-1">
                        <button className="btn btn-success m-1 ">Add to Cart</button>
                        <button className="btn btn-danger m-1">Remove from Cart</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
