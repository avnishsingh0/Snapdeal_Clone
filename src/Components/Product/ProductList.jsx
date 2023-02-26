import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/ProductReducer/action";
import ProductCard from "./ProductCard";
import styles from "./product.module.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import Page from "./Page";
import { Img } from "@chakra-ui/react";

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
  }, [location.search]);

  return (
    <>
    {isLoading &&  <img src="data:image/png;base64,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" /> }
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
