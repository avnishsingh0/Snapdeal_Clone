import {
  Box,
  Button,
  Hide,
  Image,
  Select,
  Show,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import {
  AiFillSafetyCertificate,
  AiOutlineClose,
  AiOutlineHeart,
} from "react-icons/ai";
import { FcDataProtection } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCart } from "../Redux/CartReducer/action";

const Bag = () => {
  const { isLoading, isError, carts } = useSelector(
    (store) => store.CartReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart);
  }, []);
  var grandtotal = 0;
  const handleDeletes=(id)=>{
      dispatch(deleteCart(id))  
  }

  return (
    <Box>
      <SimpleGrid columns={[1, 1, 1, 2]}>
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
                  {carts.length > 0 &&
                    carts.map((product, index) => {
                      grandtotal += product.qty * product.price;
                      return (
                        <Tr key={index}>
                          <Td display={"flex"}>
                            <Image w={70} src={product.image} />
                            <Box>
                              <Text ml={4}>{product.description} </Text>
                              <Text ml={4} mt={3}>
                                Size: 6
                              </Text>
                              <Box display={"flex"} cursor={"pointer"}>
                                <Text ml={4} mt={3}>
                                  <AiOutlineClose />
                                </Text>

                                <Text ml={2} mt={2.5} onClick={()=>handleDeletes(product.id)}>
                                  REMOVE
                                </Text>
                                <Text ml={2} mt={3}>
                                  <AiOutlineHeart />
                                </Text>
                                <Text ml={2} mt={2.5}>
                                  MOVE TO SHORTLIST
                                </Text>
                              </Box>
                            </Box>
                          </Td>
                          <Td>
                            <Text> {product.price}</Text>
                          </Td>

                          <Td>
                            <Text ml={3} fontWeight={"bold"}>
                              {product.qty}
                            </Text>
                          </Td>
                        </Tr>
                      );
                    })}
                </Tbody>
              </Table>
            </Show>

            <Show below="sm">
              <Table variant="simple">
                <Tbody>
                  {carts.length > 0 &&
                    carts.map((product, index) => (
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
                            Qty:{product.qty}
                          </Text>
                          <Text mt={2} border={"0px solid red"}>
                            Rs. {product.price}
                          </Text>
                          <Box display={"flex"} mt={3}>
                            <Text fontSize={"xl"}>
                              <AiOutlineClose />
                            </Text>
                            <Text ml={3}>REMOVE</Text>
                          </Box>
                        </Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </Show>
          </TableContainer>
        </Box>

        <Hide border={"0px solid red"} below="lg">
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
                {carts.length > 0 &&
                  carts.map((product, index) => (
                    <Tr key={index}>
                      <Td pb={"5.1rem"} pt={"1rem"}>
                        <Text>
                          Check availability and delivery charges <br />
                          for your pincode
                        </Text>
                      </Td>
                      <Td></Td>
                      <Td>
                        <Text> Rs. {product.qty * product.price}</Text>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Hide>
      </SimpleGrid>

      <Box bg={"black"} color={"white"} borderRadius={15} p={5}>
        <SimpleGrid columns={[4, 4, 4, 4]} m={"auto"}>
          <Hide below="lg">
            <Box border={"0px solid red"} m={"auto"}>
              <Text> Delivery and payment options can be selected later</Text>
              <br />
              <Box display={"flex"}>
                <Text>
                  <AiFillSafetyCertificate />
                </Text>
                <Text mt={-1} ml={2}>
                  Safe and Secure Payments
                </Text>
              </Box>
              <Box display={"flex"} mt={2}>
                <Text>
                  <FcDataProtection />
                </Text>
                <Text mt={-1} ml={2}>
                  100% Payment Protection, Easy Returns Policy
                </Text>
              </Box>
            </Box>
          </Hide>
          <Show above="sm">
            <Box border={"0px solid red"} m={"auto"}>
              <Text>Sub Total:</Text>
              <Text>Delivery Charges:</Text>
            </Box>
          </Show>
          <Box border={"0px solid red"} m={"auto"}>
            <Text>Rs. {grandtotal}</Text>

            <Text>FREE</Text>
          </Box>
          <Box border={"0px solid red"} m={"auto"}>
            <Link to={"/checkout"}>
              <Button bg={"#e40046"} color={"white"}>
                PROCEED TO PAY Rs. {grandtotal}
              </Button>
            </Link>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Bag;
