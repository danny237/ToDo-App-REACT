import React, { useState } from 'react'
import './TodoItems.css'
// import Checkbox from '@material-ui/core/Checkbox';

const COMPLETE_STYLE = { backgroundColor: "#008000", cursor: "pointer", borderRadius: "50%" }
const NOT_COMPLETE_STYLE = { backgroundColor: "#fff", cursor: "pointer", borderRadius: "50%"}
const HEARTED_STYLE = { color: "red", cursor: "pointer" }
const NOT_HERTED_STYLE = { color: "#fff", cursor: "pointer" }

export default function TodoItems({ tasks, setTasks }) {

    const completeHandler = (index) => {
        let newArray = [...tasks]
        if (newArray[index].isComplete) {
            newArray[index].isComplete = false
            setTasks(newArray)
        } else {
            newArray[index].isComplete = true
            setTasks(newArray)
        }
    }

    const deleteHandler = (index) => {
        let newArray = [...tasks]
        newArray.splice(index, 1)
        setTasks(newArray)
    }

    const heartHandler = (index) => {
        let newArray = [...tasks]
        if (newArray[index].isHearted) {
            newArray[index].isHearted = false
            setTasks(newArray)
        } else {
            newArray[index].isHearted = true
            setTasks(newArray)
        }
    }

    return (
        <div className="tasks-items d-flex flex-column-reverse">
            {
                tasks.map((item, index) => (
                    <div key={index} className="item m-2 mb-3">
                        <div className="row">
                            <div className="col-10 d-flex flex-column">
                                <div className="align-self-start m-2">
                                    {
                                        item.isComplete ?
                                            <s><h2>{index+1}. {item.title}</h2></s> :
                                            <h2>{index+1}. {item.title}</h2>
                                    }
                                </div>
                                <div className="align-self-start mx-2">
                                    {
                                        item.isComplete ?
                                            <s><p>{item.description}</p></s> :
                                            <p>{item.description}</p>
                                    }
                                </div>
                                <div className="align-self-start m-2">
                                    <small>
                                        {item.created_at}
                                        <i
                                            onClick={() => heartHandler(index)}
                                            className="fas fa-heart mx-2"
                                            style={item.isHearted ? HEARTED_STYLE : NOT_HERTED_STYLE}></i>
                                        <i
                                            onClick={() => deleteHandler(index)}
                                            className="fas fa-trash-alt disabled"
                                            style={{ cursor: "pointer" }} ></i>
                                    </small>
                                </div>
                            </div>
                            <div className="col-2 d-flex">
                                <div className="align-self-center ml-5">
                                        <i className="far fa-check-circle fa-2x"
                                            style={item.isComplete ? COMPLETE_STYLE : NOT_COMPLETE_STYLE}
                                            onClick={() => completeHandler(index)}
                                        ></i>                             
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}