import React, { useEffect, useState } from 'react'
import {  Card, Col, Row } from 'react-bootstrap';
import axios from "../../../axios";

function GetUniversity() {
    const init = {
        Us_name: "",
        Us_email: '',
        Us_password: '',
        Us_desc: '',
        Us_ratings: '',
        Us_address: ''
    }
    let tempimg;
    const [university, setUniversity] = useState(init)
    const { Us_name, Us_email, Us_password, Us_desc, Us_ratings, Us_address } = university;
    useEffect(() => {
        fetchItem()
            .then(res => {
                setUniversity(res.data)
            });
    })

    const fetchItem = async () => {
        const c4 = await axios.post(`/university/getid`, {
            id: localStorage.getItem('university')
        })
        console.log(c4.data);
        return c4
    };
    if (university.Us_img) {
        tempimg = university.Us_img
    } else {
        tempimg = "https://images.unsplash.com/20/cambridge.JPG?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80"
    }

    return (
        <div>
            <div >
                <Row >
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={tempimg} />
                        </Card>
                    </Col>
                    <Col >
                        <h1><Card style={{backgroundColor:"#CCD1D1"}}>
                            <Card.Body>
                                <div style={{ "borderWidth": "3px", 'borderColor': "#000000", 'borderStyle': 'solid' }}>
                                University Name :-{university.Us_name}
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div style={{ "borderWidth": "3px", 'borderColor': "#000000", 'borderStyle': 'solid' }}>
                                    Email :-{university.Us_email}
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div style={{ "borderWidth": "3px", 'borderColor': "#000000", 'borderStyle': 'solid' }}>
                                    {university.Us_desc}
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div style={{ "borderWidth": "3px", 'borderColor': "#000000", 'borderStyle': 'solid' }}>
                                    Rating :-{university.Us_ratings}
                                </div>
                            </Card.Body>
                        </Card></h1>
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default GetUniversity
