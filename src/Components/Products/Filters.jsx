import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const Filters = ({
  category,
  setCategory,
  brand,
  setBrand,
  discountRange,
  setDiscountRange,
  setPage,
}) => {

  const handleCategories = (e) => {
    setPage(1);
    setCategory(e);
    setDiscountRange("");
  };
  const handleBrands = (e) => {
    setPage(1);
    setBrand(e);
    setDiscountRange("");
  };
  const handleDiscountRange = (e) => {
    setPage(1);
    setDiscountRange(e);
  };

  return (
    <Box pl={"4rem"}>
  
      <Box>
        <Text my="1rem" fontWeight={"bold"} fontSize="0.95rem">
          BRAND
        </Text>
        <CheckboxGroup
          colorScheme="blue"
          defaultValue={brand}
          value={brand}
          onChange={handleBrands}
        >
          <Stack spacing={"1"} color="black">
            <Checkbox value="Roadster">Roadster</Checkbox>
            <Checkbox value="HIGHLANDER">HIGHLANDER</Checkbox>
            <Checkbox value="U.S. Polo Assn">U.S. Polo Assn</Checkbox>
            <Checkbox value="Jack & Jones">Jack & Jones</Checkbox>
            <Checkbox value="WROGN">WROGN</Checkbox>
            <Checkbox value="HERE&NOW">HERE&NOW</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
      <Box>
        <Text my="1rem" fontWeight={"bold"} fontSize="0.95rem">
          DISCOUNT RANGE
        </Text>
        <RadioGroup onChange={handleDiscountRange} value={discountRange}>
          <Stack direction="column" color={"black"}>
            <Radio value="10" colorScheme={"blue"}>
              10% and above
            </Radio>
            <Radio value="20" colorScheme={"blue"}>
              20% and above
            </Radio>
            <Radio value="30" colorScheme={"blue"}>
              30% and above
            </Radio>
            <Radio value="40" colorScheme={"blue"}>
              40% and above
            </Radio>
            <Radio value="50" colorScheme={"blue"}>
              50% and above
            </Radio>
            <Radio value="60" colorScheme={"blue"}>
              60% and above
            </Radio>
            <Radio value="70" colorScheme={"blue"}>
              70% and above
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default Filters;
