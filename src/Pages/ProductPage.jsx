import React from "react";
import ProductList from "../Components/Product/ProductList";
import Sidebar from "../Components/Product/Sidebar";
import styles from "../Components/Product/product.module.css";
import Navbar from "../Components/Navbar/Navbar";
import { Box, Hide } from "@chakra-ui/react";
import Footer from '../Components/Curousel/Footer'

const ProductPage = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.wrapper}>
      <Hide breakpoint='(max-width: 900px)'>
      <div className={styles.filter}>
        <Sidebar />
      </div>
      </Hide>
      <Box className={styles.productPage}>
        <ProductList />
      </Box>
    </div>
    <Footer/>
    </>
  );
};

export default ProductPage;




