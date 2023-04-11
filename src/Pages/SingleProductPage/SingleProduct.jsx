import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BiStar } from "react-icons/bi";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TopFooter } from "../../Components/Footer/TopFooter";
import { MidFooter } from "../../Components/Footer/MidFooter";
import { BottomFooter } from "../../Components/Footer/BottomFooter";
import { About } from "../../Components/Footer/About";





const SingleProduct = () => {
  let { products, id } = useParams();
  const dispatch = useDispatch();
  const toast = useToast();
 


  const [singleProd, setSingleProd] = useState({});
  const [isLoading, setLoading] = useState(true);

  const getSingleProuduct = async () => {
    let res = await axios.get(
      `https://snapdeal-209x.onrender.com/${products}/${id}`
    );
    setSingleProd(res.data);
    setLoading(false);
  };

 const handleCart = () => {
  
  const payload = singleProd
   axios.post(`https://snapdeal-209x.onrender.com/cart`,singleProd).then((res)=>{
    console.log(res)
   }).catch(err=>console.log(err))
 }
  

  useEffect(() => {
    getSingleProuduct();
  }, [id]);

  return (
    <>
    <div>
     
      {isLoading ? (
        <Flex
          justify={"center"}
          flexDir={{ base: "column", md: "row" }}
          width="80vw"
          marginX="auto"
         
          my="2rem"
        >
        
          <Flex width="65%" px={"3rem"} flexDir="column"   gap="2rem" py="2rem">
            <Skeleton height="30px" width="150px" />
            <Skeleton height="18px" width="250px" />
            <Skeleton height="18px" width="150px" />
            <Skeleton height="20px" width="200px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Flex
              gap={{ base: "3px", md: "2rem" }}
              px={{ md: "2rem" }}
              width="full"
           
            >
              <Skeleton height="40px" width="160px" borderRadius={"xl"} />
              <Skeleton height="40px" width="160px" borderRadius={"xl"} />
            </Flex>
            <Skeleton height="17px" />
            <Skeleton height="17px" />
          </Flex>
        </Flex>
      ) : (
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justify={"center"}
          width="87vw"
          marginX="auto"
          my="2rem"
          
        >
          <Flex
            marginX={"auto"}
            justify={"center"}
            
            width={{ base: "90%", lg: "30%" }}
            height={{ base: "60vh", lg: "80vh" }}
          >
            <Image
              src={singleProd.images[0]}
              
              width="80%"
              height={"80%"}
              marginTop={"55px"}
              borderRadius="xl"
            />
          </Flex>
          <Box 
          marginTop={"55px"} 
            width={{ base: "95%", md: "65%" }}
            px={{ base: "0.2rem", md: "3rem" }}
          >
            <Heading py="1rem">{singleProd.brand}</Heading>
            <Text fontSize={"1.5rem"}>{singleProd.title}</Text>
            <Flex p={"1.1rem"} borderBottomWidth="2px" gap="1rem">
              <Flex borderWidth={"2px"} p="4px" borderRadius="md">
                <Flex align={"center"} borderRightWidth="2px" pr={"9px"}>
                  {singleProd.rating} <BiStar fontSize={"1.1rem"} />
                </Flex>
                <Text pl={"9px"}>{singleProd.ratingCount} Ratings</Text>
              </Flex>
            </Flex>
            <Flex fontSize={"1.5rem"} py="1rem" gap="1.5rem" align={"center"}>
              <Text>₹{singleProd.offerPrice}</Text>
              <Text textDecoration={"line-through"} fontSize="1.1rem">
                MRP {singleProd.originalPrice}
              </Text>
              <Text color={"orange.500"} fontSize="1.1rem">
                ({singleProd.discount}% OFF)
              </Text>
            </Flex>
            <Text color={"green.600"}>inclusive of all taxes</Text>
  
       
            <Flex p={{ base: "0.2rem", md: "2rem" }} gap="1rem">
              <Button
                colorScheme={"pink"}
                py="0.5rem"
                px="4rem"
            
                onClick={   
                  handleCart
                  // toast({
                  //   title: "Product is Added to the cart",
                  //   status: "success",
                  //   duration: 4000,
                  //   position: "top",
                  //   isClosable: true,
                  // });
                  
                }
              >
                ADD TO CART
              </Button>
              <Button py="0.5rem" px="2rem">
                {" "}
                WISHLIST
              </Button>
            </Flex>
            <p style={{ color: "gray", textAlign: "center", marginTop: "15px" }}>
            Generally delivered in 5 - 9 days
          </p>
          </Box>
        </Flex>
      )}
 

    
    </div>
     <TopFooter/>
      <MidFooter/>
      <BottomFooter/>
      <About/>
    </>
  );
};

export default SingleProduct;



