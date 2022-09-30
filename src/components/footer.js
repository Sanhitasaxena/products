import React from "react";
import {FaLinkedin} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import {GrInstagram} from "react-icons/gr"

const Footer = () => {
  return (
    <>
      <div id="footerMainContainer" className="container-fluid">
        <div id="footerContactDetails" className="d-flex justify-content-around p-4 m-4">
          <div id=" " className="w-25 p-2">
            <h2>
              <i>WELCOME TO OUR COMMUNITY!</i>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
            
            </p>
          </div>
          <div id="footerEmail" className="mt-5">
            <label>Subscribe to our newsletter</label>
            <div>
              <input placeholder="Type here..." />
              <button>Submit</button>
            </div>
          </div>
          <div id="footerFollowUs" className="mt-5">
            <label>Follow us</label>
            <div>
              <span><FaLinkedin/></span>
              <span><BsTwitter/></span>
              <span><GrInstagram/></span>
            </div>
          </div>
          <div className="mt-5">
            <label>Call us</label>
            <p>09783647233</p>
        
          </div>
        </div>
        <div id="footerCopyWrite"></div>
      </div>
    </>
  );
};

export default Footer;
