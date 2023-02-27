import React from 'react'
import styled from 'styled-components'
import { Sidebar } from '../Pages/Sidebar'
import style from './Main.css'
import NavBar from './NavBar'
// import NavBar from './NavBar'
import NavPage from './NavPage'
export const MainPage = () => {
  return (
    <div className='side0'>
        <NavBar/>
        <Side>
        <div className='Side1'><Sidebar/></div>
        <div className='Side2'><NavPage/></div>
        </Side>
    </div>
  )
}

const Side=styled.div`
    display:flex;
    flex-direction: row;
    height: auto;
`


const Nav=styled.div`
    background-color:#CEEDC7;
    height: 60px;
`
