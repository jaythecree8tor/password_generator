import React from 'react'
import {FaRegCopyright} from 'react-icons/fa'
const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className=' absolute bottom-0 py-6'>
       <p className=' text-[#ffffff] flex items-center max-[500px]:text-[10px]'>Copyright &nbsp; <FaRegCopyright/> &nbsp; {year} developed by &nbsp; <a href="https://github.com/jaythecree8tor" target="_blank" rel="noopener noreferrer" className=' text-[#409e8d]'>Jordan Femi-Bella</a> </p>
    </div>
  )
}

export default Footer
