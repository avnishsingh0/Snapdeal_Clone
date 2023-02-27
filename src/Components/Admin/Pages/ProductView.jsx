import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {  Box, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useToast, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProduct } from '../../../Redux/AdminReducer/action'


import { Link, useNavigate } from 'react-router-dom'

import { ProductViewCard } from './ProductViewCard'
import NavBar from '../Components/NavBar'
import { Sidebar } from './Sidebar'
import NavPage from '../Components/NavPage'
import styled from 'styled-components'


export const ProductView = () => {
    
    
    
    const product=useSelector((store)=>store.AdminReducer.products
    )

    
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getProduct)
        
    }, [])



    
  return (
    
    <div className='side0'>
        <NavBar/>
        <Side>
        <div className='Side1'><Sidebar/></div>
        <div className='Side2'>
        <Box display={"grid"} gridTemplateColumns={"repeat(2,1fr)"}>
      {product.length>0 && product.reverse().map((el)=>{
      return <ProductViewCard key={el.id} {...el}/>
    })}
    </Box>
        </div>
        </Side>
    </div>
  )
}
const Side=styled.div`

    display:flex;
    flex-direction: row;
    height: auto;

`

