import React, { useEffect, useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from '../Components/auth/Login'
import Signup from '../Components/auth/Signup'

import { Edit } from '../Components/Admin/Pages/Edit'
import LandingPage from '../Components/Curousel/LandingPage'
import { Cart } from './Cart'
import Checkout from './Checkout'
import Homepage from './Homepage'
import ProductPage from './ProductPage'
import SingleProductPage from './SingleProductPage'
import { auth } from '../firebase'
import { MainPage } from '../Components/Admin/Components/MainPage'
import { ProductView } from '../Components/Admin/Pages/ProductView'
import { Dashboard } from '../Components/Admin/Pages/Dashboard'
import { AddProduct } from '../Components/Admin/Pages/AddProduct'
import { Orders } from '../Components/Admin/Pages/Orders'
import { Seller } from '../Components/Admin/Pages/Seller'

const AllRoutes = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/products' element={<ProductPage/>}  />
        <Route path='/products/:id' element={<SingleProductPage/>} />
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/admin' element={<MainPage/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/admin_products" element={<ProductView/>} />
        <Route path="/admin/add_products" element={<AddProduct/>} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/edit/:id" element={<Edit />} />
        <Route path="/admin/seller" element={<Seller />} />
    </Routes>
  )
}

export default AllRoutes