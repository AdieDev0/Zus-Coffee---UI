import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <div className="bg-blue-50 py-10">
        <h1 className="text-center text-lg font-bold text-black/80">
          Follow us on
        </h1>
        <div className="flex justify-center gap-4 mt-5">
          <FaInstagram className="size-7 text-orange-600 hover:scale-110 duration-200 cursor-pointer" />
          <FaSquareFacebook className="size-7 text-blue-600 hover:scale-110 duration-200 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
