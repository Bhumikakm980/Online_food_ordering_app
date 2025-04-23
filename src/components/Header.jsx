

import {LOGO_URL} from '../utils/constants';

const Headers=()=>{
    return(
      <div className='Header-div'>
        <img src={LOGO_URL}></img>
        <h1>Welcome Home,food is waiting for you❤️</h1>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
    )
  }

  export default Headers;