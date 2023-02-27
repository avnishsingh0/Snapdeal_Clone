import { ChevronRightIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import styles from "../Components/Product/product.module.css";
import { addCart, getSingleProduct } from "../Redux/ProductReducer/action";
import { Cart } from "./Cart";

const SingleProductPage = () => {
  const product = useSelector((store) => store.ProductReducer.singleProduct);
  const { id } = useParams();
  const dispatch = useDispatch();
  const magImg = product.image;
  
  const toast = useToast();
  const toastIdRef = React.useRef();

  function AddtoCartToast() {
    toastIdRef.current = toast({ description: "Product Added Successfully !" });
  }


  const handletoCart = () => {
    dispatch(addCart(product))
      AddtoCartToast()
    
     
    
      
    
  }

  useEffect(() => {
    dispatch(getSingleProduct(id));
    
  }, []);

  return (
    <>
    <Navbar/>
    <div style={{padding:"50px"}}>
      <div>
        <p className={styles.tag}>
          Home
          <ChevronRightIcon boxSize={5} color={"gray"} />
          Men's Clothing
          <ChevronRightIcon boxSize={5} color={"gray"} />
          Shirts for Men
          <ChevronRightIcon boxSize={5} color={"gray"} />
          {product.title}
        </p>
      </div>
      <div id={styles.singleproduct}>
        <div className={styles.f_2}>
          <div id={styles.magnifyer}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: magImg,
                },
                largeImage: {
                  src: magImg,
                  width: 500,
                  height: 1800,
                },
              }}
            />
            {/* <MagnifierContainer>
              <div className="example-class">
                <MagnifierPreview imageSrc={magImg}/>
              </div>
              <MagnifierZoom
                style={{ height: "400px" }}
                imageSrc={magImg}
              />
            </MagnifierContainer> */}

            {/* <img width={"400px"} src={product.image} alt="" /> */}
          </div>
        </div>
        <div id={styles.s_details}>
          <div id={styles.s_details1}>
            <h1 style={{ fontSize: "35px" }}>{product.title}</h1>
            <p>
              {product.rating === 1 ? (
                <label style={{ color: "#ffc315", fontSize: "25px" }}>
                  {"\u2605 \u2606 \u2606 \u2606 \u2606"}
                </label>
              ) : product.rating === 2 ? (
                <label style={{ color: "#ffc315", fontSize: "25px" }}>
                  {"\u2605 \u2605 \u2606 \u2606 \u2606"}
                </label>
              ) : product.rating === 3 ? (
                <label style={{ color: "#ffc315", fontSize: "25px" }}>
                  {"\u2605 \u2605 \u2605 \u2606 \u2606"}
                </label>
              ) : product.rating === 4 ? (
                <label style={{ color: "#ffc315", fontSize: "25px" }}>
                  {"\u2605 \u2605 \u2605 \u2605 \u2606"}
                </label>
              ) : product.rating === 5 ? (
                <label style={{ color: "#ffc315", fontSize: "15px" }}>
                  {"\u2605 \u2605 \u2605 \u2605 \u2605"}
                </label>
              ) : null}
            </p>
          </div>
          <div className={styles.p}>
            <div id={styles.s_details_2}>
              <h4 style={{ color: "gray" }}>
                MRP{" "}
                <span style={{ textDecoration: "line-through" }}>
                  Rs.{product.oldprice}
                </span>{" "}
                <span>(Inclusive of all taxes) </span>
              </h4>
              <div className={styles.dis}>
                <p style={{ color: "red", fontSize: "45px" }}>
                  Rs. {product.price}
                </p>
                <p>{product.discount}</p>
              </div>
            </div>
            <div>
              <div className={styles.offers}>
                <img
                  style={{ width: "60px", height: "60px" }}
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRqCBE5FQMQsNUm0tX322vBbMhzt8JJ0upuvA2cGUlrqsWfXITn"
                  alt=""
                />
                <p>
                  Apply for a Snapdeal BOB Credit Card & get 5% Unlimited
                  Cashback T&C
                </p>
              </div>
            </div>
          </div>
          <div className={styles.buy_button}>
            <button style={{ backgroundColor: "black",borderRadius:"10px",width:"250px",display:"flex",gap:"10px",justifyContent:"center" }} onClick={handletoCart} >ADD TO CART <Cart/></button>
            <button style={{ backgroundColor: "#e40046",borderRadius:"10px" }}>BUY NOW</button>
          </div>
          <p style={{ color: "gray", textAlign: "center", marginTop: "15px" }}>
            Generally delivered in 5 - 9 days
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SingleProductPage;
