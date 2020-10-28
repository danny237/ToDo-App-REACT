import React, { useEffect, useState } from 'react'
import Create from './Create'
import EmptyMessage from './EmptyMessage'
import TodoItems from './TodoItems'
import './Todo.css'

const EMPTY_MESSAGE = "Taks is Empty !"

const date_now = new Date()

export default function Todo() {

    const [tasks, setTasks] = useState([])
    const [isTasksEmpty, setTasksStatus] = useState(true)

    useEffect(() => {
        if (tasks.length != 0) {
            setTasksStatus(false)
        } else {
            setTasksStatus(true)
        }
    })

    return (
        <div className="todo-page">
            <nav className="navbar">
                <div className="container">
                    <a className="navbar-brand" href="#">ToDo App</a>
                    <button className="btn logout-btn">Logout</button>
                </div>
            </nav>

            <div className="container col-md-7">

                <div className="date mt-3 d-flex">
                    <div className="col">
                        <p className="muted">{date_now.toLocaleDateString()}</p>
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
                <div className="m-2 row">
                    <div>
                        <h2>Tasks : {tasks.length}</h2>
                    </div>
                </div>

                {/* todo list */}
                <div className="todo-list  col-12 p-2">
                    {
                        isTasksEmpty ?
                            <EmptyMessage /> :
                            <TodoItems tasks={tasks} setTasks={setTasks} />
                    }
                </div>
            </div>
        </div>
    )
}
