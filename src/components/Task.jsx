import React, { useState } from 'react';
import Editcomp from './Editcomp';

export default function Task({task, id, settasks, tasks}) {

    const [editcomp, seteditcomp] = useState(false)

    const deleteFunc = (id) => {
        let filtered = tasks.filter(task => task.id !== id)
        settasks(filtered)
        localStorage.setItem('tasks', JSON.stringify(filtered));
     
    }

    const editFunc = () => {
        seteditcomp(true)
    }

    if(editcomp){
        return <Editcomp id={id} seteditcomp={seteditcomp} settasks={settasks} tasks={tasks}/>
    }

  return (
    <div className='task' id={tasks.length % 2 == 0 ? "bcg" : "bcg2"}>
        <h2>{task.title}</h2>
        <p>{task.content}</p>
        <button className='btn' onClick={()=> deleteFunc(id)}>X</button>
        <button className='edit' onClick={()=> editFunc()}>🖊</button>
    </div>
  )
}
