import React, { useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../../axios'

function Schedule({ match }) {

    const [Schedule2, setSchedule2] = useState([])

    useEffect(() => {
        fetchUser12()
            .then(res => {
                console.log(res.data);
                setSchedule2(res.data)
            });
    }, [])
    const fetchUser12 = async () => {
        const u = await axios.get(`/schedule/${match.params.uid}/${match.params.cid}`)
        return u
    };
    

    return (
        <div>
            <br></br>
            <Row>
                <Col >
                    <ListGroup variant='flush' style={{}}>
                        {Schedule2.result && Schedule2.result.map((item) => (
                            <div>
                                <Container style={{ "borderWidth": "1px", 'borderColor': "#000000", 'borderStyle': 'solid','backgroundColor':'#98AFC7' }}>
                                    <br></br>
                                    <Row>
                                        <Col  >
                                            <div><Image src={`${Schedule2.course.C_img}`} alt={Schedule2.course.C_name} fluid thumbnail style={{ "borderWidth": "1px", 'borderColor': "#000000", 'borderStyle': 'solid' }} /></div>
                                            <div><b><h5 ><i >Course Name :- {Schedule2.course.C_name}</i></h5></b></div>
                                        </Col>
                                        <Col >
                                            <i><h3><div style={{ "borderWidth": "1px", 'borderColor': "#000000", 'borderStyle': 'solid','backgroundColor':'#BCC6CC' }}>Topic :-{item.S_topic}</div></h3></i>
                                            <i><h3><div>Date :-{item.S_date}</div></h3></i>
                                            <i><h3><div>Time :-{item.S_time}</div></h3></i>
                                            <i><h3><div>Zoom Link :-  <Button variant='success' size="lg" block href={item.S_link} target="_blank"><b><i>Join</i></b></Button></div></h3></i>
                                        </Col>
                                    </Row>
                                </Container>
                                <br></br>
                                <br></br>
                            </div>
                        ))}
                    </ListGroup>

                </Col>
            </Row>

        </div>
    )
}

export default Schedule
