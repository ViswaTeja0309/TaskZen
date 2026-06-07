import { useParams , useNavigate} from "react-router-dom"
import React from 'react'

const TaskNote = ({task,setTask}) => {

    const navigate = useNavigate();

    const { id } = useParams();
    const currentTask = task.find((x)=> {

       return  x.id===Number(id)
    });

    if (!currentTask) {

        return <h1>Task Not Found</h1>;
    }

    const handleNotes = (e) => {

   const noteText = e.target.value;

   const updatedTasks = task.map((t) => {

      if (t.id === Number(id)) {

         return {
            ...t,
            notes: noteText
         };
      }

      return t;
   });

   setTask(updatedTasks);
};

  return (
    
    <>
    <div className="notes-container">
    <div className="notes-header">
        
        <h1>TaskName :- {currentTask.title}</h1>
    
    </div>

    <div className="text-area">

        <textarea className="area" value={currentTask.notes} placeholder="Write your thoughts, ideas, or task notes here..." onChange={handleNotes}/>

    </div>
    
    <div className="back-btn">

        <button className="back" onClick={()=>navigate(`/tasks`)}>back</button>
    </div>
    </div>
    </>
  )
}

export default TaskNote