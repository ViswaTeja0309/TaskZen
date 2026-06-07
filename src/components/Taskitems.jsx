import React from 'react'
import {useNavigate} from "react-router-dom"
import "./Taskitems.css"
import { RiDeleteBin6Line } from "react-icons/ri";

const Taskitems = ({task,Task_Status,DeleteTask,openedTaskId}) => {

  const navigate = useNavigate();



  return (

   <>

    <div className="task-item" onClick={()=>navigate(`/tasknotes/${task.id}`)}>

        <h3>{task.title} </h3>

       <p className={task.completed ? "completed" : "pending"}>
                   {task.completed ? "Completed" : "Pending..."}
       </p>


      <div className="btns">
        
        <button className="task-completed-btn" onClick={ (e) => { 
          
          e.stopPropagation();
                                                 
          Task_Status(task.id)

          }} >Task Completed</button>

        <button className="delete-btn" onClick={(e)=> {
          
          e.stopPropagation();

          DeleteTask(task.id)}}><RiDeleteBin6Line/>
          
        </button>

      </div>



    </div>
  

   </>
  )
}

export default Taskitems