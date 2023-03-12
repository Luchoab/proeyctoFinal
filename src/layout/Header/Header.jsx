import React from 'react'
import { TitleHome } from '../../components/TitleHome/TitleHome'
import { Sidebar } from '../Sidebar/Sidebar'



export const Header = () => {
  return (
    <div>
      <Sidebar/>
      <TitleHome/> 
    </div>
  )
}
