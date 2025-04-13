import React from "react";
import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import IDK from "../assets/idk.png";

const Footer = () => {
  return (
    <div className="bg-blue-50">
      {/* Social Media Section */}
      <div className="py-10">
        <h1 className="text-center text-lg font-bold text-black/80">
          Follow us on
        </h1>
        <div className="flex justify-center gap-4 mt-5">
          <FaInstagram className="size-7 text-orange-600 hover:scale-110 duration-200 cursor-pointer" />
          <FaSquareFacebook className="size-7 text-blue-600 hover:scale-110 duration-200 cursor-pointer" />
        </div>
      </div>

      {/* Footer Info Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 bg-white px-6 md:px-20 py-10">
        {/* Left Info */}
        <div className="text-center md:text-left text-sm text-gray-700 space-y-2 font-Montserrat">
          <h3 className="font-semibold">ZUSPRESSO PHILIPPINES INC.</h3>
          <h3>Company registration no: 635-381-780-00000</h3>
          <h3 className="text-xs text-gray-500">COPYRIGHT 2025 © ZUS COFFEE</h3>
        </div>

        {/* Right Info */}
        <div className="flex flex-col items-center md:items-end space-y-2 text-sm">
          <img src={IDK} alt="ZUS Logo" className="mb-2" />
          <h3 className="cursor-pointer hover:text-zusPrimary duration-150">
            Privacy Policy
          </h3>
          <h3 className="cursor-pointer hover:text-zusPrimary duration-150">
            Terms & Conditions
          </h3>
          <h3 className="cursor-pointer hover:text-zusPrimary duration-150 text-center md:text-right">
            Anti-Bribery Corruption Policy
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
