import React from 'react'
import { FiSettings } from "react-icons/fi";
import {Link , NavLink} from 'react-router-dom'
const Sidebar = () => {

  return (
    <>

    <div className="logo-name">
      <h1>TASKZEN</h1>
    </div>
        <nav>
        <NavLink to="/dashboard">DashBoard</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/goal">Goal</NavLink>
        <NavLink to="/analytics">Analytics</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        </nav>

        

        
    </>
    
  )
}

export default Sidebar