import React from "react";
import ProductList from "../Components/Product/ProductList";
import Sidebar from "../Components/Product/Sidebar";
import styles from "../Components/Product/product.module.css";
import Navbar from "../Components/Navbar/Navbar";

const ProductPage = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.wrapper}>
      <div className={styles.filter}>
        <Sidebar />
      </div>
      <div className={styles.productPage}>
        <ProductList />
      </div>
    </div>
    </>
  );
};

export default ProductPage;




