import React, { useState } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import './Logsign.css';
import axios from "../../axios";

function Signup() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        data.avatar = avatar
        axios.post('/user', data)
            .then(res => {
                window.location.replace('/login')
            })
    };
    const [avatar, setAvatar] = useState('');

    function handleFileInputChange(e) {
        const file = e.target.files[0];
        UploadFile(file);
    }

    const UploadFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            console.log(reader.result);
            setAvatar(reader.result)
        };
    };

    // const input = {
    //     U_firstname:"",
    //     U_lastname:"",
    //     U_username:"",
    //     U_email:"",
    //     U_password:"",
    //     U_qualification:"",
    //     U_age:"", 
    //     U_gender:"",
    //     U_contact:"",
    //     U_address:"",
    // }

    // const [users,setUsers]=useState(input)
    // const {
    //     U_firstname, U_lastname,
    //     U_username, U_email,
    //     U_password,U_qualification,
    //     U_age, U_gender,U_contact,U_address
    // } =users

    // const handleInputChange = e =>{
    //     setUsers({...users,[e.target.id]:e.target.value})
    // }

    // const handleFinalChange = e =>{
    //     console.log(users);
    //     axios.post('/user',users)
    // }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Sign Up</h3>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" name="U_firstname" ref={register({ required: true })} />
                        {errors.U_firstname && 'First name is required.'}
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" name="U_lastname" ref={register({ required: true })} />
                        {errors.U_lastname && 'Last name is required.'}
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" name="U_username" ref={register({ required: true })} />
                        {errors.U_username && 'Username is required.'}

                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" className="form-control" placeholder="Enter Email" name="U_email" ref={register({ required: true })} />
                        {errors.U_email && 'Email is required.'}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" name="U_password" ref={register({ required: true })} />
                        {errors.U_password && 'Password is required.'}
                    </div>
                    <div className="form-group">
                        <label>Qualification</label>
                        <input type="text" className="form-control" placeholder="Enter qualification" name="U_qualification" ref={register({ required: true })} />
                        {errors.U_qualification && 'Qualification is required.'}
                    </div>
                    <div className="form-group">
                        <label>User Age</label>
                        <input type="text" className="form-control" placeholder="Enter password" name="U_age" ref={register({ required: true })} />
                        {errors.U_age && 'Age is required.'}
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <input type="text" className="form-control" placeholder="Enter password" name="U_gender" ref={register({ required: true })} />
                        {errors.U_gender && 'Gender is required.'}
                    </div>
                    <div className="form-group">
                        <label>Contact No.</label>
                        <input type="text" className="form-control" placeholder="Enter Contact Number" name="U_contact" ref={register({ required: true })} />
                        {errors.U_contact && 'Contact is required.'}
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Enter Address" name="U_address" ref={register({ required: true })} />
                        {errors.U_address && 'Address is required.'}
                    </div>
                    <div className="form-group">
                        <label>Upload Avatar</label>
                        <input type="file" className="form-control" name="U_avatar" onChange={handleFileInputChange} ref={register({ required: true })} />
                        {errors.U_avatar && 'avatar is required.'}
                    </div>

                    <Button type="submit" className="btn btn-primary btn-block" variant='primary'>Sign Up</Button>
                    <p className="forgot-password text-right">
                        Already registered <a href="Login">sign in?</a>
                    </p>
                </div>
            </div>
        </form>
    )
}
export default Signup;