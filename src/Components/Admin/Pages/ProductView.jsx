import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {  Box, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useToast, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProduct } from '../../../Redux/AdminReducer/action'


import { Link, useNavigate } from 'react-router-dom'

import { ProductViewCard } from './ProductViewCard'



// const Alert=()=>{
//   return (<Stack>
//     <Alert status='success' variant='solid'>
//       <AlertIcon />
//     Data uploaded to the server. Fire on!   
//   </Alert>
// </Stack>)
  
// }

export const ProductView = () => {
    
    
    
    const product=useSelector((store)=>store.AdminReducer.products
    )

    // const navigate=useNavigate()
    
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getProduct)
        
    }, [])

   

  //   const play=()=>{
  //     new Audio(pop).play()
  // }



  //   const handleDelete=(id)=>{
        
  //     play()
      
  //       dispatch(deleteProduct(id))
        
  //   }

    
  return (
    <Box display={"grid"} gridTemplateColumns={"repeat(2,1fr)"}>
      {product.length>0 && product.map((el)=>{
      return <ProductViewCard key={el.id} {...el}/>
    })}
    </Box>
  )
}

// onClick={()=>handleEdit(el.id)}

/*
<Box>
        <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Product Store</TableCaption>
    <Thead>
      <Tr bgColor={"red.300"} >
        <Th color={"white"}>S.No</Th>
        <Th color={"white"}>Brand Name</Th>
        <Th color={"white"}>Price</Th>
        <Th color={"white"}>Collection</Th>
        <Th color={"white"}>Edit</Th>
        <Th color={"white"}>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
      {product.length>0 && product.reverse().map((el)=>{
        var newId=el.id+Date.now()
        return <Tr key={el.id}>
        <Td>{newId}</Td>
        <Td>{el.brand}</Td>
        <Td>Rs.{el.price}</Td>
        <Td>{el.collection}</Td>
        <Td><EditIcon/></Td>
        <Td><DeleteIcon color={"red"} onClick={()=>handleDelete(el.id)}/></Td>
      </Tr>
      })}
      
    </Tbody>
    
  </Table>
</TableContainer>
    </Box>
*/
