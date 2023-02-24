import { Button, FormControl, FormHelperText, FormLabel, Input, Select, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addProduct } from '../../../Redux/AdminReducer/action';


let initialState={
    image:"",
    brand:"",
    price:"",
    description:"",
    collection:""
}


export const AddProduct = () => {

    const [product,setProduct]=useState(initialState)

    const dispatch=useDispatch()

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setProduct(prev=>{
            return {...prev,[name]: name==="price" ? +value:value}
        })
        // console.log(product)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addProduct(product))
        setProduct(product)
        setProduct(initialState)
    }
  return (
   

   
    <Wrapper className='back'>
        <h1>MegaDeals Admin Panel</h1>
        <form onSubmit={handleSubmit}>
        <FormLabel>Image Url</FormLabel>
        <Input type='url' name='image' value={product.image} onChange={(e)=>handleChange(e)}/>
        
        <FormLabel>Brand</FormLabel>
        <Input type='text' name='brand' value={product.brand} onChange={(e)=>handleChange(e)} />
        
        <FormLabel>Price</FormLabel>
        <Input type='number' name='price' value={product.price} onChange={(e)=>handleChange(e)}/>
        <FormLabel>Description</FormLabel>
        <Input type='text' name='description' value={product.description} onChange={(e)=>handleChange(e)}/>
        
        <FormLabel>Collection</FormLabel>
        <Select name="collection" onChange={(e)=>handleChange(e)}>
            <option value="Select Collection">Select Collection</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
        </Select>

        <Stack direction='row' spacing={4} align='center' mt={"20px"}>
            <Button colorScheme='teal' variant='solid' ml={"40%"} type="submit">
                Button
            </Button>
  
        </Stack>
        </form>
    </Wrapper>
    
  )
}

const Wrapper=styled.div`

.back{
    background-color: palegreen;
}

border:2px solid teal;
width:40%;
margin:auto;
border-Radius:14px;
padding:10px 20px
`



