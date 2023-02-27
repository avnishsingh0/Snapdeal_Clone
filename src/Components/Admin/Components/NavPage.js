import React from "react";
import { Routes, Route } from "react-router-dom";
// import Angular from '../pages/Angular'
// import Css from '../pages/Css'
// import Figma from '../pages/Figma'
// import Git from '../pages/Git'
// import Home from '../pages/Home'
// import Java from '../pages/Java'
// import Node from '../pages/Node'
// import Php from '../pages/Php'
// import PageReact from '../pages/PageReact'
import { ProductView } from "../Pages/ProductView";
import { AddProduct } from "../Pages/AddProduct";
import { Dashboard } from "../Pages/Dashboard";
import { Orders } from "../Pages/Orders";
import { Edit } from "../Pages/Edit";
import { Seller } from "../Pages/Seller";
// import { Edit } from "./Edit";

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route path="/admin" element={<Dashboard/>} />
        <Route path="/admin/admin_products" element={<ProductView/>} />
        <Route path="/admin/add_products" element={<AddProduct />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/edit/:id" element={<Edit />} />
        <Route path="/admin/seller" element={<Seller />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
