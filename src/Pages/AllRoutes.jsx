import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { Cart } from './Cart'

import Homepage from './Homepage'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default AllRoutes