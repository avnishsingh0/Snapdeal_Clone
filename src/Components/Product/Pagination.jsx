import React from "react";
import styles from "./product.module.css"
const Pagination = ({ totalPost, postPerPage,setCurrentPage,currentPage }) => {
  let pages = [];

  

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pages.map((page, index) => {
        return (
          <button  key={index} onClick={()=>setCurrentPage(page)} className={styles.page==currentPage ? 'active' : ''}  >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
