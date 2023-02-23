import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { Cart } from './Cart'


import Homepage from './Homepage'
import ProductPage from './ProductPage'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/productpage' element={<ProductPage/>}/>
    </Routes>
  )
}

export default AllRoutes