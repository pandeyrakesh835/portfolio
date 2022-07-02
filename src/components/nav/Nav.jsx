import React from 'react'
import { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
// import { FaHome } from "react-icons/fa";



import './Nav.css'
const Nav = () => {
  const [activeNav , setActiveNav] =useState("#")
  return (
    <nav>
      <a href='#home' className={activeNav==='#' ? "active": ""}><FaHome/></a>
      <a href='#about' onClick={()=>setActiveNav("#about")}  className={activeNav==='#about' ? "active": ""}><FaUserAlt/></a>
      <a href='#experiance' onClick={()=>setActiveNav("#experiance")}  className={activeNav==='#experiance' ? "active": ""}><FaRegAddressBook/></a>
      <a href='#service' onClick={()=>setActiveNav("#service")}  className={activeNav==='#service' ? "active": ""}><FaServicestack/></a>
      <a href='#contact' onClick={()=>setActiveNav("#contact")}  className={activeNav==='#contact' ? "active": ""}><FaFacebookMessenger/></a>
     
    </nav>
  )
}

export default Nav