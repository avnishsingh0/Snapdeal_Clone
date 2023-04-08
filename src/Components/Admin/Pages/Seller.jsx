import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {  Box, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useToast, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getLogin, getProduct } from '../../../Redux/AdminReducer/action'
import pop from '../../../assets/pop.wav'

import { Link, useNavigate } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import NavPage from '../Components/NavPage'
import NavBar from '../Components/NavBar'
import styled from 'styled-components'


export const Seller = () => {
    
    
    
    const product=useSelector((store)=>store.AdminReducer.data
    )

    // const navigate=useNavigate()
    
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getLogin)
        
    }, [])

   

    const play=()=>{
      new Audio(pop).play()
  }



    const handleDelete=(id)=>{
        
      play()
      
        dispatch(deleteProduct(id))
        
    }

    
  return (

<div className='side0'>
<NavBar/>
<Side>
<div className='Side1'><Sidebar/></div>
<div className='Side2'>
<Box w={'60rem'}>
        <TableContainer>
  <Table variant='striped' colorScheme='blue'>
    <TableCaption>Product Store</TableCaption>
    <Thead>
      <Tr bgColor={"blue.600"} >
        <Th color={"white"}>S.No</Th>
        <Th color={"white"}>Email</Th>
        <Th color={"white"}>Password</Th>
        <Th color={"white"}>Department</Th>
        <Th color={"white"}>EmployeeId</Th>
        <Th color={"white"}>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
      {product.length>0 && product.reverse().map((el)=>{
        var newId=el.id+Date.now()
        return <Tr key={el.id}>
        <Td color={"black"}>{newId}</Td>
        <Td color={"black"}>{el.email}</Td>
        <Td color={"black"}>{el.password}***</Td>
        <Td color={"black"}>Operation Team</Td>
        <Td color={"black"}>Masai_{Math.random().toFixed(3)*1000}</Td>
        <Td color={"black"}><DeleteIcon color={"red"} onClick={()=>handleDelete(el.id)}/></Td>
      </Tr>
      })}
      
    </Tbody>
    
  </Table>
</TableContainer>
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


