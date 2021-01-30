import React,{useState} from "react";
// import { Navbar,Nav,NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logsign.css';
import axios from "../../axios";

function Signup() {
    const input = {
        U_firstname:"",
        U_lastname:"",
        U_username:"",
        U_email:"",
        U_password:"",
        U_qualification:"",
        U_age:"", 
        U_gender:"",
        U_contact:"",
        U_address:""
    }

    const [users,setUsers]=useState(input)
    const {
        U_firstname, U_lastname,
        U_username, U_email,
        U_password,U_qualification,
        U_age, U_gender,U_contact,U_address
    } =users

    const handleInputChange = e =>{
        setUsers({...users,[e.target.id]:e.target.value})
    }

    const handleFinalChange = e =>{
        e.preventDefault();
        console.log(users);
        axios.post('/user',users)
    }

    return(
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
            <input type="text" className="form-control" placeholder="Last name" id="U_lastname" value={U_lastname} onChange={handleInputChange}/>
        </div>

        <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Username" id="U_username" value={U_username} onChange={handleInputChange}/>
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
            <label>User Age</label>
            <input type="text" className="form-control" placeholder="Enter password" id="U_age" value={U_age} onChange={handleInputChange} />
        </div>

        <div className="form-group">
            <label>Gender</label>
            <input type="text" className="form-control" placeholder="Enter password" id="U_gender" value={U_gender} onChange={handleInputChange} />
         </div>

        <div className="form-group">
           <label>Contact No.</label>
           <input type="text" className="form-control" placeholder="Enter password" id="U_contact" value={U_contact} onChange={handleInputChange} />
        </div>

        <div className="form-group">
        <label>Address</label>
        <input type="text" className="form-control" placeholder="Enter password" id="U_address" value={U_address} onChange={handleInputChange} />
     </div>

        <button type="submit" className="btn btn-primary btn-block" onClick={handleFinalChange}>Sign Up</button>
        <p className="forgot-password text-right">
            Already registered <a href="Login">sign in?</a>
        </p>
        </div>
        </div>
    </form>
    )
}

export default Signup;