import React from "react";
import styles from "./product.module.css";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div>
        <h5>Price</h5>
        <RangeSlider   aria-label={["min", "max"]} defaultValue={[0, 100]}>
          <RangeSliderTrack>
            <RangeSliderFilledTrack bg={"black"} />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </div>
    </div>
  );
};

export default Sidebar;
