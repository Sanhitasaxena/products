import React from "react";
import logo from "../images/logo.jpg"
import {FaSearch} from "react-icons/fa"

const Header = ()=>{


    return (
      <>
        <div className="container-fluid" id="headHeader">
          {/* <h1>This is header</h1> */}
          <div id="headHeaderContent" className="d-flex justify-content-around">
            <div>
              <img 
              src={logo} 
              alt="true" 
              height="80px" 
              width="80px" 
              id="headHeaderContentImg"
              className="m-2"/>
            </div>
            <div>
              <ul id="headHeaderContentList" className="d-flex">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="d-flex flex-row text-center mt-4 p-2" id="headSearchBar">
              <div className="p-1"><input type="search" placeholder="Search.." id="headSearchInput" /></div>
              <div id="headSearchIcon" className="p-1 mt-1"><FaSearch/></div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Header