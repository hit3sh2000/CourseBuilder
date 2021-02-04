import React, { useState } from "react";
// import { Navbar,Nav,NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logsign.css';
import axios from "../../axios";
import { Redirect } from "react-router-dom";


function Login() {
    const input = {
        username: "",
        password: ""
    }
    const [login, setLogin] = useState(input)
    const { username, password } = login

    const handleInputChange = e => {
        setLogin({ ...login, [e.target.id]: e.target.value })
    }

    const handleFinalChange = e => {

        axios.post('/user/login', login)
            .then((res) => {
                if (!res.data.auth) {
                } else {
                    let temp = res.data.result._id;
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("user", temp)
                    window.location.reload();

                }
            })
    }



    return (

        (!localStorage.getItem('token') ?
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Login In</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" id="username" value={username} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="password" value={password} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button className="btn btn-primary btn-block" onClick={handleFinalChange} >Login</button>
                </div>
            </div>

            : <Redirect to={'/'} />)
    )
}


export default Login;