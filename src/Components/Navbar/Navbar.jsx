
import React, { useState } from "react";

import { AiOutlineMobile, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Button, ButtonGroup, Text } from "@chakra-ui/react";

import { BiHomeAlt, BiCategory, BiCart } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { Show, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

import { MdSearch } from "react-icons/md";
import { capitalize } from "lodash";


function Navbar({ name }) {
 
  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("Log Out Seccussfull");
      })
      .catch((err) => {
        alert("Log Out Error");
      });
  };

  
  

  return (
    <div className="nav_primary">
      <Show breakpoint="(min-width: 1186px)">
        {/* <div className="nav_top">
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
        </div> */}
        <div className="nav">
          <div className="nav_inner">
            <Link to="/">
            <div className="nav_image">
              <img src={logo} alt="" />
              <Link to={"/"} > <h2>MegaDeals</h2> </Link>
            </div>
            </Link>

            <div className="nav_search">

              <div className="input-group border-0.5">


              {/* <Input
                type="text"
                className="form-control"
                background={'white'}
                width={[20,50,100]}
                placeholder="Search product & brand"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                
              /> */}
              {/* <Button
                className="btn btn-outline-secondary d-flex center"
                type="button"
                id="button-addon2"
              >

                {/* <MdSearch/> */}

                
              

          

                {/* <p>Search</p> */}
            

          
              
           


            </div>

              {/* <Search /> */}
            </div>

            <div className="nav_cart">
              <div className="cart">

                {/* <p>Cart</p> */}
                {/* <BsCart className="icon"/> */}

               

               


                <Link to={'/cart'}>
                <AiOutlineShoppingCart className="icon" cursor='pointer'/>
                </Link>


              </div>
              <h3>
                {name ? (
                  <div className="logout_btn">
                   <span> Welcome -{capitalize(name)}</span> <button onClick={logOut}>LogOut</button>
                  </div>
                ) : (
                  <Link to={"/login"}>
                    <div className="nav_login">
                      {/* <p>Log In</p> */}
                      <CgProfile className="icon" />
                      
                    </div>
                  </Link>
                )}
              </h3>
            </div>
          </div>
        </div>
      </Show>

      <Show breakpoint="(max-width: 1186px)">
        <div className="mb_nav">
          <div>
            <img src={logo} alt="logo" />
            <p>Magadeal</p>
          </div>
          <div>
            <Input focusBorderColor="none" placeholder="Search for" />
          </div>
        </div>

        <hr />
        <div className="mb_downNav">
          <button className="btn">
            <Text>
              <BiHomeAlt className="icon" />
            </Text>
            <p>Home</p>
          </button>

          <button className="btn">
            <Text>
              <BiCategory className="icon" />
            </Text>
            <p>Category</p>
          </button>

          <button className="btn">
            <Text>
              <BiCart className="icon" />
            </Text>
            <p>Cart</p>
          </button>

          <button className="btn">
            <Text>
              <AiOutlineHeart className="icon" />
            </Text>
            <p>Wishlist</p>
          </button>
          <button className="btn">
          <Link to={"/login"}>
            <Text>
              <CgProfile className="icon" />
            </Text>
            <p>Profile</p>
          </Link>
          </button>
        </div>
      </Show>
    </div>
  );
}

export default Navbar;
