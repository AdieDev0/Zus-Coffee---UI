import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <div className="bg-blue-100">
        <h1>Follow us on</h1>
        <div className="flex justify-center gap-4 mt-5">
          <FaSquareFacebook />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
