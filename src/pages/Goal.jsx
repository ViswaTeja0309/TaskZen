import React ,{useState,useEffect} from 'react'
import "./Goal.css"

const Goal = ({task,goal,setGoal}) => {

 const completed_Task = task.filter((t)=>t.completed).length;

 let statusMessage = ""

 if(goal===0) {
   
     statusMessage = "Set a goal to get started 🎯";

 }

 else if(completed_Task < goal) {

     statusMessage ="Keep going! 🚀";
 }

 else if(completed_Task === goal) {

      statusMessage = "Goal Completed Successfully! 🎉"
 }

 else if(completed_Task > goal) {

  statusMessage = "Goal Exceeded! Amazing Work! 🏆";
 }

 const numberBtn = (x) => {
     
   setGoal(x);

 };

  return (
    <>

    <div className="goal-container">

      <div className="header">
        <h1>Today's Goal</h1>
        <p>Set a target for today's productivity</p>
      </div>

      <div className="number-btns">
        <button className="btn" onClick={()=>numberBtn(1)}>1</button>
        <button className="btn" onClick={()=>numberBtn(2)}>2</button>
        <button className="btn" onClick={()=>numberBtn(3)}>3</button>
        <button className="btn" onClick={()=>numberBtn(4)}>4</button>
        <button className="btn" onClick={()=>numberBtn(5)}>5</button>
      </div>

      <div className="task-header">
        <h2>Today's Goal : {goal} Tasks</h2>
      </div>

      <div className="goal-progress">
        <h3>Goal Progress</h3>
        <div className="progress">
           {completed_Task} / {goal} Tasks Completed
        </div>
       
       <div className="status-message">

        {statusMessage}
        
       </div>

      </div>
    </div>
    
    </>
  )
}

export default Goal