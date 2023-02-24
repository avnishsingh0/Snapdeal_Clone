import React, { useState } from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdSearch } from "react-icons/md";


import { BiHomeAlt,BiCategory,BiCart } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

import "./Navbar.scss";
import logo from "../../Assets/logo.png";
import { Show, Input, Flex } from '@chakra-ui/react'

function Navbar() {
//   var header = document.getElementsByClassName("mb_downNav");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }
  return (
    <div className="nav_primary">
      <Show breakpoint='(min-width: 1186px)'>
      <div className="nav_top">
        <div>
          <p>Brand Waali Quality, Bazaar Waali Deal!</p>
        </div>
        <div>
          <a href="/">Impact@Snapdeal</a>
          <a href="/">Gift Cards</a>
          <a href="/">Help Center</a>
          <a href="/">Sell On Snapdeal</a>
          <a href="/">
            <AiOutlineMobile /> Download Now
          </a>
        </div>
      </div>
      <div className="nav">
        <div className="nav_inner">

          <div className="nav_image">
            <img src={logo} alt="" />
            <h2>Magadeal</h2>
          </div>

          <div className="nav_search">
            <div className="input-group border-0.5">
              <input
                type="text"
                className="form-control"
                
                placeholder="Search product & brand"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary d-flex center"
                type="button"
                id="button-addon2"
              >
                <MdSearch/>
                <p>Search</p>
              </button>
            </div>
          </div>

          <div className="nav_cart">
            <div className="cart">
                <p>Cart</p>
                <icon>
                <BsCart/>
                </icon>
            </div>

            <div className="nav_login">
                <p>Sign In</p>
                <icon>
                <CgProfile/>
                </icon>
            </div>
          </div>


        </div>
      </div>
      </Show>

      <Show breakpoint='(max-width: 1186px)'>
        <div className="mb_nav">
          <div>
            <img src={logo} alt="logo" />
            <p>Magadeal</p>
          </div>
          <div><Input focusBorderColor='none'  placeholder="Search for"/></div>
        </div>
        

          <hr />
        <div className="mb_downNav">
          <button className="btn">
            <icon>
            <BiHomeAlt className="icon"/>
            </icon>
            <p>Home</p>
          </button>
      
      
          <button className="btn">
            <icon>
            <BiCategory className="icon"/>
            </icon>
            <p>Category</p>
          </button>
      
      
          <button className="btn">
            <icon>
            <BiCart className="icon"/>
            </icon>
            <p>Cart</p>
          </button>
      
      
          <button className="btn">
            <icon>
            <AiOutlineHeart className="icon"/>
            </icon>
            <p>Wishlist</p>
          </button>
      
      
          <button className="btn">
            <icon>
            <CgProfile className="icon"/>
            </icon>
            <p>Profile</p>
          </button>
      
      
      

        </div>
      </Show>
    </div>
  );
}

export default Navbar;
