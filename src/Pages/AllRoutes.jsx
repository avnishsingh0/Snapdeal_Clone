import React from 'react'
import {Route,Routes} from 'react-router-dom'

import LandingPage from '../Components/Curousel/LandingPage'



import { Cart } from './Cart'


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
        <Route path='/cart' element={<Cart/>}/>
      


    </Routes>
  )
}

export default AllRoutes