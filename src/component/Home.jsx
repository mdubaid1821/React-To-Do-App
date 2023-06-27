import React, { useEffect } from 'react'
import "./Home.css"
import Task from './Task.jsx'
import { useState } from 'react'

const Home = () => {

  const [task , settasks] = useState(localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[]);
  const [title , setTitle] = useState("");
  const [description , setDescription] = useState("");
  

  const submitHandler = (e) =>{
    e.preventDefault();

    settasks([...task,{title,description}]);
    setTitle("");
    setDescription("")
    
  }
  const deleteTask = (index) =>{
    const filteredArr = task.filter((val,i) =>{
      return i !== index;
    })
    console.log(filteredArr)
    settasks(filteredArr)
    
  }

  useEffect(() => {
   localStorage.setItem("task",JSON.stringify(task))
  }, [task])
  


  return (
    <div className='container'>

      <h1> Tasks </h1>
        
    <form onSubmit={submitHandler}>
    <input type="text"  placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
    <textarea placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} required></textarea>
    <button type='Submit' >Add</button>
    </form>

    {task.map((item,index)=>(
      <Task 
      key={index} 
      title={item.title} 
      description={item.description} 
      deleteTask={deleteTask} 
      index={index}
      />
    ))}

    </div>
    

  )
}

export default Home