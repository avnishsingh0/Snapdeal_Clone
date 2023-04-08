import { Button } from '@chakra-ui/button'
import { Card, CardBody, CardFooter } from '@chakra-ui/card'
import { DeleteIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { Heading, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../../Redux/AdminReducer/action'
import pop from '../../../assets/pop.wav'
/*
{
      "id": 4,
      "image": "https://n2.sdlcdn.com/imgs/k/j/e/230X258_sharpened/YHA-Navy-Blue-Cotton-Regular-SDL081148468-1-95a64.jpg",
      "title": "YHA - Navy Blue 100% Cotton Regular Fit Men's Casual Shirt ( Pack of 1 )",
      "price": 539,
      "discount": "70% Off",
      "oldprice": 1799,
      "rating": 5
    }
*/
export const ProductViewCard = ({id,image,title,price,discount,oldprice,rating}) => {
  const play=()=>{
    new Audio(pop).play()
}
const dispatch=useDispatch()


  const handleDelete=(id)=>{
      
    play()
    
      dispatch(deleteProduct(id))
      
  }
  return (
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
  >
    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '200px' }}
      src={image}
      alt='Caffe Latte'
    />
  
    <Stack>
      <CardBody>
        <Heading size='md'>{title}</Heading>
  
        <Text py='2'>
          Rs:{price}--{discount}
        </Text>
        <Text py='2'>
          Old Price-Rs:{oldprice}
        </Text>
      </CardBody>
  
      <CardFooter>
        <Button variant='solid' colorScheme='blue' onClick={()=>handleDelete(id)}>
        <DeleteIcon/>Delete
        </Button>
      </CardFooter>
    </Stack>
  </Card>
  )
}
// import {
//     Badge,
//     Button,
//     Center,
//     Flex,
//     Heading,
//     Image,
//     Link,
//     Stack,
//     Text,
//     useColorModeValue,
//   } from '@chakra-ui/react';
  
//   export const ProductViewCard = ({id,image,brand,price,description,collection,handleDelete}) => {
//     return (
//       <Center py={6}>
//         <Stack
//           borderWidth="1px"
//           borderRadius="lg"
//           w={{ sm: '100%', md: '540px' }}
//           height={{ sm: '476px', md: '20rem' }}
//           direction={{ base: 'column', md: 'row' }}
//           bg={useColorModeValue('white', 'gray.900')}
//           boxShadow={'2xl'}
//           padding={4}>
//           <Flex flex={1} bg="blue.200">
//             <Image
//               objectFit="cover"
//               boxSize="100%"
//               src={image}
//             />
//           </Flex>
//           <Stack
//             flex={1}
//             flexDirection="column"
//             justifyContent="center"
//             alignItems="center"
//             p={1}
//             pt={2}>
//             <Heading fontSize={'2xl'} fontFamily={'body'}>
//             {brand}-{collection}
//             </Heading>
//             <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
//               {price}
//             </Text>
//             <Text
//               textAlign={'center'}
//               color={useColorModeValue('gray.700', 'gray.400')}
//               px={3}>
//               {description}
//               <Link href={'#'} color={'blue.400'}>
//                 #tag
//               </Link>
//               me in your posts
//             </Text>
//             <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
//               <Badge
//                 px={2}
//                 py={1}
//                 bg={useColorModeValue('gray.50', 'gray.800')}
//                 fontWeight={'400'}>
//                 #art
//               </Badge>
//               <Badge
//                 px={2}
//                 py={1}
//                 bg={useColorModeValue('gray.50', 'gray.800')}
//                 fontWeight={'400'}>
//                 #photography
//               </Badge>
//               <Badge
//                 px={2}
//                 py={1}
//                 bg={useColorModeValue('gray.50', 'gray.800')}
//                 fontWeight={'400'}>
//                 #music
//               </Badge>
//             </Stack>
  
//             <Stack
//               width={'100%'}
//               mt={'2rem'}
//               direction={'row'}
//               padding={2}
//               justifyContent={'space-between'}
//               alignItems={'center'}>
//               {/* <Button
//                 flex={1}
//                 fontSize={'sm'}
//                 rounded={'full'}
//                 _focus={{
//                   bg: 'gray.200',
//                 }}>
//                 Message
//               </Button> */}
//               <Button
//                 flex={1}
//                 fontSize={'sm'}
//                 rounded={'full'}
//                 bg={'blue.400'}
//                 color={'white'}
//                 boxShadow={
//                   '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
//                 }
//                 _hover={{
//                   bg: 'blue.500',
//                 }}
//                 _focus={{
//                   bg: 'blue.500',
//                 }}>
//                 Delete
//               </Button>
//             </Stack>
//           </Stack>
//         </Stack>
//       </Center>
//     );
//   }