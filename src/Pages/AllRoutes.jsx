import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/auth/Login";
import Signup from "../Components/auth/Signup";

import { Edit } from "../Components/Admin/Pages/Edit";
import LandingPage from "../Components/Curousel/LandingPage";


import {NewCheckout} from "./NewCheckout";
import Homepage from "./Homepage";





import { MainPage } from "../Components/Admin/Components/MainPage";
import { ProductView } from "../Components/Admin/Pages/ProductView";
import { Dashboard } from "../Components/Admin/Pages/Dashboard";
import { AddProduct } from "../Components/Admin/Pages/AddProduct";
import { Orders } from "../Components/Admin/Pages/Orders";
import { Seller } from "../Components/Admin/Pages/Seller";



import Products from "./Products/Products";
import SingleProduct from "./SingleProductPage/SingleProduct";
import { NewCartPage } from "./NewCartPage";
import Thankyou from "./Thankyou";



const AllRoutes = () => {
 
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      
      
      <Route path="/checkout" element={<NewCheckout/>} />
      <Route path="/cart" element={<NewCartPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/thank" element={<Thankyou />} />


      <Route path="/product/:products" element={<Products />}></Route>
      <Route path="/product/:products/:id" element={<SingleProduct /> }></Route>
   
    
    
      <Route path="/cart" element={<NewCartPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />


      <Route path="/admin" element={<MainPage />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/admin_products" element={<ProductView />} />
      <Route path="/admin/add_products" element={<AddProduct />} />
      {/* <Route path="/cart" element={<AddProduct />} /> */}
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/edit/:id" element={<Edit />} />
      <Route path="/admin/seller" element={<Seller />} />
    </Routes>
  );
};

export default AllRoutes;
