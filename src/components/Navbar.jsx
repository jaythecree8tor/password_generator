import React from "react";
import { logo } from "../assets";
import {BsGithub} from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className=" flex justify-between items-center fixed inset-x-0 bg-[#00000000] py-6 px-6 w-full z-50">
      <img src={logo} alt="logo" title="home" className="w-[140px] h-[40px]"/>
     <a href="https://github.com/jaythecree8tor/password_generator" target="_blank" rel="noopener noreferrer"><BsGithub color="#409e8d" size={25} className='hover:opacity-30  transition-all duration-300 cursor-pointer'/></a> 
    </div>
  );
};

export default Navbar;
