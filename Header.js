import { LOGO_URL } from "../utilis/constants";
import { useState } from "react";
 const Header = () => {


  const [btnNameReact,setBtnNameReact]=useState('login');
  console.log('header renfer')
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
                 btnNameReact==="login"
               ?setBtnNameReact ("logout")
                :setBtnNameReact("login")
              console.log(btnNameReact);
            }}
            >
              {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;
  

  //there r two types of export/import
  //default export/import
  //export default<name of a variable>
  //import component from path

  //named export/import
  //export const component;
  //import{component from path}