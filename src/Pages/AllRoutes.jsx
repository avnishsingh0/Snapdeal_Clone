import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { Edit } from '../Components/Admin/Pages/Edit'
import LandingPage from '../Components/Curousel/LandingPage'
import { Cart } from './Cart'
import Checkout from './Checkout'
import Homepage from './Homepage'
import ProductPage from './ProductPage'
import SingleProductPage from './SingleProductPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/landingpage' element={<LandingPage/>}/>
        <Route path='/products' element={<ProductPage/>}  />
        <Route path='/products/:id' element={<SingleProductPage/>} />
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default AllRoutes