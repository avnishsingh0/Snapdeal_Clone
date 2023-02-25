import Carousel from "react-bootstrap/Carousel";
import {HStack, Stack,Image, Text, Heading} from "@chakra-ui/react"
import styles from "./Navbar.module.css";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
import { Link } from "react-router-dom";
import HomeCarousel from "./HomeCarousel";
import HomeCarousel1 from "./HomeCarousel1";
import HomeCarousel2 from "./HomeCarousel2";
 const LandingPage = () => {



  return (
    <div>
      {/* <!-- ------mainbody------- --> */}
      
      <div className={styles.container}>
        <div className={styles.leftside}   >
          <ul>
            <div class="topCat">TOP CATEGORIES</div>
            <li className={styles.list1}>
              <img
                src="https://n3.sdlcdn.com/imgs/d/h/3/Discount_Right_icon-f5105.png"
                alt=""
              />
              <span style={{ cursor: "pointer" }}>All Offers</span>

              <div className={styles.sublists}>
                <div className={styles.listitems}>
                  {/* <!-- 1st row --> */}
                  <div>
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                    <p>Coffee & Tea Makers</p>
                    <p>Hair Dryers</p>
                    <p>Air Conditioners</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                  </div>
                  {/* <!-- 2nd row --> */}
                  <div>
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                    <p>Coffee & Tea Makers</p>
                    <p>Hair Dryers</p>
                  </div>
                  {/* <!-- 3rd row --> */}
                  <div>
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                    <p>Coffee & Tea Makers</p>
                    <p>Hair Dryers</p>
                    <p>Air Conditioners</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                  </div>

                  {/* <!-- ---4th row --> */}

                  <img 
                    src="https://n4.sdlcdn.com/imgs/i/f/f/BlockbusterDeals-cb277.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li className={styles.list2} style={{ cursor: "pointer" }}>
              <img
                src="https://i1.sdlcdn.com/img/leftnavicon09/30x30mobile2.png"
                alt=""
              />
              <span>Mobile & Tablets</span>
              <div className={styles.sublists}>
                <div className={styles.listitems}>
                  {/* <!-- 1st row --> */}
                  <div>
                    <h4>MOBILE PHONES</h4>
                    <a href="/">
                      {" "}
                      <p>PowerBanks</p>
                    </a>
                    <p>Feature Phones</p>

                    <hr />
                    <h4>MOBILE CASES & COVERS</h4>
                    <p>New Launches Covers</p>
                    <p>Printed Back Covers</p>
                    <p>Plain Back Covers</p>
                    <p>Flip Covers</p>
                    <p>Premium Covers</p>

                    <hr />
                    <h4>TOP BRANDS</h4>
                    <p>Panasonic</p>
                    <p>Samsung</p>
                    <p>Apple</p>
                    <p>Redmi</p>
                  </div>
                  {/* <!-- 2nd row --> */}
                  <div>
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                    <p>Coffee & Tea Makers</p>
                    <p>Hair Dryers</p>
                  </div>
                  {/* <!-- 3rd row --> */}
                  <div>
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                    <p>Coffee & Tea Makers</p>
                    <p>Hair Dryers</p>
                    <p>Air Conditioners</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                  </div>

                  {/* <!-- ---4th row --> */}

                  <img
                    src="https://n2.sdlcdn.com/imgs/i/7/q/Mobiles_17jan-197ca.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li className={styles.list3} style={{ cursor: "pointer" }}>
              <img
                src="https://n2.sdlcdn.com/imgs/d/2/c/Electronic-6212c.png"
                alt=""
              />
              <span>Electronics</span>
              <div className={styles.sublists}>
                <div className={styles.listitems}>
                  {/* <!-- 1st row --> */}
                  <div>
                    <h4>TELEVISIONS</h4>
                    <p>Top Selling TVs</p>
                    <p>Full HD Tvs</p>
                    <p>Smart Tvs</p>
                    <p>Ultra HD Tvs</p>
                    <p>DTH Services</p>

                    <hr />
                    <h4>Speakers</h4>
                    <p>Home Audio Systems</p>
                    <p>Bluetooth Speakers</p>
                    <p>2.0 & 2.1 Speakers</p>

                    <hr />
                    <h4>Headphones & Earphones</h4>
                    <p>Headphones</p>
                    <p>Earphones</p>
                    <p>Headsets with mic</p>
                    <p>iPods & MP# Players</p>
                  </div>
                  {/* <!-- 2nd row --> */}
                  <div>
                    <h4>Headphones & Earphones</h4>
                    <p>Headphones</p>
                    <p>Earphones</p>
                    <p>Headsets with mic</p>
                    <p>iPods & MP# Players</p>
                    <hr />
                    <h4>Speakers</h4>
                    <p>Home Audio Systems</p>
                    <p>Bluetooth Speakers</p>
                    <p>2.0 & 2.1 Speakers</p>
                    <p>Full HD Tvs</p>
                    <p>Smart Tvs</p>
                    <p>Ultra HD Tvs</p>
                    <p>DTH Services</p>
                  </div>
                  {/* <!-- 3rd row --> */}
                  <div>
                    <h4>TELEVISIONS</h4>
                    <p>Top Selling TVs</p>
                    <p>Full HD Tvs</p>
                    <p>Smart Tvs</p>
                    <p>Ultra HD Tvs</p>
                    <p>DTH Services</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                  </div>

                  {/* <!-- ---4th row --> */}

                  <img
                    src="https://n4.sdlcdn.com/imgs/i/1/o/electronics-7e68c.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li className={styles.list4} style={{ cursor: "pointer" }}>
              <img
                src="https://n2.sdlcdn.com/imgs/d/2/c/ComputerGaming-a02cf.png"
                alt=""
              />
              <span>Computers & Gaming</span>
              <div className={styles.sublists}>
                <div className={styles.listitems}>
                  {/* <!-- 1st row --> */}
                  <div>
                    <h4 style={{ marginRight: "15px" }}>LAPTOPS</h4>
                    <p>Core i3 Laptops</p>
                    <p>Core i5 Laptops</p>
                    <p>Budget Laptops</p>
                    <p>Thin & Light Laptops</p>

                    <hr />
                    <h4>Printers & INKS</h4>
                    <p>Printers</p>
                    <p>Scanners</p>
                    <p>Inks & Toners</p>

                    <hr />
                    <h4>STORAGES</h4>
                    <p>External Hard Drives</p>
                    <p>Memory Cards</p>
                    <p>Pen Drives</p>
                    <p>SSD</p>
                  </div>
                  {/* <!-- 2nd row --> */}
                  <div>
                    <h4>Headphones & Earphones</h4>
                    <p>Headphones</p>
                    <p>Earphones</p>
                    <p>Headsets with mic</p>
                    <p>iPods & MP# Players</p>
                    <hr />
                    <h4>Speakers</h4>
                    <p>Home Audio Systems</p>
                    <p>Bluetooth Speakers</p>
                    <p>2.0 & 2.1 Speakers</p>
                    <p>Full HD Tvs</p>
                    <p>Smart Tvs</p>
                    <p>Ultra HD Tvs</p>
                    <p>DTH Services</p>
                  </div>
                  {/* <!-- 3rd row --> */}
                  <div>
                    <h4>PRinters & INKS</h4>
                    <p>Printers</p>
                    <p>Scanners</p>
                    <p>Inks & Toners</p>
                    <hr />
                    <h4>STORAGES</h4>
                    <p>External Hard Drives</p>
                    <p>Memory Cards</p>
                    <p>Pen Drives</p>
                    <p>SSD</p>
                  </div>

                  {/* <!-- ---4th row --> */}

                  <img
                    style={{ marginLeft: "15px" }}
                    src="https://n1.sdlcdn.com/imgs/i/1/r/Laptopacc_28oct-581f8.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li className={styles.list5} style={{ cursor: "pointer" }}>
              <img
                src="https://n2.sdlcdn.com/imgs/c/0/x/Homekitchenfurnishing-3eda1.jpg"
                alt=""
              />
              <span>Home & Kitchen</span>

              <div className={styles.sublists}>
                <div className={styles.listitems}>
                  {/* <!-- 1st row --> */}
                  <div>
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                    <p>Coffee & Tea Makers</p>
                    <p>Hair Dryers</p>
                    <p>Air Conditioners</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                  </div>
                  {/* <!-- 2nd row --> */}
                  <div>
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                    <p>Coffee & Tea Makers</p>
                    <p>Hair Dryers</p>
                  </div>
                  {/* <!-- 3rd row --> */}
                  <div>
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                    <p>Coffee & Tea Makers</p>
                    <p>Hair Dryers</p>
                    <p>Air Conditioners</p>
                    <hr />
                    <h4>AUTUMN/WINTER SPECIAL</h4>
                    <p>Air Purifiers Geysers Socks</p>
                    <p>Geysers</p>
                    <p>Socks</p>
                    <p>Air Fresheners</p>
                    <p>Blankets & Comforters</p>
                  </div>

                  {/* <!-- ---4th row --> */}
                  {/* <div id="listimg"> */}
                  <img
                    src="https://n4.sdlcdn.com/imgs/i/f/f/BlockbusterDeals-cb277.jpg"
                    alt=""
                  />
                  {/* </div> */}
                </div>
              </div>
            </li>
            <li className={styles.moreCat}>
              <p>MORE CATEGORIES</p>
            </li>
            <div className={styles.moreli} style={{ cursor: "pointer" }}>
              <li>
                <span>
                  <Link to={"/product"}>
                     Men's Fashion
                  </Link>
                  </span>
              </li>
              <li>
                <span>
                  <Link to={"/products"}>
                  Beauty and Health
                  </Link>           
                  </span>
              </li>
              <li>
                <span>Toys,kids Fashion & More</span>
              </li>
              <li>
                <span> Women's Fashion</span>
              </li>
              <li>
                <span>Sports,Fitness & Outdoor</span>
              </li>
              <li>
                <span>Car & Motorbike</span>
              </li>
              <li>
                <span>Hobbies</span>
              </li>
              <li>
                <span>Books,Media & Music</span>
              </li>
              <li>
                <a href="">See All Categories</a>
              </li>
            </div>
            <li className={styles.moreCat}>
              <p>TRENDING SEARCHES</p>
            </li>
            <div className={styles.moreli} style={{ cursor: "pointer" }}>
              <li>
                <span>
                  {" "}
                  <i class="fas fa-search"></i> Hair Straightener
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <i class="fas fa-search"></i> Makeup Kit
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <i class="fas fa-search"></i> Hookah
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <i class="fas fa-search"></i> Sling Bag
                </span>
              </li>
              <li>
                <span> 
                  {" "}
                  <i class="fas fa-search"></i> Bluetooth Speaker
                </span>
              </li>
            </div>
          </ul>
        </div>
        <div className={styles.barcode}>
          
          <div className={styles.bartext}>
            <p>Enjoy Convenient Order Tracking</p>
            <h3>Scan to download app</h3>
          </div>
        </div>
        <div className={styles.rightside}>
          {/* Slider starts here */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://n3.sdlcdn.com/imgs/j/8/e/Health_ID_Snapdeal_ABDM_1300X410-6c79d.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://n4.sdlcdn.com/imgs/k/k/z/web_banner_07-092e2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://n3.sdlcdn.com/imgs/k/f/v/12_april_WB_Breezy_Dresses_WEB-5febf.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Festive_kurta_sets_WEB_1-9d9b7.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Kitchen_Essentials_WEB-cca82.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          {/* <!-- ---cardslider-- --> */}
          <div className={styles.Container}>
            <h2 style={{letterSpacing:"2px",marginTop:"25px",padding:"5px"}}>RECENTLY VIEWED PRODUCTS</h2>
            <Link to={'/product'}>
            <HomeCarousel/>
            </Link>
          
            <Link to={'/product'}>
            <HomeCarousel1/>
            </Link>

            <h2 style={{letterSpacing:"2px",marginTop:"25px",padding:"5px"}}>POPULAR PRODUCTS</h2>
           
            <Link to={'/product'}>
            {/* <HomeCarousel2/> */}
            </Link>

          </div>
        
          
        </div>
      </div>
      
      <div className={styles.downloadsnap}>
        <img src="https://i1.sdlcdn.com/img/appScreenshot@1x.png" alt="" />
        <div className={styles.snapText}>
          <h5>Download Snapdeal App Now</h5>
          <p>Fast, Simple & Delightful.</p>
          <h4>All it takes is 30 seconds to Download.</h4>
         
        </div>
        <img
          className={styles.leaves}
          src="https://i1.sdlcdn.com/img/leaves1x.png"
          alt=""
        />
      </div>
     
    </div>
  );
};
export default LandingPage;