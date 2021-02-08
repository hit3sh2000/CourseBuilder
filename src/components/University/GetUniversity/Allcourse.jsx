import React, { useEffect, useState } from 'react'
import { Card, Button } from "react-bootstrap";
import './Card.css';
import axios from "../../../axios";

function Allcourse() {

    const [university, setUniversity] = useState([])
    useEffect(() => {
        fetchItem()
            .then(res => {
                console.log(res.data.courses);
                setUniversity(res.data.courses)
            });
    }, [])

    const fetchItem = async () => {
        const c4 = await axios.post(`/university/getid`, {
            id: localStorage.getItem('university')
        })
        return c4
    };

    

    
    return (
        <div className='hi'>
            {university.map(item => {
                return <div className="h">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.course.C_img} style={{ height: 200 }} />
                        <Card.Body>
                            <Card.Title><b>{item.course.C_name}</b></Card.Title>
                            <Card.Text><b>{item.course.C_desc}</b></Card.Text>
                            <Card.Title><i>Buy Course At Rs{item.course.C_price}</i></Card.Title>
                            <Card.Subtitle>Duration of this Course is Rs{item.course.C_duration}</Card.Subtitle>
                            <br></br>
                            <Button variant="primary" href={`/university/schedule/${localStorage.getItem('university')}/${item.course._id}`}><b><i>Schedule Course</i></b></Button>
                        </Card.Body>
                    </Card>
                </div>
                
            })}
        </div>
    )
}

export default Allcourse
