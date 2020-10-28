import React, { useState, useEffect} from 'react'
import './Create.css'
import Error from './Error'

export default function Create({tasks, setTasks}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(false)

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
                created_at: date.toLocaleString(),
                isComplete: false,
                isHearted: false
            }
            setTasks([...tasks, newTask])
            setTitle("")
            setDescription("")
        }
    }

    return (

        <div className="create-task"> 
            <form className="form-group" onSubmit={(e) => addHandler(e)}>
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
                <button type="submit" className="add-btn btn p-2 form-control">Add</button>
            </form>
            {error && <Error />}
            
        </div>
    )
}
