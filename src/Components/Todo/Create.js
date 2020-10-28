import React, { useState, useEffect} from 'react'
import './Create.css'
import Error from './Error'

export default function Create({tasks, setTasks}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
    }, [])

    const addHandler = (e) => {
        e.preventDefault()

        if (title === "" || description === ""){
            setError(true)
        }else{
            setError(false)
            const date = new Date()
            const newTask = {
                title,
                description,
                created_at: date.toLocaleString()           
            }
            setTasks([...tasks, newTask])
        }
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
            {error && <Error />}
            
        </div>
    )
}
