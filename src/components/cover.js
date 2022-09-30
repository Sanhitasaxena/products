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
            <div class="text">Login Form</div>
            <form action="#">
              <div class="field">
                <span><MdEmail /></span>
                <input type="text" placeholder="Email Id" required />
              </div>

              <div class="field">
                <span><FaLock /></span>
                <input type="password" placeholder="Password" />
              </div>
            </form>
            <button id="coverButton">Log in</button>
            <div class="or">Or</div>
            <div class="icon-button">
              <span class="facebook">
                <ImFacebook2/> Facebook
              </span>

              <span>
                <FaGoogle/> Google
              </span>
            </div>
          </div> 
        </div>
      </div>
      {/* <div id="wave" className="container-fluid">
          
      </div> */}
    </>
  );
};

export default Cover;
