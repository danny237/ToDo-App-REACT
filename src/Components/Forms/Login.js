import React, { useState } from 'react'
import './LoginStyle.css'
import Error from './Error'

import {
    INITIAL_STATE,
    ADMIN_EMAIL,
    ADMIN_PASSWORD,
} from './Constants'

export default function Login() {

    const [email, setEmail] = useState(INITIAL_STATE)
    const [password, setPassword] = useState(INITIAL_STATE)
    const [errorStatus, setErrorStatus] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault();

    }

    return (
        <div className="login-page">
            <div className="login-container d-flex justify-content-center align-items-center">
                <div className="box text-center col col-md-7 col-lg-5">

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
                                className="authenticate-btn col-5 my-3">Authenticate</button>
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
