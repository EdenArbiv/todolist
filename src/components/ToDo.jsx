import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Task from './Task';

export default function ToDo() {

    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [tasks, settasks] = useState([])

    
    useEffect(() => {
        if(localStorage.getItem('tasks')){
            settasks(JSON.parse(localStorage.getItem('tasks')))
        }
    }, [])
    
    const AddToDo = (title, content) => {
     
        settasks([...tasks, {id:uuid() ,title:title, content:content}])
        localStorage.setItem('tasks', JSON.stringify([...tasks, {id:uuid() ,title:title, content:content}]));  
        console.log(tasks)
    }

  return (
    <div className='todo'>

        <div className='addtodo'>
        <h3>Add New Task:</h3>
        <br />
        <h5>Title</h5>
        <input type="text" className='title' onChange={(e) => settitle(e.target.value)}/>
        <h5>content</h5>
        <input type="text" className='content'  onChange={(e) => setcontent(e.target.value)} />
        <br />
        <button onClick={() => AddToDo(title, content)}>Add</button>
        </div>
        <div className='list'>
        <h3>Tasks List:</h3>
        {
            tasks ? tasks.map(task=> <Task key={task.id} id={task.id} task={task} tasks={tasks} settasks={settasks} /> ) : <h6>No Tasks yet</h6>
        }
        </div>
    </div>
  )
}
