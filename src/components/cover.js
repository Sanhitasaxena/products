import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import {ImFacebook2} from "react-icons/im"
import {FaGoogle} from "react-icons/fa"

const Cover = () => {
  return (
    <>
      <div id="coverMainContainer" className="container-fluid">
        <div id="coverSignIn">
          <div id="signIn">
            {" "}
            {/* content */}
            <div className="text">Login Form</div>
            <form action="#">
              <div className="field">
                <span><MdEmail /></span>
                <input type="text" placeholder="Email Id" required />
              </div>

              <div className="field">
                <span><FaLock /></span>
                <input type="password" placeholder="Password" />
              </div>
            </form>
            <button id="coverButton">Log in</button>
            <div className="or">Or</div>
            <div className="icon-button">
              <span className="facebook">
                <ImFacebook2/> Facebook
              </span>

              <span>
                <FaGoogle/> Google
              </span>
            </div>
          </div> 
        </div>
      </div>
     
    </>
  );
};

export default Cover;
