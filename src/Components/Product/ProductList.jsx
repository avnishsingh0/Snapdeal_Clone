import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/ProductReducer/action";
import ProductCard from "./ProductCard";
import styles from "./product.module.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const ProductList = () => {
  const { isLoading, products, isError,filter } = useSelector((store) => {
    return {
      isLoading: store.ProductReducer.isLoading,
      products: store.ProductReducer.products,
      isError: store.ProductReducer.isError,
      filter:store.ProductReducer.filter
    };
  });
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  let obj = {
    params: {
      rating: searchParams.getAll("rating"),
    },
  };
  
  const filteredProducts = products.filter(product => {
    return (
      product.price >= filter.minPrice && product.price <= filter.maxPrice
    );
  });
  
 

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search]);

  return (
    <div id={styles.productlist}>
      {products.length > 0 &&
        products.map((el) => {
          return (
            <Link to={`${el.id}`} key={el.id} >
            <ProductCard
              
              image={el.image}
              price={el.price}
              old_price={el.oldprice}
              discount={el.discount}
              title={el.title}
              rating={
                el.rating === 1 ? (
                  <label  style={{ color: "#ffc315",fontSize:"15px" }}>
                    {"\u2605 \u2606 \u2606 \u2606 \u2606"}
                  </label>
                ) : el.rating === 2 ? (
                  <label style={{ color: "#ffc315",fontSize:"15px" }}>
                    {"\u2605 \u2605 \u2606 \u2606 \u2606"}
                  </label>
                ) : el.rating === 3 ? (
                  <label style={{ color: "#ffc315",fontSize:"15px" }}>
                    {"\u2605 \u2605 \u2605 \u2606 \u2606"}
                  </label>
                ) : el.rating === 4 ? (
                  <label style={{ color: "#ffc315",fontSize:"15px" }}>
                    {"\u2605 \u2605 \u2605 \u2605 \u2606"}
                  </label>
                ) : el.rating === 5 ? (
                  <label style={{ color: "#ffc315",fontSize:"15px" }}>
                    {"\u2605 \u2605 \u2605 \u2605 \u2605"}
                  </label>
                ) : null
              }
            />
            </Link>
          );
        })}
    </div>
  );
};

export default ProductList;
