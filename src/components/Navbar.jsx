import React from "react";
import { logo } from "../assets";
const Navbar = () => {
  return (
    <div className=" flex justify-center items-start fixed inset-x-0 bg-[#00000000] py-6 px-2 w-full z-50">
      <img src={logo} alt="logo" title="home" className="w-[140px] h-[40px]"/>
    </div>
  );
};

export default Navbar;
