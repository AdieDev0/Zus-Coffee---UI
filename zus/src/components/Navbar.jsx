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
      <div className="bg-white font-Montserrat flex justify-between items-center px-4 md:px-12 lg:px-48 py-4 md:py-8 shadow-md">
        {/* Logo - always on the left */}
        <div className="flex-shrink-0">
          <img src={zus} alt="ZUS logo" className="size-10 md:size-14" />
        </div>

        {/* Desktop Navigation Links - hidden on mobile */}
        <div className="hidden lg:flex gap-5 mx-auto">
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

        {/* Right side elements */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Search bar - always visible */}
          <div className="search-bar flex gap-1 md:gap-3 items-center border border-zusPrimary rounded-full px-2 md:px-3 py-1 md:py-2 bg-white">
            <IoSearch className="text-zusPrimary text-sm md:text-base" />
            <input
              type="text"
              placeholder="SEARCH..."
              className="text-sm md:text-xs uppercase border-none outline-none w-20 md:w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Desktop right side links - hidden on mobile */}
          <div className="hidden lg:flex gap-5 items-center">
            <button className="text-xs font-medium cursor-pointer">
              FIND A STORE
            </button>
            <button className="text-xs font-medium cursor-pointer">
              CONTACT US
            </button>
          </div>

          {/* Mobile menu button - hidden on desktop */}
          <button
            className="lg:hidden text-zusPrimary text-2xl ml-2"
            onClick={toggleSidebar}
          >
            <IoMenu />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleSidebar}
              className="text-zusPrimary text-2xl"
            >
              <IoClose />
            </button>
          </div>

          {/* Sidebar Navigation Links */}
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
