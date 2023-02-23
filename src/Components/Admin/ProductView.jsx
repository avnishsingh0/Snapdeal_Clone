import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProduct } from '../../Redux/AdminReducer/action'

export const ProductView = () => {
    const [change,setChange]=useState(false)
    // const [pro,setPro]=useState([])
    
    const product=useSelector((store)=>store.AdminReducer.products
    )
    // console.log("pro:",pro)
   /*
   {
    "image": "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/j/h/n/-original-imagkx55swz2wzk8.jpeg?q=70",
    "brand": "Adidas",
    "price": 789,
    "description": "Being Human",
    "collection": "Men",
    "id": 1
  },
   */
    // console.log("propd:",product)
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getProduct)
        
    }, [change])

    const updateUI=()=>{
        setChange((prev)=>!prev)
    }

    const handleDelete=(id)=>{
        // console.log("id:",id)
        dispatch(deleteProduct(id)).then(()=>{
            updateUI()
            
        })
    }

    const handleEdit=(id)=>{
        console.log("edit:",id)
    }
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
        <Td><EditIcon onClick={()=>handleEdit(el.id)}/></Td>
        <Td><DeleteIcon color={"red"} onClick={()=>handleDelete(el.id)}/></Td>
      </Tr>
      })}
      
    </Tbody>
    
  </Table>
</TableContainer>
    </Box>
  )
}
