
import React ,{useState} from 'react'
import Taskitems from '../components/Taskitems'

const Tasks = ({ task, setTask }) => {


  const [openedTaskId, setOpenedTaskId] = useState(null);


  const [taskInput , setTaskInput] = useState("")

  const DeleteTask = (id) => {

    const Delete_Task = task.filter((task)=>{

               return id!==task.id;

    });

    setTask(Delete_Task)
  };

  const Task_Status = (id)=>{
          
    const updateTask = task.map((task)=>{

           if(id === task.id){

            return {

              ...task,completed:!task.completed
            };
           }

           return task

     });

     setTask(updateTask)
  }
  

  const AddTask = ()=> {

    if(!taskInput.trim()) return;

    const newTask = {

      id:Date.now(),
      title : taskInput,
      completed : false,
      notes:""
    };

    setTask([...task,newTask]);
    setTaskInput("");
  };


  return (

    <>
    
    <div className="task-container">
      
      <h1>TASKS</h1>
      <p>Manage your daily workflow efficiently.</p>

      <div className="task-input">

        <input className='input' 
               type="text" 
               placeholder='Enter a  task name' 
               value={taskInput}
               onChange={(e)=>setTaskInput(e.target.value)}>

        </input>

        <button className="add-task-btn" onClick={AddTask}>Add Task</button>

      </div>
      </div>
      
      <div className="task-list">
        {task.map((task) => (
           <Taskitems key={task.id} task={task} Task_Status={Task_Status} DeleteTask={DeleteTask} openedTaskId={openedTaskId} />
        ))}
      </div>

    </>
  )
}

export default Tasks