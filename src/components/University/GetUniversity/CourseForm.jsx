import React, { useEffect, useState } from 'react'
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import './Card.css';
import axios from "../../../axios";
import { Link } from 'react-router-dom';

function CourseForm({ match }) {
    const input = {
        C_name: "",
        C_desc: "",
        C_duration: "",
        C_price: "",
        category: match.params.id,

    }
    const [course, setCourse] = useState(input)
    const [educator, setEducator] = useState()
    useEffect(() => {
        fetchEducator()
            .then(res => {
                console.log(res.data);
                setEducator(res.data)
            });
    }, [])

    async function fetchEducator() {
        const Edu = await axios.get("/educator")
        return Edu
    }
    const {
        C_name, C_desc, C_duration, C_price, category,educatorinfo
    } = course

    const handleInputChange = e => {
        setCourse({ ...course, [e.target.id]: e.target.value })
        console.log(e.target.id + " " + e.target.value);

    }

    const handleFinalChange = e => {
        // e.preventDefault();
        console.log(course);
        axios.post(`/course/university/${localStorage.getItem('university')}`, course)
    }

    const handleInputChangeforEducator = e => {
        console.log(e.target.value);
    }

    return (

        <form>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Add Course</h3>
                    <div className="form-group">
                        <label>Course name</label>
                        <input type="text" className="form-control" placeholder="Enter Course name..." id="C_name" value={C_name} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Course description</label>
                        <input type="text" className="form-control" placeholder="Enter description..." id="C_desc" value={C_desc} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Duration</label>
                        <input type="text" className="form-control" placeholder="Enter Course Duration..." id="C_duration" value={C_duration} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Course Price</label>
                        <input type="email" className="form-control" placeholder="Enter Course Price" id="C_price" value={C_price} onChange={handleInputChange} />
                    </div>
                    <label>Educator :- </label>  <select id={'educatorinfo'} value={educatorinfo} onChange={handleInputChange}>
                    <option >Select One Educator</option >
                        {educator && educator.map(item => {
                            return <option id={item._id} value={item.E_name}  >{item.E_name}</option >
                        })}
                    </select >
                    <br></br>
                    <br></br>
                    <Link to={'/university'}><Button className="btn btn-primary btn-block" variant='primary' onClick={handleFinalChange}>Add</Button> </Link>
                    <Link to={'/university'}><Button className="btn btn-primary btn-block" variant='danger' onClick={handleFinalChange}>Cancel</Button> </Link>
                </div>
            </div>
        </form>
    )
}

export default CourseForm
