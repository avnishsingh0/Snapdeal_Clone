import React from 'react'
import Chart1 from '../Components/Chart1'
import Chart2 from '../Components/Chart2'
import { SimpleGrid } from '@chakra-ui/react'
import { Sidebar } from './Sidebar'
import NavBar from '../Components/NavBar'
import styled from 'styled-components'
import NavPage from '../Components/NavPage'
export const Dashboard = () => {
  return (
    
    
    <div className='side0'>
        {/* <Nav>
            <h1 style={{textAlign:"center",padding:"20px",fontWeight:"bolder",color:"GrayText"}}>MegaDeals Admin Panel</h1>
        </Nav> */}
        <NavBar/>
        <Side>
        <div className='Side1'><Sidebar/></div>
        <div className='Side2'>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",marginBottom:"40px"}}>
      <div style={{height:"auto",textAlign:"center"}}><h1>Product Data In Line Chart</h1>
      <Chart1/>
      </div>
      <div style={{height:"350px",textAlign:"center"}}><h1>Ordered Data in Line</h1>
      <Chart2/>
      </div>
      
    </div>
        </div>
        </Side>
    </div>
  )
}
const Side=styled.div`

    display:flex;
    flex-direction: row;
    /* border: 2px solid black; */
    height: auto;

`