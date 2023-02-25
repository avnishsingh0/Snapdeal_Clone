import { FormLabel, Input, Select, Stack } from '@chakra-ui/react'
import axios from 'axios'
import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editProduct, getProduct } from '../../../Redux/AdminReducer/action'



export const Edit = () => {

    
    const { id } = useParams();

    const [image,setImage]=useState("")
    const [brand,setBrand]=useState("")
    const [price,setPrice]=useState("")
    
    const product=useSelector((store)=>store.AdminReducer.products)
    const dispatch = useDispatch();

    useEffect(() => {
        const productData = product.find((el) => el.id === +id);
    if (productData) {
        setImage(productData.image);
        setBrand(productData.brand);
        setPrice(productData.price);
        
    }
    }, [])

    const handleEdit=(e)=>{
        let newData = {
            image,
            price: price,
            brand
          };
          dispatch(editProduct(id, newData)).then(() => dispatch(getProduct()));
        
    }
    
  return (
    <div>
        <h1>Edit Product Id: {id}</h1>
        <form>
        <FormLabel>Image Url</FormLabel>
        <Input type='url' name='image' value={product.image} onChange={(e)=>setImage(e.target.value)} required/>
        
        <FormLabel>Brand</FormLabel>
        <Input type='text' name='brand' value={product.brand} onChange={(e)=>setBrand(e.target.value)} required/>
        
        <FormLabel>Price</FormLabel>
        <Input type='number' name='price' value={product.price} onChange={(e)=>setPrice(e.target.value)} required/>
        
        <Stack direction='row' spacing={4} align='center' mt={"20px"}>
            <Button colorScheme='teal' variant='solid' ml={"40%"} type="submit" onClick={handleEdit}>
                Edit
            </Button>
  
        </Stack>
        </form>
    </div>
  )
}
