

import { useState } from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router-dom';

const Headers=()=>{

  const[btnToggle,setBtnToggle]=useState(true);

  function clickedOnInto(){
    setBtnToggle(preVal=>!preVal);
  }


    return(
      <div className='Header-div'>
        <img src={LOGO_URL}></img>
        <h1>Welcome Home,food is waiting for you❤️</h1>
        <ul>
          <Link to="/" className="link-id"><li>Home</li></Link>
          <li>Cart</li>
          <li><Link to="/contactus" className="link-id">Contact Us</Link></li>
          <li><Link to="/about" className="link-id">About Us</Link></li>
          <button className="btn-toggle" onClick={clickedOnInto}>{btnToggle?"LOGOUT":"LOGIN"}</button>
        </ul>
       
      </div>
    )
  }

  export default Headers;