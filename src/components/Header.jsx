

import { useState } from 'react';
import {LOGO_URL} from '../utils/constants';

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
          <li>Home</li>
          <li>Cart</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <button className="btn-toggle" onClick={clickedOnInto}>{btnToggle?"LOGOUT":"LOGIN"}</button>
        </ul>
       
      </div>
    )
  }

  export default Headers;