import React, { useState } from 'react'
import './LoginStyle.css'
import Error from './Error'

import { Link } from 'react-router-dom'

import {
    INITIAL_STATE,
} from './Constants'

export default function Login({users, setLoginStatus, loginStatus}) {

    const [email, setEmail] = useState(INITIAL_STATE)
    const [password, setPassword] = useState(INITIAL_STATE)
    const [errorStatus, setErrorStatus] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault();

        if (email === "" || password === ""){
            setErrorStatus(true)
        }else{
            for(let i=0; i<users.length; i++){
                if(users[i].email === email && users[i].password === password){
                    setLoginStatus(true)
                }else{
                    setErrorStatus(true)
                    return
                }
            }
            setErrorStatus(false)
        }
    }


    return (
        <div className="login-page">

            <nav className="navbar">
                        <div className="container">
                        <a className="navbar-brand" href="#">ToDo App</a>
                            <Link to="/register">
                            <button
                                className="btn logout-btn"

                            >Register</button>
                            </Link>
                      
                        </div>
                    </nav>

            <div className="login-container d-flex justify-content-center align-items-center">
                <div className="box text-center col-md-5 col-sm-10">

                    {/* header section */}
                    <div className="header-section mt-5 mb-3">
                        <h2 className="font-weight-bold">Sign In</h2>
                    </div>

                    {/* form */}
                    <form className="form-group  d-flex flex-column justify-content-center">
                        <div className="">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                value={email}
                                className="border-0 p-2 mx-auto my-3 col-9 form-control text-center"
                                placeholder="Email"
                                required />
                        </div>

                        <div className="">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                value={password}
                                className="border-0 p-2 mx-auto my-3 col-9 form-control text-center"
                                placeholder="Password"
                                required
                            />
                            <button
                                onClick={(e) => submitHandler(e)}
                                className="authenticate-btn btn col-5 my-3">Authenticate</button>
                        </div>
                    </form>
                    {
                        errorStatus && <Error />
                    }
                </div>
            </div>
        </div>
    )
}
