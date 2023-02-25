import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { Cart } from './Cart'
import Checkout from './Checkout'


import Homepage from './Homepage'
import ProductPage from './ProductPage'
import SingleProductPage from './SingleProductPage'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>


        <Route path='/products' element={<ProductPage/>}  />
        <Route path='/products/:id' element={<SingleProductPage/>} />
       
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='/productpage' element={<ProductPage/>}/>


    </Routes>
  )
}

export default AllRoutes