import React from "react";
import ProductList from "../Components/ProductList";
import Sidebar from "../Components/Sidebar";
import styled from "styled-components";

const ProductPage = () => {
  return (
    <Wrapper>
      <Filter>
        <Sidebar />
      </Filter>
      <Product>
        <ProductList />
      </Product>
    </Wrapper>
  );
};

export default ProductPage;

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  gap: 5px;
  padding: 15px;
`;

const Filter = styled.div`
  width: 20%;
`;

const Product = styled.div`
  width: 80%;
`;
