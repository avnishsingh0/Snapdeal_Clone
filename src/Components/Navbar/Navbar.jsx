import React from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { GrCart } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdSearch } from "react-icons/md";
import "./Navbar.scss";
import logo from "../../Assets/logo.png";
function Navbar() {
  return (
    <div className="nav_primary">
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
                <GrCart/>
            </div>

            <div className="nav_login">
                <p>Sign In</p>
                <CgProfile/>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Navbar;
