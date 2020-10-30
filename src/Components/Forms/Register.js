import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const EMAIL_FORMAT = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function Register(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [error, setError] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        if ((email !== "" && password !== "" && confirmPassword !== "") &&
            (password === confirmPassword) && (email.match(EMAIL_FORMAT))) {
            let newUser = {
                email,
                password
            }
            let newArray = props.users
            newArray.push(newUser)
            props.setUsers(newArray)
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            props.history.push("/")
        } else {
            setError(true)
        }
    }

    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="container">
                    <a className="navbar-brand" href="#">ToDo App</a>
                    <Link to="/">
                        <button
                            className="btn logout-btn"
                        >Login</button>
                    </Link>
                </div>
            </nav>
            <div className="container">

                <h2 className="mt-4">User Registration Form</h2>
                <div className="register-page justify-content-center">
                    <form className="form-group my-4" onSubmit={(e) => submitHandler(e)}>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Email" />

                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control my-2"
                            type="password"
                            placeholder="Password" />

                        <input
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="form-control"
                            type="password"
                            placeholder="Confirm Password" />
                        <button className="btn btn-primary mt-2" type="submit">Submit</button>
                        {error && <p className="alert alert-danger my-2">Something Went Wrong !</p>}
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}
