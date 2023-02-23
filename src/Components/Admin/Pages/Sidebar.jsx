import React from 'react'
import { NavLink } from 'react-router-dom'
import { SidebarData } from './SidebarData'
// import style from '../../Components/Admin/Components/Main.css'
export const Sidebar = () => {
    // const activeLink = 'hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-red-500'
    // const normalLink = 'hover:bg-red-500 pl-7 mt-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold'
  return (
    <div>
        {SidebarData.map((el,id)=>{
            return(
                <div key={el.id}>
                    <NavLink to={el.path}
                    className="bar"
                    >
                        <span>{el.icon}</span>
                        <span>{el.title}</span>
                    </NavLink>
                </div>
            )
        })}
    </div>
  )
}
