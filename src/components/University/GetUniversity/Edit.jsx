import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SignIN_UP/Logsign.css';
import axios from "../../../axios";
import { Link } from "react-router-dom";

function Edit() {

    const [avatar, setAvatar] = useState('');

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        UploadFile(file);
        setAvatar(e.target.id);
    };

    const UploadFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            console.log(reader.result);
            setUniversityRegister({ ...universityRegister, avatar:  reader.result  })
        };
    };


    const input = {
        id: localStorage.getItem('university'),
        Us_name: '',
        Us_desc: '',
        Us_address: '',
        Us_ratings: ''
    }
    const [universityRegister, setUniversityRegister] = useState(input)
    const { Us_name, Us_desc, Us_address, Us_ratings } = universityRegister
    const handleInputChange = e => {
        setUniversityRegister({ ...universityRegister, [e.target.id]: e.target.value })
        console.log(universityRegister);
    }
    const handleFinalChange = e => {

        console.log(universityRegister);
        axios.post('/university/update', universityRegister)
        window.location.replace('/university/home')
    }
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <h3>Edit</h3>
                <div className="form-group">
                    <label>University Name</label>
                    <input type="text" className="form-control" placeholder="First name" id="Us_name" value={Us_name} onChange={handleInputChange} />
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
                <div className="form-group">
                    <label>Upload Avatar</label>
                    <input type="file" className="form-control" id="Us_img" onChange={handleFileInputChange} />
                </div>

                <Button className="btn btn-primary btn-block" variant='primary' onClick={handleFinalChange}>Edit</Button>

            </div>
        </div>
    )
}

export default Edit
