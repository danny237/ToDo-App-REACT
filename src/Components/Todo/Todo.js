import React, { useEffect, useState } from 'react'
import Create from './Create'
import './Todo.css'

export default function Todo() {

    const [date, setDate] = useState(new Date())
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        console.log(tasks)
    })

    return (
        <div className="todo-page">
            <nav className="navbar">
                <div className="container">
                    <a className="navbar-brand" href="#">ToDo App</a>
                    <button className="btn logout-btn">Logout</button>
                </div>
            </nav>

            <div className="container">

                <div className="create-box">
                        <div className="date mt-3 d-flex">
                            <div className="col">
                                <p className="muted">{date.toLocaleDateString()}</p>
                                <h2>Today</h2>
                            </div>
                            <div className="col-10">
                                <h2>Create</h2>
                            </div>
                        </div>

                        {/* Add tasks */}
                        <div className="add-task p-3">
                             <Create tasks={tasks} setTasks={setTasks} />
                        </div>
                </div>
            </div>


        </div>
    )
}
