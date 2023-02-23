import React from 'react'
import {Route,Routes} from 'react-router-dom'


import Homepage from './Homepage'
import ProductPage from './ProductPage'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>

    </Routes>
  )
}

export default AllRoutes