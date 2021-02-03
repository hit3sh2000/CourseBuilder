import React, { useEffect, useState } from 'react'
import { Card, Button,Row,Col } from "react-bootstrap";
import './Card.css';
import axios from "../../../axios";

function Alleducator() {
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
            <Row>
            {university.map(item => {
                return <div className="h">
                    <Col>
                    <Card style={{ 'width': '18rem', "borderWidth": "1px", 'borderColor': "#000000", 'borderStyle': 'solid' }}>
                        <Card.Img  style={{ 'height': '200', "borderWidth": "1px", 'borderColor': "#000000", 'borderStyle': 'solid' }} variant="top" src='https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                        <Card.Body style={{ "borderWidth": "1px", 'borderColor': "#000000", 'borderStyle': 'solid' }}>
                            <Card.Title ><b>Educator Name :-{item.Educator.E_name}</b></Card.Title>
                            <Card.Title><i>Educator Experience :-{item.Educator.E_experience}</i></Card.Title>
                            <Card.Title>Educator Age :-{item.Educator.E_age}</Card.Title>
                            <br></br>
                            <Card.Text ><h4>Teaches :-{item.course.C_name}</h4></Card.Text>
                            <Card.Text>Course Description {item.course.C_desc}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </div>
            
            })}
            </Row>
        </div>
    )
}
export default Alleducator
