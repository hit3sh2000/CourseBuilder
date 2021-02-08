import React, {  useState } from 'react'
import {  Button } from "react-bootstrap";
import './Card.css';
import axios from "../../../axios";
import { Link } from 'react-router-dom';

function Schedule({ match }) {

    const input = {
        S_topic: "",
        S_date: "",
        S_time: "",
        S_link: "",
        Us_id: match.params.uid,
        C_id:match.params.cid

    }
    const [schedule1, setSchedule1] = useState(input)
    
    const {
        S_topic, S_date, S_time, S_link
    } = schedule1

    const handleInputChange = e => {
        setSchedule1({ ...schedule1, [e.target.id]: e.target.value })
        console.log(e.target.id + " " + e.target.value);
    }

    const handleFinalChange = e => {
        // e.preventDefault();
        console.log(schedule1);
        axios.post(`/schedule`, schedule1)
    }

    


    return (
        <form>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Add Schedule For Course</h3>

                    <div className="form-group">
                        <label>Topic name</label>
                        <input type="text" className="form-control" placeholder="Enter Topic name..." id="S_topic" value={S_topic} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Schedule Date</label>
                        <input type="date" className="form-control" placeholder="Enter Date..." id="S_date" value={S_date} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Schedule Time </label>
                        <input type="time" className="form-control" placeholder="Enter Schedule Time..." id="S_time" value={S_time} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Schedule Link</label>
                        <input type="email" className="form-control" placeholder="Enter Schedule Link" id="S_link" value={S_link} onChange={handleInputChange} />
                    </div>
                    <br></br>
                    <br></br>
                    {/* <Button className="btn btn-primary btn-block" variant='primary' onClick={handleFinalChange}>Add Schedule</Button> */}
                    <Link to={'/university'}><Button className="btn btn-primary btn-block" variant='primary' onClick={handleFinalChange}>Add</Button> </Link>
                    <Link to={'/university'}><Button className="btn btn-primary btn-block" variant='danger' onClick={handleFinalChange}>Cancel</Button> </Link>
                </div>
            </div>
        </form>
    )
}

export default Schedule
