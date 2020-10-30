import React, { useState } from 'react'

export default function Home() {

    const error = "cant"
    const error1 = "can"

    const [todoList, setToDoList] = useState([
        {
            name: "daniel",
            age: 23,
            love: false,
            complete: false
        },
        {
            name: "kiran",
            age: 18,
            love: false,
            complete: false
        },
        {
            name: "sam",
            age: 24,
            love: false,
            complete: false
        }
    ])

    const deleteNote = (i) => {
        let array = [...todoList]
        array.splice(i,1)
        setToDoList(array)
    }

    const loveHandle = (index) => {
        console.log("love handle")
        let array = [...todoList]
        console.log(array)
        array[index].love ?
        array[index].love = false :
        array[index].love = true
        setToDoList(array)

    }
    const completeHandle = (index) => {
        console.log("complete handle")
        let array = [...todoList]
        console.log(array)
        array[index].complete ?
        array[index].complete = false :
        array[index].complete = true
        setToDoList(array)
    }

    return (
        <div>
            <ul>
            {
                todoList.map((item, index) => (
                    <li key={index}>
                        Name: {item.complete ? <s>{item.name}</s> : item.name} <br/>
                        love: {item.love ? <p>I am loved</p> : <p>I am not hearted !</p>} 
                        Age: {item.age}<br/>
                        delete: {item.love ? error : error1 }<br/>
                    <button onClick={() => deleteNote(index)}>Delete</button>
                    <button onClick={() => loveHandle(index)}>Love</button>
                    <button onClick={() => completeHandle(index)}>Complete</button>
                    </li>
                    
                ))
            }
            </ul>
        </div>
    )
}
