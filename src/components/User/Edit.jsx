import React, { useState } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import './Logsign.css';
import axios from "../../axios";
import { Link } from "react-router-dom";

function Edit() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        data.avatar = avatar
        console.log(data);
        axios.post('/user/edit', data)
            .then(res => {
                window.location.replace('/')
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

    // const [avatar, setAvatar] = useState('');

    // const handleFileInputChange = (e) => {
    //     const file = e.target.files[0];
    //     UploadFile(file);
    //     setAvatar(e.target.id);
    // };

    // const UploadFile = (file) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () => {
    //         console.log(reader.result);
    //         setUserEdit({ ...userEdit, avatar: reader.result })
    //     };
    // };



    // const input = {
    //     id: localStorage.getItem("user"),
    //     U_firstname: "",
    //     U_lastname: "",
    //     U_qualification: "",
    //     U_age: "",
    //     U_gender: "",
    //     U_contact: "",
    //     U_address: ""
    // }

    // const [userEdit, setUserEdit] = useState(input)
    // const {
    //     U_firstname, U_lastname, U_qualification,
    //     U_age, U_gender, U_contact, U_address
    // } = userEdit

    // const handleInputChange = e => {
    //     setUserEdit({ ...userEdit, [e.target.id]: e.target.value })
    // }

    // const handleFinalChange = e => {
    //     // e.preventDefault();
    //     console.log(userEdit);
    //     axios.post('/user/edit', userEdit).then(res => {
    //         console.log(res);
    //     })

    // }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="auth-wrapper">
            <div className="auth-inner">
                <h3>Edit</h3>

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
                <input type="submit" />
                {/* <Link to={'/user'}><Button variant='primary' onClick={handleFinalChange}>Sign Up</Button> </Link> */}
                <Link to={'/user'}><Button variant='danger' > Cancel </Button> </Link>

            </div>
        </div>
        </form>
    )
}

export default Edit
