import React from "react";
import styles from "../Components/product.module.css";
const ProductCard = ({ image, title, old_price, price, discount, rating }) => {
  return (
    <div className={styles.productCard}>
      <img src={image} alt={title} />
      <p className={styles.title}>{title}</p>
      <div className={styles.priceclass}>
        <p className={styles.old_price}>Rs.{old_price}</p>
        <p className={styles.price}>Rs.{price}</p>
        <p className={styles.discount}>{discount}</p>
      </div>
      <p className={styles.rating}> {rating}</p>
    </div>
  );
};

export default ProductCard;
