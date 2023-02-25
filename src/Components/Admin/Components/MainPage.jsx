import React from 'react'
import styled from 'styled-components'
import { Sidebar } from '../Pages/Sidebar'
import style from './Main.css'
import NavBar from './NavBar'
import NavPage from './NavPage'
export const MainPage = () => {
  return (
    <div>
        {/* <Nav>
            <h1 style={{textAlign:"center",padding:"20px",fontWeight:"bolder",color:"GrayText"}}>MegaDeals Admin Panel</h1>
        </Nav> */}
        <NavBar/>
        <Side >
        <div className='Side1'><Sidebar/></div>
        <div className='Side2'><NavPage/></div>
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


const Nav=styled.div`
    background-color:#CEEDC7;
    height: 60px;
`
