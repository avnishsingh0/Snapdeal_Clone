import {
  Box,
  Button,
  Hide,
  Image,
  Input,
  Select,
  Show,
  SimpleGrid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import {AiFillSafetyCertificate,AiOutlineClose, AiOutlineHeart} from 'react-icons/ai'
import {FcDataProtection} from 'react-icons/fc'
import {IoCloseSharp} from 'react-icons/io'
const Bag = () => {
  const handleCheck = () => {};
  return (
    <Box>
    <SimpleGrid columns={[1, 1, 1, 2]}>
      <Box border={"0px solid red"}>
        <TableContainer>
        <Show above='sm'>
          <Table variant="simple">
            <Thead bg={"#e2e2e2"}>
              <Tr>
                <Th>Item Details</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td display={'flex'}>
                  <Image
                  
                    w={70}
                    src="https://n2.sdlcdn.com/imgs/i/5/m/130x152/ASIAN-Maroon-Running-Shoes-SDL795647420-1-018b7.jpeg"
                  />
                  <Box>
                  <Text ml={4} >Sports Running Shoes  </Text>
                  <Text ml={4} mt={3} >Size: 6  </Text>
                  <Box display={'flex'} cursor={'pointer'}>
                    <Text ml={4} mt={3}><AiOutlineClose/></Text>
                    
                    <Text ml={2} mt={2.5} >REMOVE</Text> 
                    <Text ml={2} mt={3}><AiOutlineHeart/></Text>  
                    <Text ml={2} mt={2.5}> MOVE TO SHORTLIST</Text>
                  </Box>
                  </Box>
                  
                </Td>
                <Td>
                
                  
                  
                  
                  <Text > Rs. 1099</Text>
                  
                </Td>

                <Td>
                  <Select w={20}>
                    <option value="option1"> 1</option>
                    <option value="option2"> 2</option>
                    <option value="option3"> 3</option>
                  </Select>
                </Td>
              </Tr>
            </Tbody>
           
          </Table>
          </Show>

      <Show below='sm'>
          <Table variant="simple">
            <Tbody>
              <Tr >
                <Td>
                  <Image
                  
                    w={70}
                    src="https://n2.sdlcdn.com/imgs/i/5/m/130x152/ASIAN-Maroon-Running-Shoes-SDL795647420-1-018b7.jpeg"
                  />
                  <Select>
                    <option  value="option1"> 1</option>
                    <option  value="option2"> 2</option>
                    <option  value="option3"> 3</option>
                  </Select>
                  
                </Td>
                <Td  border={'0px solid red'}> 
                  <Text border={'0px solid red'}> Sports Running Shoes  </Text>
                  <Text mt={2} border={'0px solid red'}> Size: 5 </Text>
                  <Text mt={2} border={'0px solid red'}> Rs. 1000 </Text>
                  <Box display={'flex'} mt={3}>
                  <Text fontSize={'xl'}><AiOutlineClose/> </Text>
                  <Text ml={3}>REMOVE</Text>
                  </Box>
                </Td>
              </Tr>
            </Tbody>
           
          </Table>
          </Show>

        </TableContainer>
      </Box>

      <Hide  border={"0px solid red"} below='lg'>
      
        <TableContainer>
          <Table variant="simple">
            <Thead bg={"#e2e2e2"}>
              <Tr>
                <Th>Delivery with Charges</Th>
                <Th></Th>
                <Th>Subtotal</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td pb={"3.6rem"}>
                  <Text>
                    Check availability and delivery charges <br />
                     for your pincode
                  </Text>
                </Td>
                <Td></Td>
                <Td>
                  <Text> Rs. 1099</Text>
                </Td>
              </Tr>
            </Tbody>
            
          </Table>
        </TableContainer>
      </Hide>
    </SimpleGrid>





    {/* <Box border={"1px solid red"} >
        <SimpleGrid columns={[4,4,4,4]} m={'auto'}>
        <Box>
            <Text> Delivery and payment options can be selected later</Text><br/>
            <Box display={'flex'}>
                <Text><AiFillSafetyCertificate/></Text>
                <Text mt={-1} ml={2}>Safe and Secure Payments</Text>
            </Box>
            <Box display={'flex'} mt={2}>
                <Text><FcDataProtection/></Text>
                <Text  mt={-1} ml={2}> 100% Payment Protection, Easy Returns Policy</Text>
            </Box>
        </Box>

        <Box>
            <Text>Sub Total:</Text>
            <Text>Delivery Charges:</Text>
        </Box>

        <Box>
            <Text>Rs. 1,798</Text>
            <Text>FREE</Text>
        </Box>

        <Box>
            <Button bg={'#e40046'} color={'white'}>PROCEED TO PAY Rs. 1,798</Button>
        </Box>
        </SimpleGrid>
    </Box> */}
    </Box>

  );
};

export default Bag;
