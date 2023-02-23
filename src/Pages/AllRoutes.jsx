import React from 'react'
import {Route,Routes} from 'react-router-dom'
import LandingPage from '../Components/Curousel/LandingPage'
import Homepage from './Homepage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/landingpage' element={<LandingPage/>}/>
       
    </Routes>
  )
}

export default AllRoutes