import React from "react";
import Filters from "./Filters";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
const DrawerComponent = ({
  category,
  setCategory,
  brand,
  setBrand,
  discountRange,
  setDiscountRange,
  setPage,
  setCat,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="pink"
        onClick={onOpen}
        py="18px"
        width="80%"
        borderBottomRadius={"0"}
      >
        Filters
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="Bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Filters
            brand={brand}
            setBrand={setBrand}
            category={category}
            setCategory={setCategory}
            discountRange={discountRange}
            setDiscountRange={setDiscountRange}
            setPage={setPage}
            setCat={setCat}
          />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
