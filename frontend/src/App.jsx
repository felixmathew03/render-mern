import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import route from './route.js';

function App() {
  const [title,setTitle] = useState('')
  const [tasks,setTasks] = useState([])
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=async()=>{
    try {
      const {data}=await axios.get(`/api/todos`)
    setTasks([...data])
    } catch (error) {
      console.log(error);
      
    }
    
  }
  const handleSubmit = async()=>{
    try {
      console.log(title);
    const {data} = await axios.post(`/api/todos`,{title})
    setTasks([...tasks,data])
    setTitle('')
    } catch (error) {
        console.log(error);
        
    }
  }
  return (
    <div>
      <input type="text" placeholder='Enter task' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <button onClick={handleSubmit}>Add task</button>
      <div>
        {tasks.map(task=><div>
          <h1>{task.title}</h1>
          <h1>{task.completed?'Completed':'Not Completed'}</h1>
        </div>)}
      </div>
    </div>
  )
}

export default App
