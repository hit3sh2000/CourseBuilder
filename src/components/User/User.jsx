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
                <Row>
                    <Button variant="primary" size="lg" block href={'/allCourse'}><i><b>Check All Course You Have Till Now</b></i></Button>
                </Row>
                <table style={{ "borderWidth": "6px", 'borderColor': "#2E4053", 'borderStyle': 'solid' }}>
                    <Row>
                        <br></br>
                        <Button variant="primary"><b>Edit</b></Button>
                        <Col xs={5} md={7} >
                            <br></br>
                            <Card className="text-center"><Card.Body><h3>Firstname :-{user.U_firstname}</h3></Card.Body></Card>
                            <Card className="text-center"><Card.Body><h3>Lastname :-{user.U_lastname}</h3></Card.Body></Card>
                            <Card className="text-center"><Card.Body><h3>UserName :-{user.U_username}</h3></Card.Body></Card>
                            <Card className="text-center"><Card.Body><h3>Email :-{user.U_email}</h3></Card.Body></Card>
                            <Card className="text-center"><Card.Body><h3>Age :-{user.U_age}</h3></Card.Body></Card>
                        </Col>
                        <Col xs={1} md={4}>
                            <Image src={user.U_avatar} rounded fluid />
                            <Card className="text-center"><Card.Body><h3>Qualification :-{user.U_qualification}</h3></Card.Body></Card>
                            <Card className="text-center"><Card.Body><h3>Contact :-{user.U_contact}</h3></Card.Body></Card>
                            <Card className="text-center"><Card.Body><h3>Address :-{user.U_address}</h3></Card.Body></Card>
                        </Col>
                    </Row>
                </table>
                <br></br>

            </Container>

        </div>
    )
}

export default User
