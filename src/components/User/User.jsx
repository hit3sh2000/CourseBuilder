import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import axios from "../../axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
function User() {
    useEffect(() => {
        fetchUser()
            .then(res => {
                console.log(res.data);
                setUser(res.data)
            });
    }, [])
    const [user, setUser] = useState([]);
    const fetchUser = async () => {
        const u = await axios.post("/user/userAllDetails", {
            id: localStorage.getItem('user')
        })
        return u
    };
    return (
        <div>
            <Container>
                <br></br>
                <Row>
                    <Button variant="success" size="lg" block href={'/allCourse'}><i><b>Check All Course You Have Till Now</b></i></Button>
                </Row>
                <table style={{ "borderWidth": "1px", 'borderColor': "#2E4053", 'borderStyle': 'solid', "margin": "10px" }}>
                    <Row>
                        <br></br>
                        <Col xs={2} md={4} >
                            <br></br>
                            <Card className="text-center"><Card.Body><h4>Firstname :-{user.U_firstname}</h4></Card.Body></Card>
                            <Card className="text-center"><Card.Body><h4>Lastname :-{user.U_lastname}</h4></Card.Body></Card>
                            <Card className="text-center"><Card.Body><h4>Email :-{user.U_email}</h4></Card.Body></Card>
                            <Card className="text-center"><Card.Body><h4>Age :-{user.U_age}</h4></Card.Body></Card>
                        </Col>
                        <Col xs={1} md={4}>
                            <br></br>
                            <br></br>
                            <Card className="text-center"><Card.Body><h4>Qualification :-{user.U_qualification}</h4></Card.Body></Card>
                            <Card className="text-center"><Card.Body><h4>Contact :-{user.U_contact}</h4></Card.Body></Card>
                            <Card className="text-center"><Card.Body><h4>Address :-{user.U_address}</h4></Card.Body></Card>
                        </Col>
                        <Col>
                            <br></br>
                            <Image src={user.U_avatar} rounded fluid />
                            <Card className="text-center"><Card.Body><b>Username: {user.U_username}</b></Card.Body></Card>
                        </Col>
                        
                    </Row>
                    </table>
                    <Row>
                    <Button variant="primary" size="lg" block href={'/edit'}><b>Edit</b></Button>
                    </Row>
                <br></br>
            </Container>
        </div>
    )
}

export default User
