import React from "react";
import zus from "../assets/zus_logo.png";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div>
        <button>OUR STORY</button>
        <button>MENU</button>
        <button>ZUS APP</button>
        <button>CAREERS</button>
      </div>

      <div>
        <img src={zus} alt="" />
      </div>

      <div>
        <button>FIND A STORE</button>
        <button>CONTACT US</button>
        <input type="text" placeholder="SEARCH" />
      </div>
    </div>
  );
};

export default Navbar;
