import React, { useState, useEffect} from 'react'
import './Create.css'

export default function Create({tasks, setTasks}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
    }, [])

    const addHandler = (e) => {
        e.preventDefault()
        const newTask = {
            title,
            description
        }

        setTasks([...tasks, newTask])
    }

    return (

        <div className="create-task"> 
            <form className="form-group">
                <input
                className="form-group form-control"
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                />
                <textarea 
                className="form-group form-control"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button onClick={(e) => addHandler(e)} className="add-btn btn form-control">Add</button>
            </form>
            
        </div>
    )
}
