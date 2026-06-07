import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Dashboard = ({task,goal,userName}) => {
  
const completed_Task = task.filter((task)=>task.completed).length;
const pending_Task = task.filter((task)=>!task.completed).length;
const Total = completed_Task +  pending_Task ;
const productScore = ( Total===0? 0 : Math.round((completed_Task / Total*100)) );
let progress = ( goal===0? 0 : Math.round((completed_Task / goal*100)) );

if (progress>100){

  progress = 100;
}

  return (

    <>
    <div className="heading">
    <h1>Hello , {userName} </h1>
    <p>Ready to achieve your goals today?</p>
    </div>

    <section className="cards">

      <NavLink className='nav-link' to='/tasks'>
      <div className="dashboard-card" id="completed-tasks">
        <h2>Completed Tasks</h2>
        <h3>{completed_Task}</h3>
      </div>
      </NavLink>
       
      <NavLink className='nav-link' to='/tasks'>
      <div className="dashboard-card" id="pending-tasks">
        <h2>Pending Tasks</h2>
        <h3>{pending_Task}</h3>
      </div>
      </NavLink>

      <NavLink className='nav-link' to='/goal'>
      <div className="dashboard-card" id="focus-hours">
        <h2>Goal Progress</h2>
        <h3>{progress}%</h3>
      </div>
      </NavLink>
      
      
      <NavLink  className='nav-link' to='/analytics'>
      <div className="dashboard-card" id="productivity-score">
        <h2>Productivity Score</h2>
        <h3>{productScore}%</h3>
      </div>
      </NavLink>
      
    </section>
    </>
    
  )
}

export default Dashboard