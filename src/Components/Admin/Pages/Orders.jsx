import { Box} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { orderProduct } from '../../../Redux/AdminReducer/action'
import NavBar from '../Components/NavBar'
import NavPage from '../Components/NavPage'
import { OrderCard } from './OrderCard'
import { Sidebar } from './Sidebar'

export const Orders = () => {

    const product=useSelector((store)=>store.AdminReducer.cart
    )
  
 
   
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(orderProduct)
        
    }, [])
  return (
    
    <div className='side0'>
        <NavBar/>
        <Side>
        <div className='Side1'><Sidebar/></div>
        <div className='Side2'>
        <Box>
        {product.length>0 && product.map((el)=>{

          return <OrderCard key={el.id} {...el}/>
        })}
    </Box>
        </div>
        </Side>
    </div>
  )
}


const Side=styled.div`
    display:flex;
    flex-direction: row;
    height: auto;
`

