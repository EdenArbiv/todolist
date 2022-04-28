import React, { useState } from 'react'

export default function Editcomp({id, tasks, seteditcomp }) {

    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")

    const changeFunc = () => {
        let task = tasks.find(task => task.id == id)
        task.title = title
        task.content = content
        localStorage.setItem('tasks', JSON.stringify(tasks))
        seteditcomp(false)
    }

  return (
    <div className='popup'>
        <button className='exit' onClick={() => seteditcomp(false)}>✖</button>
        <h3>Edit the title:</h3>
        <input type="text" onChange={(e)=> settitle(e.target.value)} />
        <br />
        <h3>Edit the content:</h3>
        <input type="text" onChange={(e)=> setcontent(e.target.value)}  />
        <br /><br />
        <button className='btn2' onClick={() => changeFunc()}>Edit</button>
        </div>
    )
}
