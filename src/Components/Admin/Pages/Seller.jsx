import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {  Box, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useToast, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getLogin, getProduct } from '../../../Redux/AdminReducer/action'
import pop from '../../../Assets/pop.wav'

import { Link, useNavigate } from 'react-router-dom'


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
    <Box>
        <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Product Store</TableCaption>
    <Thead>
      <Tr bgColor={"red.300"} >
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
        <Td>{newId}</Td>
        <Td>{el.email}</Td>
        <Td>{el.password}***</Td>
        <Td>Operation Team</Td>
        <Td>Masai_{Math.random().toFixed(3)*1000}</Td>
        <Td><DeleteIcon color={"red"} onClick={()=>handleDelete(el.id)}/></Td>
      </Tr>
      })}
      
    </Tbody>
    
  </Table>
</TableContainer>
    </Box>
  )
}

// onClick={()=>handleEdit(el.id)}
