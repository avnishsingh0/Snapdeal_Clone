import React from "react";
import styles from "./product.module.css";

const ProductCard = ({ image, title, old_price, price, discount, rating }) => {
  return (
    <div className={styles.productCard}>
      <img className={styles.card_img} src={image} alt={title} />
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
