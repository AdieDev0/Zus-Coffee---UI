import React from "react";
import zus from "../assets/zus_logo.png";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-white font-Montserrat flex justify-between items-center px-40 py-5 shadow-md">
      <div className="flex gap-5 ">
        <button className="text-xs font-medium">OUR STORY</button>
        <button className="text-xs font-medium">MENU</button>
        <button className="text-xs font-medium">ZUS APP</button>
        <button className="text-xs font-medium">CAREERS</button>
      </div>

      <div>
        <img src={zus} alt="" className="size-14" />
      </div>

      <div className="flex gap-5 items-center">
        <button className="text-xs font-medium">FIND A STORE</button>
        <button className="text-xs font-medium">CONTACT US</button>
        <div className="search-bar flex gap-3 items-center">
          <IoSearch className="text-zusTet" />
          <input type="text" placeholder="SEARCH..." className="text-xs" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
