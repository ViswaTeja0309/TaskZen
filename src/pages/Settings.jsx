import React , {useState} from 'react'
import './Settings.css'

const Settings = ({task,setTask,goal,setGoal,userName,setUserName}) => {

  const [newName,setNewName]=useState("");

  const updateName = () => {

    if(!newName.trim()) return;

    setUserName(newName);

    setNewName("");

  }

  const resetWorkspace = () => {

   setTask([]);
   setGoal(0);
   setUserName("");

   localStorage.clear();
}

  return (

    <>

    <div className="setting-container">

      <div className="user-name">
        <h1>Current User : - </h1>
        <p>{userName}</p>
      </div>

      <h2>Change User Name</h2>

      <div className="change-name">
    
        <input className="new-name-input" value={newName} placeholder="Enter new name" onChange={(e) => setNewName(e.target.value)}/>

        <button className="update-name-btn" onClick={updateName}>Update</button>
      </div>
      
      <div className="reset-old-data">

        <h3>Reset Workspace</h3>
      <button className="reste-btn" onClick={resetWorkspace}>Reset</button>
      </div>
    </div>
    
    
    </>
  )
}

export default Settings