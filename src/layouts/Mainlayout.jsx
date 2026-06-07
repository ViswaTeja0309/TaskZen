import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import "./Mainlayout.css"

const Mainlayout = () => {
  return (

    <>
    <div className="main-layout">
      <div className="sidebar">
    <Sidebar/>
    </div>
    <div className="outlet">
    <Outlet/>
    </div>
    </div>
    </>
  )
}

export default Mainlayout