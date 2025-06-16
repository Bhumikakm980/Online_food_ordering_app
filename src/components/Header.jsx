

import { useState,useContext } from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router-dom';
import userContext from '../utils/userContext';
import { useSelector } from 'react-redux';



const Headers=()=>{

  const[btnToggle,setBtnToggle]=useState(true);

  const loggedInUser=useContext(userContext);

  console.log(loggedInUser);

  // sunscribing to store
  const showCart=useSelector((store)=>store.cart.items);

  console.log(showCart);

  function clickedOnInto(){
    setBtnToggle(preVal=>!preVal);
  }


    return(
      <div className='Header-div'>
        <img src={LOGO_URL}></img>
        <h1 className='font-bold text-3xl mt-3'>Welcome Home {loggedInUser.name}, enjoy your food with us❤️</h1>
        <ul>
          <Link to="/" className="link-id"><li>Home</li></Link>
          <li><Link to="/cart">Cart({showCart.length})</Link></li>
          <li><Link to="/contactus" className="link-id">Contact Us</Link></li>
          <li><Link to="/about" className="link-id">About Us</Link></li>
         
          <button className="btn-toggle" onClick={clickedOnInto}>{btnToggle?"LOGOUT":"LOGIN"}</button>
        </ul>
       
      </div>
    )
  }

  export default Headers;