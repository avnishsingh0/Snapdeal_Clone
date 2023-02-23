import React, { useState } from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdSearch } from "react-icons/md";
import "./Navbar.scss";
import logo from "../../Assets/logo.png";
import { Show, Hide } from '@chakra-ui/react'

function Navbar() {
  const [sticky,setSticky]  = useState(false)
  let handelScroll = () => {
    
  }
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
      <div className="nav" onScroll={handelScroll}>
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


    </div>
  );
}

export default Navbar;
