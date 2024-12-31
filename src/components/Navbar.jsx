import React, { useState } from "react";
// react-avatar npm
import Avatar from "react-avatar";

// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMicrophone } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";

function Navbar() {


  return (
    <div className="sticky top-0 flex justify-between px-6 py-3 items-center ">
      {/* Logo Section */}
      <div className="flex items-center space-x-4 cursor-pointer">
        <GiHamburgerMenu size={24} />
        <img src="/youtube_icon.jpg" className="w-10" alt="YouTube Logo" />
      </div>

      {/* Search Section */}
      <div className="flex items-center flex-grow mx-6">
        <input
          type="text"
          className="w-full p-2 rounded-l-full bg-slate-200 placeholder-gray-400 focus:outline-none"
          placeholder="Search"
        />
        <button
          className="bg-slate-200 p-2 rounded-r-full hover:bg-gray-500"
        >
          <CiSearch size={24} />
        </button>
        <div className="ml-2 p-2 rounded-full hover:bg-gray-700">
          <FaMicrophone size={20} />
        </div>
      </div>

      {/* Right Icons Section */}
      <div className="flex items-center gap-4">
        <RiVideoAddLine size={24} className="cursor-pointer hover:text-gray-400" />
        <FiBell size={24} className="cursor-pointer hover:text-gray-400" />
        <Avatar
          src="/profile.jpg"
          size="32"
          round={true}
          alt="Profile"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Navbar;
