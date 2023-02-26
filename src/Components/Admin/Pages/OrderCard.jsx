import { DeleteIcon } from '@chakra-ui/icons'
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import Toast from './Toast'

export const OrderCard = ({id,image,title,price,discount,oldprice,rating}) => {

    const toast = useToast()

    // const handleSold=(id)=>{
    //     console.log('hello',id)
    //     toast({
    //         title: 'Account created.',
    //         description: "We've created your account for you.",
    //         status: 'success',
    //         duration: 9000,
    //         isClosable: true,
    //       })
        
          
    //   }
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
        <Button variant='solid' colorScheme='red' onClick={() =>
        toast({
          title: 'Successfully Dispatched.',
          description:'You will receive it within 3 working days.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }>
        Sold
        </Button>
      </CardFooter>
    </Stack>
  </Card>
  )
}
