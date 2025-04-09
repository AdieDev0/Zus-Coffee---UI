import React from "react";
import zus from "../assets/zus_logo.png";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-white font-Montserrat relative flex justify-between items-center px-48 py-8 shadow-md">
      <div className="flex gap-5 mr-auto">
        <button className="text-xs font-medium cursor-pointer">
          OUR STORY
        </button>
        <button className="text-xs font-medium cursor-pointer">MENU</button>
        <button className="text-xs font-medium cursor-pointer">ZUS APP</button>
        <button className="text-xs font-medium cursor-pointer">CAREERS</button>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src={zus} alt="ZUS logo" className="size-14" />
      </div>

      <div className="flex gap-5 items-center">
        <button className="text-xs font-medium cursor-pointer">
          FIND A STORE
        </button>
        <button className="text-xs font-medium cursor-pointer">
          CONTACT US
        </button>
        <div className="search-bar flex gap-3 items-center border border-zusPrimary rounded-full px-3 py-2 bg-white">
          <IoSearch className="text-zusPrimary" />
          <input
            type="text"
            placeholder="SEARCH..."
            className="text-xs uppercase border-none outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
