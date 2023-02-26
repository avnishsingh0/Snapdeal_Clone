import React, { useEffect, useState } from "react";
import styles from "./product.module.css";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Checkbox,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initalOrder = searchParams.get("order");
  const initialState = searchParams.getAll("rating");
  const [rating, setRating] = useState(initialState || []);
  const [order, setOrder] = useState(initalOrder || "");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let value = e.target.value;

    let newCategory = [...rating];

    if (newCategory.includes(value)) {
      newCategory.splice(newCategory.indexOf(value), 1);
    } else {
      newCategory.push(value);
    }

    setRating(newCategory);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    let param = {
      rating,
    };

    order && (param.order = order);

    setSearchParams(param);
  }, [rating, order]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.men}>
        <h4>Men's Clothing</h4>
        <p>- Shirts for Men</p>
        <p>-Casual Shirts for Men</p>
        <p>-Formal Shirts for Men</p>
      </div>
      <div>
        <h5 style={{margin:"15px",fontWeight:"bolder",padding:"10px",fontSize:"30px"}}>Price</h5>
        <div className={styles.price_slider}>
        <div>
        <input
         
          type="radio"
          value="asc"
          name="order"
          onChange={(e) => handleSort(e)}
          defaultChecked={order === "asc"}
        />
        <label style={{fontSize:"25px",marginLeft:"15px"}}>  Low to High</label>
        <br />
        <input
         
          type="radio"
          value="desc"
          name="order"
          onChange={(e) => handleSort(e)}
          defaultChecked={order === "desc"}
        />
        <label style={{fontSize:"25px",marginLeft:"15px"}}>High to Low</label>
      </div>

          <br />
        </div>
      </div>

      <div>
        <h5 style={{margin:"15px",fontWeight:"bolder",padding:"10px",fontSize:"25px"}} >Customer Rating</h5>
        <div style={{ paddingLeft: "10px" }}>
          <Checkbox
            value={"1"}
            onChange={(e) => handleChange(e)}
            defaultChecked={rating.includes("1")}
            colorScheme="green"
          >
            <label style={{ color: "#ffc315", fontSize: "25px" }}>
              {"\u2605 \u2606 \u2606 \u2606 \u2606"}
            </label>
          </Checkbox>

          <br />
          <Checkbox
            value={"2"}
            onChange={(e) => handleChange(e)}
            defaultChecked={rating.includes("2")}
            colorScheme="green"
          >
            {" "}
            <label style={{ color: "#ffc315", fontSize: "25px" }}>
              {" "}
              {"\u2605 \u2605 \u2606 \u2606 \u2606"}
            </label>
          </Checkbox>

          <br />
          <Checkbox
            value={"3"}
            onChange={(e) => handleChange(e)}
            defaultChecked={rating.includes("3")}
            colorScheme="green"
          >
            <label style={{ color: "#ffc315", fontSize: "25px" }}>
              {"\u2605 \u2605 \u2605 \u2606 \u2606"}
            </label>
          </Checkbox>

          <br />
          <Checkbox
            value={"4"}
            onChange={(e) => handleChange(e)}
            defaultChecked={rating.includes("4")}
            colorScheme="green"
          >
            {" "}
            <label style={{ color: "#ffc315", fontSize: "25px" }}>
              {"\u2605 \u2605 \u2605 \u2605 \u2606"}
            </label>
          </Checkbox>

          <br />
          <Checkbox
            value={"5"}
            onChange={(e) => handleChange(e)}
            defaultChecked={rating.includes("5")}
            colorScheme="green"
          >
            <label style={{ color: "#ffc315", fontSize: "25px" }}>
              {"\u2605 \u2605 \u2605 \u2605 \u2605"}
            </label>
          </Checkbox>

          <br />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
