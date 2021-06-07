import React from "react";
import "../../App.css";
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import {FcCustomerSupport}from 'react-icons/fc';
import {FaChild}from 'react-icons/fa';
import {RiMentalHealthFill}from 'react-icons/ri';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';



export default function Helpline() {
  return (
    <>
      
      <div className="Helpline">
        Helpline
        <div className='Helplineicons'>
         <li><a href="tel:91-11-2398046"><PhoneInTalkIcon /><div>Number:91-11-2398046</div> </a></li>
         <li><a href="tel:1075"><FcCustomerSupport  size={20}/><div>Health Ministry:1075</div></a></li>
         <li><a href="tel:1098"><FaChild size={25}/><div>Child:1098</div></a></li>
         <li><a href="tel:08046110007"><RiMentalHealthFill size={20}/><div>Mental Health::08046110007</div></a></li>
         <li><a href="tel:14567"><AccessibleForwardIcon/><div>Senior Citizens:14567</div></a></li>
        </div>
      </div>
    </>
  );
}
