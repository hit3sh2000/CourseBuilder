import React, { useState } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logsign.css';
import axios from "../../axios";
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
            setUserEdit({ ...userEdit, avatar: reader.result })
        };
    };



    const input = {
        id: localStorage.getItem("user"),
        U_firstname: "",
        U_lastname: "",
        U_qualification: "",
        U_age: "",
        U_gender: "",
        U_contact: "",
        U_address: ""
    }

    const [userEdit, setUserEdit] = useState(input)
    const {
        U_firstname, U_lastname, U_qualification,
        U_age, U_gender, U_contact, U_address
    } = userEdit

    const handleInputChange = e => {
        setUserEdit({ ...userEdit, [e.target.id]: e.target.value })
    }

    const handleFinalChange = e => {
        // e.preventDefault();
        console.log(userEdit);
        axios.post('/user/edit', userEdit).then(res => {
            console.log(res);
        })

    }

    return (
        // <form>
        <div className="auth-wrapper">
            <div className="auth-inner">
                <h3>Edit</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" id="U_firstname" value={U_firstname} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" id="U_lastname" value={U_lastname} onChange={handleInputChange} />
                </div>


                <div className="form-group">
                    <label>Qualification</label>
                    <input type="text" className="form-control" placeholder="Enter qualification" id="U_qualification" value={U_qualification} onChange={handleInputChange} />
                </div>


                <div className="form-group">
                    <label>User Age</label>
                    <input type="text" className="form-control" placeholder="Enter password" id="U_age" value={U_age} onChange={handleInputChange} />
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

                <div className="form-group">
                    <label>Upload Avatar</label>
                    <input type="file" className="form-control" id="Us_img" onChange={handleFileInputChange} />
                </div>

                <Link to={'/user'}><Button variant='primary' onClick={handleFinalChange}>Sign Up</Button> </Link>
                <Link to={'/user'}><Button variant='danger' > Cancel </Button> </Link>

            </div>
        </div>
        // </form>
    )
}

export default Edit
