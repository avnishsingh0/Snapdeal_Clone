import React, { useEffect, useState } from "react";
import styles from "./product.module.css";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Checkbox,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../Redux/ProductReducer/action";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = useSelector(state => state.ProductReducer.filter);
  const initialState = searchParams.getAll("rating");
  const [rating, setRating] = useState(initialState || []);
  const [minPrice, setMinPrice] = useState(filter.minPrice);
  const [maxPrice, setMaxPrice] = useState(filter.maxPrice);


  const dispatch = useDispatch()

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

  const handleSliderChange = ([newMinPrice, newMaxPrice]) => {
    setMinPrice(newMinPrice);
    setMaxPrice(newMaxPrice);
    dispatch(updateFilter({ minPrice: newMinPrice, maxPrice: newMaxPrice }));
  }

  useEffect(() => {
    let param = {
      rating,
    };
    
    setSearchParams(param);
  }, [rating,minPrice,maxPrice]);
  
  
  console.log(filter)
  
  

  return (
    <div className={styles.sidebar}>
      <div>
        <h4>Men's Clothing</h4>
        <p>- Shirts for Men</p>
        <p> Casual Shirts for Men</p>
        <p> Formal Shirts for Men</p>
      </div>
      <div>
        <h5 style={{ fontWeight: "bolder" }}>Price</h5>
        <div className={styles.price_slider}>
          <RangeSlider
            aria-label={["min", "max"]}
            min={249} max={2498} step={30}
            defaultValue={[minPrice, maxPrice]}
            onChangeEnd={(val)=> handleSliderChange(val) }
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </div>

        <div className={styles.max_min}>
        
        </div>
      </div>

      <div>
        <h5>Customer Rating</h5>
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
