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
    </Routes>
  )
}

export default AllRoutes