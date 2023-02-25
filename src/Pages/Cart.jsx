import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';


import Bag from './Bag';
import { BiCart } from 'react-icons/bi';
import { BsCart } from 'react-icons/bs';




export const Cart=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('full')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
  
  return (
    <>
          
        <Text
          onClick={() => handleSizeClick(size)}
          
        fontWeight={'bold'} mt={1}
        ><BsCart/> </Text>
     

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent p={0}>
          <ModalHeader>Shopping Cart  (2 Items)</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Bag/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}