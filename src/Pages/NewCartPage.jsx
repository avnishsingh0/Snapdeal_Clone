import { Badge, Box, Button, Heading, Image, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from "../Components/Navbar/Navbar.jsx";
// import { Box, Hide } from "@chakra-ui/react";
import Footer from '../Components/Curousel/Footer'
import { useNavigate, useParams } from 'react-router-dom'

export const NewCartPage = () => {
const [data,setData]=useState([])
console.log("data:",data)
//  const { id } = useParams();
//  console.log("id:",id)
const [summ,setSumm]=useState(0)
const navigate=useNavigate()


const getData = ()=>{
  axios.get("https://snapdeal-209x.onrender.com/cart").then((res)=>{
    // console.log(res.data)
    setData(res.data)
  }).catch((err)=>{
    console.log(err)
  })
}

useEffect(() => {
  getData()
}, [])

const handleDelete =async(id) => {
    await fetch(`https://snapdeal-209x.onrender.com/cart/${id}`, {
      method: 'DELETE',
    });
    setData(data.filter((el) =>el.id !== id));
    // console.log("delete",data.length)
    // getData(data)
    // axios.delete(`https://snapdeal.onrender.com/Cart${id}`).then((res) => {
    //     setData(res.data);
        
    //   });
  };

  const handleTotal =()=>{
    let temp=data;
    var sum=0;
    
    for(let i=0;i<temp.length;i++){
      sum=sum+Number(temp[i].offerPrice);
      // console.log(temp[i].price)
    }
    // console.log("temp:",sum)
    setSumm(sum);
  }
  setTimeout(() => {
    handleTotal();
   
  }, 100);
  return (  
    
    <Box>
      <Navbar/>
      <Box w={'50%'} h={'100px'} margin={'auto'} mt={'10%'}>
      <Box><Heading>Shopping Cart ({`${data.length}`}Items)</Heading></Box>
      <Box>
      <Table variant="simple" justifyContent={"left"}>
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th textAlign={"left"}>Price</Th>
                {/* <Th textAlign={"left"}>Qunatity</Th>
                <Th isNumeric>Total</Th> */}
              </Tr>
            </Thead>
            <Tbody>
              {data && data.map((el) => {
                return (
                  <Tr
                    key={el.id}
                    boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 2px 0px"
                  >
                    <Td p="40px">
                      <Box display={"flex"} gap="10px">
                        <Image src={el.images[0]} h="130px" />
                        <Box>
                          <Heading fontWeight={"600"} fontSize={"13px"}>
                            {el.title}
                          </Heading>
                          <Text fontSize={"12px"} color="grey">
                            <span style={{ fontWeight: "600" }}>SIZE : </span>
                            S
                          </Text>
                          <Text fontSize={"12px"} color="grey">
                            <span style={{ fontWeight: "600" }}>Brand : </span>
                            {el.brand}
                          </Text>
                          <Button
                            size="xs"
                            textAlign={"left"}
                            backgroundColor={"white"}
                            onClick={()=> handleDelete(el.id)}
                          >
                           X Remove
                          </Button>
                        </Box>
                      </Box>
                    </Td>
                    <Td>Rs. {el.offerPrice}</Td>
                    <Td>
                      <Box
                        display={"flex"}
                        w="50%"
                        alignItems="center"
                        gap="12px"
                        boxShadow={
                          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                        }
                      >
                        {/* <Button
                          backgroundColor={"white"}
                          colorScheme="white"
                          color="black"
                          onClick={()=> updatequant(el._id,el.quantity-1)}
                        >
                          -
                        </Button>
                       <p>{el.quantity}</p>
                       <Button
                          backgroundColor={"white"}
                          colorScheme="white"
                          color="black"
                          onClick={()=> updatequant(el._id,el.quantity+1)}
                        >
                          +
                        </Button> */}
                      </Box>
                    </Td>
                    {/* <Td isNumeric>Rs. {Number(el.price) * Number(el.quantity)}</Td> */}
                  </Tr>
                );
              })}
            </Tbody>
            <Thead>
              <Tr>
                <Th>Total</Th>
                <Th textAlign={"Right"}>Rs. {summ}</Th>
                {/* <Th textAlign={"left"}>Qunatity</Th>
                <Th isNumeric>Total</Th> */}
                <Button bg={'red'} color="white" onClick={()=>navigate("/checkout")}>Proceed to Payment</Button>
              </Tr>
            </Thead>
        </Table>

    </Box>
    </Box>
      
    </Box>
    
  
  )
}

/*
/* <Box>
        {data && data.map((el)=>{
            return (
                <Box key={el.id}>
                    <h1>{el.title}</h1>
                    <h2>{el.price}</h2>
                    <img src={el.image} alt={el.id} />
                    <Button>-</Button>
                    <Badge>1</Badge>
                    <Button>+</Button>
                    <Button onClick={() => handleDelete(el.id)}>Remove</Button>

                </Box>
            )
        // })}
    </Box> */
