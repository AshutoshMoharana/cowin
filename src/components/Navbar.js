import React from "react";
import '../App.css';
//icons of right-top-navbar/left navbar imported here-------
import {FaQuestionCircle} from "react-icons/fa";
import {MdDashboard}from 'react-icons/md';
import {AiFillApi}from 'react-icons/ai';
import {AiTwotoneLock}from 'react-icons/ai';
import {GiLoveInjection}from 'react-icons/gi';
import {FaCertificate}from 'react-icons/fa';
import logo from '../fonts/logo.png';
//--------------------------------------ends here
function Navbar() {
  return (
    <>
      <div className="Navbarcontainer">
        <div className="leftnav"> <img src={logo} alt='logo'/><p>Ministry of Health and Family Welfare</p></div>
        <div className="rightnav">
          <li><a href="#Verify Certificate"><FaCertificate/>Verify Certificate</a></li>
          <li><a href="#Vaccinator"><GiLoveInjection/>Vaccinator</a></li>
          <li><a href="#Department Login"><AiTwotoneLock/>Department Login</a></li>
          <li><a href="#Open APIs"><AiFillApi/>Open APIs</a></li>
          <li><a href="#DashBoard"><MdDashboard/>DashBoard</a></li>
          <li><a href="#FAQ"><FaQuestionCircle /> FAQ</a></li>
        </div>
      </div>

      
    </>
  );
}

export default Navbar;
