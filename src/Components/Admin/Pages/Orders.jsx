import { Box, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderProduct } from '../../../Redux/AdminReducer/action'

export const Orders = () => {

    const product=useSelector((store)=>store.AdminReducer.cart
    )
  
 
   
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(orderProduct)
        
    }, [])
  return (
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
        {/* {/* <Th color={"white"}>Edit</Th> */}
        <Th color={"white"}>Quantity</Th>
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
        <Td>{el.qty}</Td>
        {/* <Td><EditIco onClick={()=>handleEdit(el.id)}/></Td>
        <Td><DeleteIcon color={"red"} onClick={()=>handleDelete(el.id)}/></Td> */}
      </Tr>
      })}
      
    </Tbody>
    
  </Table>
</TableContainer>
    </Box>
  )
}
