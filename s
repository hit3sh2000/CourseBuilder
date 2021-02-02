import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import './Logsign.css';
import axios from "../../axios";
import Files from 'react-files'

function Signup() {
    const input = {
        U_firstname: "",
        U_lastname: "",
        U_username: "",
        U_email: "",
        U_password: "",
        U_qualification: "",
        U_age: "",
        U_gender: "",
        U_contact: "",
        U_address: "",
        U_avatar: ''
    }


    const [users, setUsers] = useState(input)

    const {
        U_firstname, U_lastname,
        U_username, U_email,
        U_password, U_qualification,
        U_age, U_gender, U_contact, U_address, U_avatar
    } = users

    const handleInputChange = e => {
        setUsers({ ...users, [e.target.id]: e.target.value })
    }

    const handleFinalChange = e => {
        // e.preventDefault();
        console.log(users);
        // axios.post('/user', { users })
    }
    const handleInputChangeForAvatar = e => {
        console.log(e.target.id.files[0]);
        // setUsers({ ...users, [e.target.id]: document.getElementById("U_avatar").files[0] })
    }

    function onFilesChange(files) {
        console.log(files[0].preview.url)
        setUsers({ ...users, U_avatar: files[0].preview.url })
    }

    function onFilesError(error, file) {
        console.log('error code ' + error.code + ': ' + error.message)
    }

    return (
        <form>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" id="U_firstname" value={U_firstname} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" id="U_lastname" value={U_lastname} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" id="U_username" value={U_username} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" className="form-control" placeholder="Enter Email" id="U_email" value={U_email} onChange={handleInputChange} />
                    </div>


                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="U_password" value={U_password} onChange={handleInputChange} />
                    </div>


                    <div className="form-group">
                        <label>Qualification</label>
                        <input type="text" className="form-control" placeholder="Enter qualification" id="U_qualification" value={U_qualification} onChange={handleInputChange} />
                    </div>


                    <div className="form-group">
                        <label>Your Age</label>
                        <input type="text" className="form-control" placeholder="Enter Age" id="U_age" value={U_age} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <input type="text" className="form-control" placeholder="Enter Gender" id="U_gender" value={U_gender} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Contact No.</label>
                        <input type="text" className="form-control" placeholder="Enter Contact Number" id="U_contact" value={U_contact} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Enter Address" id="U_address" value={U_address} onChange={handleInputChange} />
                    </div>

                    {/* <div className="form-group">
                        <label>UPLOAD PROFILE PICTURE</label>
                        <input type="file" className="form-control" id="U_avatar" value={U_avatar} onChange={handleInputChangeForAvatar} />
                    </div> */}


                    <Files
                        className='files-dropzone'
                        onChange={onFilesChange}
                        onError={onFilesError}
                        accepts={['image/png', '.pdf', 'audio/*']}
                        multiple
                        maxFiles={3}
                        maxFileSize={10000000}
                        minFileSize={0}
                        clickable
                    >
                        Drop files here or click to upload
                    </Files>


                    <br></br>
                    <br></br>
                    <Link to={'/login'}><Button className="btn btn-primary btn-block" variant='primary' onClick={handleFinalChange}>Sign Up</Button> </Link>
                    <p className="forgot-password text-right">
                        Already registered <a href="Login">sign in?</a>
                    </p>
                </div>
            </div>
        </form >
    )
}

export default Signup;