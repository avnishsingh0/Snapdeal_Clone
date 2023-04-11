
import React, { useEffect, useState } from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdElevator,MdReviews,MdPayments} from 'react-icons/md'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    SimpleGrid,
    Text,
    Button,
    Center,
    Input,
    InputGroup,
    InputLeftAddon,
    RadioGroup,
    Stack,
    Radio,
    Checkbox,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Flex,
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Image,
  Select,
  Show,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  AiOutlineClose,
  AiOutlineHeart,
} from "react-icons/ai";
import Navbar from '../Components/Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


export const NewCheckout = () => {
    const [data,setData]=useState([])
    // console.log("data:",data)
    const [pin,setPin]=useState('');
    const [name,setName]=useState('');
    const [add,setAdd]=useState('')
    const [city,setCity]=useState('')
    const [sta,setSta]=useState('')
    const [mob,setMob]=useState('')
    const [summ,setSumm]=useState(0)
    const [email,setEmail]=useState("")
    const navigate=useNavigate()


    const getData = ()=>{
      axios.get('https://snapdeal-209x.onrender.com/cart').then((res)=>{
        console.log(res.data)
        setData(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    }
    
    useEffect(() => {
      getData()
    }, [])
    
  var grandtotals= 0;  
  var grandtotal= 0;  

  

//   const handleChanges=(e)=>{
//     const {name,value}=e.target;
//     setOrder(prev=>{
//         return {...prev,[name]: name==="price" ? +value:value}
//     })
// }
const handleSubmit=(e)=>{
e.preventDefault();
    alert(`Successfully saved your entered name: ${name}`)
}

const handleDelete =async(id) => {
    // console.log("deletekaro ab",data.length)
    await fetch(`https://snapdeal.onrender.com/Cart${id}`, {
      method: 'DELETE',
    });
    setData(data.filter((el) =>el.id !== id));
    // console.log("delete",data.length)
    // getData(data)
    // axios.delete(`https://snapdeal.onrender.com/Cart${id}`).then((res) => {
    //     setData(res.data);
        
    //   });
  };
  return (
    <>
    <Navbar/>
   <Box mt={"6rem"}  >

   <SimpleGrid columns={[1, 1, 1, 2]} p={5}>
    <Box border={'0px solid red'}>
    <Accordion defaultIndex={[1]} >
  <AccordionItem>
    <h2>
      <AccordionButton bg={"#f9fafb"}>
      <AiFillCheckCircle/>
        <Box as="span" flex='1' textAlign='left'  ml={3}>
         1. Login
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <Text textAlign={'center'}>We will send order details to this email address or mobile number</Text>
   {/* <Text textAlign={'center'}>Logged in as :</Text> */}
   <Input type="email" placeholder="Please put your registered mail Id here" value={email} onChange={(e)=>setEmail(e.target.value)}/>
   {/* {email && <Text textAlign={'center'}>Logged in as :{email}</Text>} */}
   <Center>
   <Button bg={'#dc3545 '} color={'white'} m={'auto'} borderRadius={'0px'} w={'35%'} mt={5} onClick={()=>alert(email+" "+"You are the same person")}>Continue</Button>
   </Center>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton bg={"#f9fafb"}>
      <MdElevator/>
        <Box as="span" flex='1' textAlign='left' ml={3}>
         2. Delivery Address
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <Box display={'flex'} >
     <Text mt={2} mr={20} ml={2}>Pincode</Text>
     <Input placeholder='6 digit pincode' value={pin} onChange={(e) => setPin(e.target.value)}/>
     </Box>
     <Box display={'flex'} mt={3} >
     <Text mt={2} mr={'6rem'} ml={2}>Name</Text>
     <Input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
     </Box>
     <Box display={'flex'} mt={3} >
     <Text mt={2} mr={'5rem'} ml={2}>Address</Text>
     <Input placeholder='Flat/House No. Colony/Street No.' value={add} onChange={(e) => setAdd(e.target.value)}  />
     </Box>
     {/* <Box display={'flex'} mt={3} >
     <Text mt={2} mr={'0.5rem'} ml={2}>Locality/Landmark</Text>
     <Input placeholder='Eg. Near Apollo Hospital'  />
     </Box> */}
     <Box display={'flex'} mt={3} >
     <Text mt={2} mr={'7rem'} ml={2}>City</Text>
     <Input placeholder='City'  />
     </Box>
     <Box display={'flex'} mt={3} >
     <Text mt={2} mr={'6.5rem'} ml={2}>State</Text>
     <Input placeholder='State' value={sta} onChange={(e) => setSta(e.target.value)}  />
     </Box>
     <Box display={'flex'} mt={3} >
     <Text mt={2} mr={'5.6rem'} ml={2}>Mobile</Text>
     <InputGroup>
    <InputLeftAddon children='+91' />
    <Input type='tel' placeholder='10 digit mobile number' value={mob} onChange={(e) => setMob(e.target.value)} />
  </InputGroup>
     </Box>
     {/* <Box display={'flex'} mt={3} >
     <Text mt={2} mr={'6.5rem'} ml={2}>Address Type</Text>
     <RadioGroup defaultValue='2' mt={2}>
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='red' value='1'>
    Home/Personal
    </Radio>
    <Radio colorScheme='red' value='2'>
    Office/Commercial
    </Radio>
  </Stack>
</RadioGroup>
     </Box> */}
     <Center>
     <Checkbox mt={5} colorScheme='red' defaultChecked>
     Make this my default address
  </Checkbox>
     </Center>
     <Center>
     <Button bg={'#dc3545 '} color={'white'} m={'auto'} borderRadius={'0px'} w={'55%'} mt={5} onClick={handleSubmit} >Save & Continue</Button>  
     </Center>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton bg={"#f9fafb"}>
     
      <MdReviews/>
        <Box as="span" flex='1' textAlign='left' ml={3}>
        3. Review Order
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box>
      <SimpleGrid columns={[1, 1, 1, 1]}>
        <Box border={"0px solid red"}>
          <TableContainer>
            <Show above="sm">
              <Table variant="simple">
                <Thead bg={"#e2e2e2"}>
                  <Tr>
                    <Th>Item Details</Th>
                    <Th>Price</Th>
                    <Th>Quantity</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.length > 0 &&
                    data.map((product, index) =>{
                     grandtotal+=(1*product.offerPrice)
                      return (
                        <Tr key={index}>
                        <Td display={"flex"}>
                          <Image
                            w={70}
                            src={product.images[0]}
                          />
                          <Box>
                            <Text ml={4}>{product.title}</Text>
                            <Text ml={4} mt={3}>
                              Size: 6
                            </Text>
                            <Box display={"flex"} cursor={"pointer"}>
                              <Text ml={4} mt={3} >
                                <AiOutlineClose />
                              </Text>

                              <Text ml={2} mt={2.5} onClick={()=>handleDelete(product.id)}>
                                Remove
                              </Text>
                              <Text ml={2} mt={3}>
                                <AiOutlineHeart />  
                              </Text>
                              <Text ml={2} mt={2.5}>
                               
                                Move to Shortlist
                              </Text>
                            </Box>
                          </Box>
                        </Td>
                        <Td>
                          <Text> {product.offerPrice}</Text>
                        </Td>

                        <Td>
                          <Text ml={3} fontWeight={'bold'}>1</Text>
                        </Td>
                      </Tr>
                      )
                    }

                     
                    )}
                </Tbody>
               
               
              </Table>
              {/* <Center>
                <Button bg={'#dc3545 '} w={'50%'} mt={3}>PAY RS. 1,798</Button>
                </Center> */}
            </Show>

            <Show below="sm">
              <Table variant="simple">
                <Tbody>
                  {data.length > 0 &&
                    data.map((product, index) => (
                      <Tr key={index}>
                        <Td>
                          <Image
                            w={70}
                            src="https://n2.sdlcdn.com/imgs/i/5/m/130x152/ASIAN-Maroon-Running-Shoes-SDL795647420-1-018b7.jpeg"
                          />
                          <Select>
                            <option value="option1"> 1</option>
                            <option value="option2"> 2</option>
                            <option value="option3"> 3</option>
                          </Select>
                        </Td>
                        <Td border={"0px solid red"}>
                          <Text border={"0px solid red"}>
                           
                            Sports Running Shoes
                          </Text>
                          <Text mt={2} border={"0px solid red"}>
                           
                            Qty:1
                          </Text>
                          <Text mt={2} border={"0px solid red"}>
                           
                            Rs. {product.offerPrice}
                          </Text>
                          <Box display={"flex"} mt={3}>
                            <Text fontSize={"xl"}>
                              <AiOutlineClose />
                            </Text>
                            <Text ml={3} onClick={()=>handleDelete(product.id)}>Remove</Text>
                          </Box>
                        </Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </Show>
          </TableContainer>
        </Box>

        
      </SimpleGrid>

     
    </Box>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton bg={"#f9fafb"}>
     
      <MdPayments/>
        <Box as="span" flex='1' textAlign='left' ml={3}>
        4. Make Payment
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Tabs m={'auto'}>
  <TabList>
    <Tab>Debit Card</Tab>
    <Tab>Net Banking</Tab>
    <Tab>Cash On Delivery</Tab>
    <Tab>EMI</Tab>
   
  </TabList>

  <TabPanels>
    <TabPanel>
      <Text>Pay using Credit Card</Text>
      <Box display={'flex'} >
     <Text mt={2} mr={20} ml={2}>Card Number</Text>
     <Input placeholder='Card Number'  />
     </Box>
     <Box display={'flex'} >
     <Text mt={5} mr={"6.1rem"}>Expiry Date</Text>
     <input 
        placeholder="Select Date and Time"
        size="md"
        type="date"
      />
     </Box>
    {/* <Center>
    <Button bg={'#dc3545 '} w={'50%'} mt={3}>PAY RS. 1,798</Button>
    </Center> */}
    </TabPanel>
    <TabPanel>
      <Text>Pay using  Net Banking</Text>
      <Box display={'flex'} >
     <Text mt={2} mr={20} ml={2}>Card Number</Text>
     <Input placeholder='Card Number'  />
     </Box>
     <Box display={'flex'} >
     <Text mt={5} mr={"6.1rem"}>Expiry Date</Text>
     <input 
        placeholder="Select Date and Time"
        size="md"
        type="date"
      />
     </Box>
    <Center>
    <Button bg={'#dc3545 '} w={'50%'} mt={3}>Pay Rs. {grandtotals}</Button>
    </Center>
    </TabPanel>
    <TabPanel>
    <Button bg={'#dc3545 '} w={'50%'} mt={3}>Place COD Order</Button>
    </TabPanel>
    <TabPanel>
      <Text>Not avilable</Text>
    </TabPanel>
   
  </TabPanels>
</Tabs>
    </AccordionPanel>
  </AccordionItem>

  
    </Accordion>
    </Box>









    <Box border={'0px solid red'} p={4}  m={'auto'} mt={'0'}>
      <Box bg={'#fbf8fb '} p={4}>
        <Text>Summary ({`${data.length}`}Items)</Text>
        {data.length > 0 && data.map((product,index)=>{
          grandtotals+=(1*product.offerPrice)
          return (
            <Box>
            <Text mt={3}>{product.brand}</Text>
            <Flex>
            <Text mr={"11rem"}>Quantity: 1</Text>
            <Text>Rs. {product.offerPrice}</Text>
             </Flex>
            </Box>
          )
        })}
      </Box>
     <hr/>
     <Flex>
         <Text>Total</Text>
         <Text ml={"10rem"}>Rs. {grandtotals}</Text>
     </Flex>
     <Flex>
         <Text>Delivery Charge</Text>
          <Text ml={"6rem"}>Free</Text>
     </Flex>
     <hr/>
     <Flex>
         <Text fontSize={25} fontWeight={'bold'}>You Pay:</Text>
          <Text ml={"6rem"} fontSize={25}>Rs. {grandtotals}</Text>
     </Flex>
     <Center>
                {mob.length>0 && <Link to="/thank">
                <Button color={'white'}  bg={'#dc3545 '} w={'80%'} mt={3}>Pay Rs. {grandtotals}</Button>
                </Link>}
                </Center>
    </Box>
   </SimpleGrid>
   </Box>
   </>
  )
}

