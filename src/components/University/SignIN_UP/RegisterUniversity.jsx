import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import './Logsign.css';
import axios from "../../../axios";
function RegisterUniversity() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        data.avatar = avatar
        console.log(data);
        axios.post('/university', data)
            .then(res => {
                window.location.replace('/')
            })
    };
    const [avatar, setAvatar] = useState('');

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        UploadFile(file);
    };

    const UploadFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            console.log(reader.result);
            setAvatar(reader.result)
        };
    };

    // const input = {
    //     Us_name: '',
    //     Us_email: '',
    //     Us_password: '',
    //     Us_desc: '',
    //     Us_address: '',
    //     Us_ratings: ''
    // }

    // const [universityRegister, setUniversityRegister] = useState(input)
    // const { Us_name, Us_email, Us_password, Us_desc, Us_address, Us_ratings } = universityRegister

    // const handleInputChange = e => {
    //     setUniversityRegister({ ...universityRegister, [e.target.id]: e.target.
    //     // console.log(universityRegister);
    // }
    // const handleFinalChange = e => {
    //     console.log(universityRegister);
    //     // axios.post('/university', universityRegister)
    // }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>University Name</label>
                        <input type="text" className="form-control" placeholder="First name" name="Us_name" ref={register({ required: true })} />
                        {errors.Us_name && 'First name is required.'}
                    </div>

                    <div className="form-group">
                        <label>University Email</label>
                        <input type="email" className="form-control" placeholder="University Email" name="Us_email" ref={register({ required: true })} />
                        {errors.Us_email && 'This field is required.'}
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" name="Us_password" ref={register({ required: true })} />
                        {errors.Us_password && 'This field is required.'}
                    </div>

                    <div className="form-group">
                        <label>University Description</label>
                        <input type="text" className="form-control" placeholder="Enter University Description" name="Us_desc" ref={register({ required: true })} />
                        {errors.Us_desc && 'This field is required.'}
                    </div>

                    <div className="form-group">
                        <label>University Ratings</label>
                        <input type="text" className="form-control" placeholder="Enter University Ratings" name="Us_ratings" ref={register({ required: true })} />
                        {errors.Us_ratings && 'This field is required.'}
                    </div>

                    <div className="form-group">
                        <label>University Address</label>
                        <input type="text" className="form-control" placeholder="Enter University Address" name="Us_address" ref={register({ required: true })} />
                        {errors.Us_address && 'This field is required.'}
                    </div>
                    <div className="form-group">
                        <label>Upload Avatar</label>
                        <input type="file" className="form-control" name="Us_img" onChange={handleFileInputChange} ref={register({ required: true })} />
                        {errors.Us_img && 'This field is required.'}
                    </div>
                    <input type="submit" />
                    {/* <Link to={'/university'}><Button className="btn btn-primary btn-block" variant='primary' onClick={handleFinalChange}>Sign Up</Button> </Link> */}
                    <p className="forgot-password text-right">
                        Already registered <a href="/university">sign in?</a>
                    </p>
                </div>
            </div>
        </form>
    )
}

export default RegisterUniversity
