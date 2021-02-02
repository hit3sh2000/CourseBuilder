import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logsign.css';
import axios from "../../../axios";

import { Redirect, Link } from "react-router-dom";
function RegisterUniversity() {
    const input = {
        Us_name:'',
        Us_email:'',
        Us_password:'',
        Us_desc:'',
        Us_address:'',
        Us_ratings:''
    }

    const [universityRegister, setUniversityRegister] = useState(input)
    const { Us_name, Us_email, Us_password, Us_desc,Us_address,Us_ratings } = universityRegister

    const handleInputChange = e => {
        setUniversityRegister({ ...universityRegister, [e.target.id]: e.target.value })
        console.log(universityRegister);

    }
    const handleFinalChange = e => {
        axios.post('/university', universityRegister)
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>University Name</label>
                    <input type="text" className="form-control" placeholder="First name" id="Us_name" value={Us_name} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>University Email</label>
                    <input type="email" className="form-control" placeholder="University Email" id="Us_email" value={Us_email} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="Us_password" value={Us_password} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>University Description</label>
                    <input type="text" className="form-control" placeholder="Enter University Description" id="Us_desc" value={Us_desc} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>University Ratings</label>
                    <input type="text" className="form-control" placeholder="Enter University Ratings" id="Us_ratings" value={Us_ratings} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>University Address</label>
                    <input type="text" className="form-control" placeholder="Enter University Address" id="Us_address" value={Us_address} onChange={handleInputChange} />
                </div>

                <Link to={'/university'}><Button className="btn btn-primary btn-block" variant='primary' onClick={handleFinalChange}>Sign Up</Button> </Link>
                <p className="forgot-password text-right">
                    Already registered <a href="/university">sign in?</a>
                </p>
            </div>
        </div>
    )
}

export default RegisterUniversity
