import React, { useState } from "react";
import zus from "../assets/zus_logo.png";
import { IoSearch, IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="bg-white font-Montserrat flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-48 py-4 md:py-7 shadow-md relative">
        {/* Logo - positioned differently based on screen size */}
        <div className="md:hidden">
          <img src={zus} alt="ZUS logo" className="size-10 curso-pointer" />
        </div>

        {/* Tablet (md) and Desktop (lg+): Left Links */}
        <div className="hidden md:flex gap-6 mr-auto">
          <button className="text-xs font-medium cursor-pointer">
            OUR STORY
          </button>
          <button className="text-xs font-medium cursor-pointer">MENU</button>
          <button className="text-xs font-medium cursor-pointer">
            ZUS APP
          </button>
          <button className="text-xs font-medium cursor-pointer">
            CAREERS
          </button>
        </div>

        {/* Centered Logo for Tablet and Desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <img src={zus} alt="ZUS logo" className="size-12 cursor-pointer" />
        </div>

        {/* Right Side Elements */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          {/* Tablet and Desktop Right Links */}
          <div className="hidden md:flex gap-5 items-center">
            <button className="text-xs font-medium cursor-pointer">
              FIND A STORE
            </button>
            <button className="text-xs font-medium cursor-pointer">
              CONTACT US
            </button>
          </div>
          {/* Search Bar - visible on all screens */}
          <div className="search-bar flex gap-1 sm:gap-2 md:gap-3 items-center border border-zusPrimary rounded-full px-2 sm:px-3 py-1 sm:py-2 bg-white">
            <IoSearch className="text-zusPrimary text-sm sm:text-base" />
            <input
              type="text"
              placeholder="SEARCH..."
              className="text-xs sm:text-sm uppercase border-none outline-none w-20 sm:w-32 md:w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zusPrimary text-2xl ml-2"
            onClick={toggleSidebar}
          >
            <IoMenu />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleSidebar}
              className="text-zusPrimary text-2xl"
            >
              <IoClose />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <button className="text-lg font-medium cursor-pointer text-left">
              OUR STORY
            </button>
            <button className="text-lg font-medium cursor-pointer text-left">
              MENU
            </button>
            <button className="text-lg font-medium cursor-pointer text-left">
              ZUS APP
            </button>
            <button className="text-lg font-medium cursor-pointer text-left">
              CAREERS
            </button>
            <button className="text-lg font-medium cursor-pointer text-left">
              FIND A STORE
            </button>
            <button className="text-lg font-medium cursor-pointer text-left">
              CONTACT US
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
