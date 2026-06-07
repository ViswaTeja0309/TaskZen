
import React , {useState ,useEffect} from 'react'
import Mainlayout from './layouts/Mainlayout'
import { BrowserRouter,
  Routes,
  Route ,
  Navigate
}  from "react-router-dom"

import "./App.css"

import Dashboard from "./pages/Dashboard"
import Goal from "./pages/Goal"
import Analytics from "./pages/Analytics"
import Settings from "./pages/Settings"
import Tasks from './pages/Tasks'
import TaskNotes from './pages/TaskNote'
const App =() => {

  const [task, setTask] = useState(()=> {


    const savedTasks = localStorage.getItem("task");

    return savedTasks?JSON.parse(savedTasks):[]

  }
  
  
  );

  useEffect(()=>{

          localStorage.setItem("task",JSON.stringify(task))

  },[task]);

  const [goal,setGoal] = useState(()=>{
  
  const savedTarget = localStorage.getItem("goal");
  
          return savedTarget ? JSON.parse(savedTarget) : 0;
  
  });

  useEffect(()=>{
   
        localStorage.setItem("goal",goal);
   
  },[goal]);


  const [userName , setUserName] = useState(()=>{;

  const savedName = localStorage.getItem("userName");

  return savedName?JSON.parse(savedName):""

  });

  useEffect(()=>{

    localStorage.setItem("userName",JSON.stringify(userName))
  },[userName]);

  const [nameInput , setNameInput]=useState("");
 
  const saveUserName = () => {

    if(!nameInput.trim()) return;

   setUserName(nameInput);
}

if(userName==="") {

  return (
          
<>
    <div className="login-container">

      <div className="login-header">

               <h1>TASKZEN</h1>

              <p>Your personal productivity workspace</p>
      
        </div>

          <div className="input-field">

            <h1>Login With Your Name</h1>
          
          <input className="user-input-login"
                
                placeholder='Enter Your Name '
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
          />

          <button className="user-continue-btn" onClick={saveUserName}>
            Continue
          </button>

          </div>
    </div>
</>
          
        )
}

  return (

    <>
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Navigate to="/dashboard"/> }/>
      <Route element={<Mainlayout />}>
      <Route path='/dashboard' element={<Dashboard task={task} goal={goal} userName={userName}/>}/>
      <Route path='/goal' element={<Goal task={task} goal={goal} setGoal={setGoal}/>}/>
      <Route path='/tasks' element={<Tasks task={task} setTask={setTask} />} />
      <Route path='/settings' element={<Settings task={task} setTask={setTask}  goal={goal} setGoal={setGoal} userName={userName} setUserName={setUserName}/>}/>
      <Route path='/analytics' element={<Analytics task={task}/>}/>
      <Route path='/tasknotes/:id' element={<TaskNotes task={task} setTask={setTask}/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
      
  
    </>

  )
}

export default App