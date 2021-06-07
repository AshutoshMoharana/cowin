import React from 'react';
import {RiDashboardFill} from "react-icons/ri";
import {GiLoveInjection}from 'react-icons/gi';
import {AiFillApi}from 'react-icons/ai';



export default function Section5(){
    return(<> <div className='section5'>
        <div className='list5'>
        <li id='first'><RiDashboardFill size='35px'/><p>2285.34+Lakh <p>Total vaccination</p></p></li>
        <li id='second'><GiLoveInjection size='35px'/><p>1837.39+Lakh <p>Total vaccination</p></p></li>
        <li id='third'><AiFillApi size='35px'/><p>447.95+Lakh <p>Total vaccination</p></p></li>
        <li id='fourth'><RiDashboardFill size='35px'/><p>988.60+Lakh <p>Total vaccination</p></p></li>
        <li id='fifth'><RiDashboardFill size='35px'/><p>848.40+Lakh <p>Total vaccination</p></p></li>
        <li id='sixth'><RiDashboardFill size='35px'/><p>21707+Lakh <p>Total vaccination</p></p></li>
        </div>
        <button id='btns5'>view full report {">"}{">"}</button>
    </div> </>)
}