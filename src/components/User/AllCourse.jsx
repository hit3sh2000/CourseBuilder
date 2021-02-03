import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import axios from "../../axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function AllCourse() {

    useEffect(() => {
        fetchUser12()
            .then(res => {
                console.log(res.data.courses);
                setUser1(res.data)

            });
    }, [])
    const init = {
        'U_firstname': '',
        'U_lastname': '',
        'U_username': '',
        'U_email': '',
        'U_password': '',
        'U_avatar': '',
        'U_qualification': '',
        'U_age': '',
        'U_contact': '',
        'U_address': '',
        'U_gender': '',
        'courses': []
    }
    const [user1, setUser1] = useState(init);
    const fetchUser12 = async () => {
        const u = await axios.post("/user/userAllDetails", {
            id: localStorage.getItem('user')
        })
        return u
    };


    return (
        <div>
            {user1.courses && user1.courses.map(item => {
                return <div>
                    <Container>
                        <table style={{ "borderWidth": "5px", 'borderColor': "#2E4053", 'borderStyle': 'dotted' }}>
                            <table style={{ "borderWidth": "4px", 'borderColor': "#2E4053", 'borderStyle': 'dotted' }}>
                                <table style={{ "borderWidth": "3px", 'borderColor': "#2E4053", 'borderStyle': 'dotted' }}>
                                    <table style={{ "borderWidth": "2px", 'borderColor': "#2E4053", 'borderStyle': 'dotted' }}>
                                        <Row>
                                            <Col>
                                                <Card><Image src={item.course.C_img} rounded fluid /></Card>
                                                <Card.Header><h4><b><Button variant="success" href={`/schedule/${item.university._id}/${item.course._id}`}>Check Schedule Of {item.course.C_name}</Button></b></h4></Card.Header>
                                            </Col>


                                            <Col>
                                                <Card>
                                                    <Card.Header><b>Course Name: {item.course.C_name}</b></Card.Header>
                                                    <Card.Body><b>Course Description: {item.course.C_desc}</b></Card.Body>
                                                    <Card.Body><b>Course Duration: {item.course.C_duration}</b></Card.Body>
                                                </Card>
                                            </Col>
                                            <Col>
                                                <Card>
                                                    <Card.Header><b>University Name: {item.university.Us_name}</b></Card.Header>
                                                    <Card.Body><b>University Email: {item.university.Us_email}</b></Card.Body>
                                                    <Card.Body><b>University Description: {item.university.Us_desc}</b></Card.Body>
                                                    <Card.Body><b>University Address: {item.university.Us_address}</b></Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </table>
                                </table>
                            </table>
                        </table>
                    </Container>
                    <br></br>
                </div>;
            })}
        </div>

    )
}

export default AllCourse
