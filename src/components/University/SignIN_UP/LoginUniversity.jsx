import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logsign.css';
import axios from "../../../axios";
import {  Redirect } from "react-router-dom";

function LoginUniversity() {
    const input = {
        email: "",
        password: ""
    }
    const [login, setLogin] = useState(input)
    const { email, password } = login

    const handleInputChange = e => {
        setLogin({ ...login, [e.target.id]: e.target.value })
    }

    const handleFinalChange = e => {

        axios.post('/university/login', login)
            .then((res) => {
                if (!res.data.auth) {
                } else {
                    let temp = res.data.result._id;
                    localStorage.setItem("universitytoken", res.data.token)
                    localStorage.setItem("university", temp)
                    window.location.reload();
                }
            })
    }

    return (
        (!localStorage.getItem('universitytoken') ?
        <div className="auth-wrapper">
            <div className="auth-inner">
                <h3>University Login IN</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" id="email" value={email} onChange={handleInputChange} />
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
                <Row>
                    <Button variant='primary' onClick={handleFinalChange}>Login</Button>
                    <Col><Button variant='danger' href={'/university/register'}>New Accout</Button></Col>
                </Row>
                
                
            </div>
        </div>
         : <Redirect to={'/university/home'} />)
    )
}

export default LoginUniversity
