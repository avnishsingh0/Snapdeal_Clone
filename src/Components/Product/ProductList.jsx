import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/ProductReducer/action";
import ProductCard from "./ProductCard";
import styles from "./product.module.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import Page from "./Page";

const ProductList = () => {
  const { isLoading, products, isError } = useSelector((store) => {
    return {
      isLoading: store.ProductReducer.isLoading,
      products: store.ProductReducer.products,
      isError: store.ProductReducer.isError,
    };
  });
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = products.slice(firstPostIndex, lastPostIndex);

  let obj = {
    params: {
      rating: searchParams.getAll("rating"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  function handlePageChange(action) {
    if (action === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (
      action === "next" &&
      currentPage < Math.ceil(products.length / postPerPage)
    ) {
      setCurrentPage(currentPage + 1);
    }
  }

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search, currentPage]);

  return (
    <>
     <div className={styles.page} >
     <Page
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / postPerPage)}
        onPageChange={handlePageChange}
      />
     </div>
   
      <div id={styles.productlist}>
        {products.length > 0 &&
          currentPost.map((el) => {
            return (
              <Link to={`${el.id}`} key={el.id}>
                <ProductCard
                  image={el.image}
                  price={el.price}
                  old_price={el.oldprice}
                  discount={el.discount}
                  title={el.title}
                  rating={
                    el.rating === 1 ? (
                      <label style={{ color: "#ffc315", fontSize: "25px" }}>
                        {"\u2605 \u2606 \u2606 \u2606 \u2606"}
                      </label>
                    ) : el.rating === 2 ? (
                      <label style={{ color: "#ffc315", fontSize: "25px" }}>
                        {"\u2605 \u2605 \u2606 \u2606 \u2606"}
                      </label>
                    ) : el.rating === 3 ? (
                      <label style={{ color: "#ffc315", fontSize: "25px" }}>
                        {"\u2605 \u2605 \u2605 \u2606 \u2606"}
                      </label>
                    ) : el.rating === 4 ? (
                      <label style={{ color: "#ffc315", fontSize: "25px" }}>
                        {"\u2605 \u2605 \u2605 \u2605 \u2606"}
                      </label>
                    ) : el.rating === 5 ? (
                      <label style={{ color: "#ffc315", fontSize: "25px" }}>
                        {"\u2605 \u2605 \u2605 \u2605 \u2605"}
                      </label>
                    ) : null
                  }
                />
              </Link>
            );
          })}
      </div>
      <div>
    <Pagination
        totalPost={products.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
    </>
  );
};

export default ProductList;
