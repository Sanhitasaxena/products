import React from "react";
import logo from "../images/logo.jpg"
import {FaSearch} from "react-icons/fa"
import {Link} from "react-router-dom"


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
                className="m-2"
              />
            </div>
            <div>
              <ul id="headHeaderContentList" className="d-flex">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>About Us</li>
                <li>
                  <a href="#footerMainContainer">Contact us</a>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
              {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="https://getbootstrap.com/docs/4.0/components/dropdowns/">
                  Action
                </a>
                <a className="dropdown-item" href="https://getbootstrap.com/docs/4.0/components/dropdowns/">
                  Another action
                </a>
                <a className="dropdown-item" href="https://getbootstrap.com/docs/4.0/components/dropdowns/">
                  Something else here
                </a>
              </div> */}
            </div>
            <div
              className="d-flex flex-row text-center mt-4 p-2"
              id="headSearchBar"
            >
              <div className="p-1">
                <input
                  type="search"
                  placeholder="Search.."
                  id="headSearchInput"
                />
              </div>
              <div id="headSearchIcon" className="p-1 mt-1">
                <FaSearch />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Header