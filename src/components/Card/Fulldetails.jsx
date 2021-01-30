import React, { useState, useEffect } from 'react'
import axios from "../../axios";
import { Card, Button, Row, Col } from 'react-bootstrap';

function Fulldetails({ match }) {
    useEffect(() => {
        fetchItem()
            .then(res => {
                console.log(res.data);
                setCoursedata(res.data.full.course)
                setEducatordata(res.data.full.educator)
                setUniversitydata(res.data.full.university)
            });
    }, [])
    const [coursedata, setCoursedata] = useState([]);
    const [educatordata, setEducatordata] = useState([]);
    const [universitydata, setUniversitydata] = useState([]);
    const fetchItem = async () => {
        const course = await axios.get(`/category/getFull/${match.params.cid}/${match.params.uid}`)
        return course
    };
    return (
        <div >

            <Card body>
                <Card.Header as="h5"><h3><b>University Details: {universitydata.Us_name}</b></h3></Card.Header>
                <Row>
                    <Col md={4}>
                        <Card.Img variant="top" src={universitydata.Us_img} />
                    </Col>
                    <Col>
                        <Card.Title><h2><b>{universitydata.Us_desc}</b></h2></Card.Title>
                        <Card.Text><h3><b>Email :-{universitydata.Us_email}</b></h3></Card.Text>
                        <Card.Text><h3><b>Address :-{universitydata.Us_address}</b></h3></Card.Text>
                    </Col>
                </Row>

            </Card>

            <Card body>
                <Card.Header ><h3><b> Course Details: {coursedata.C_name}</b></h3></Card.Header>
                <Row>
                    <Col md={4}>
                        <Card.Img variant="top" src={coursedata.C_img} />
                    </Col>
                    <Col>
                        <Card.Title><h2><b>{coursedata.C_desc}</b></h2></Card.Title>
                        <Card.Text><h3><b>Rs :-{coursedata.C_price}</b></h3></Card.Text>
                        <Card.Text><h3><b>Duration of this Course :-{coursedata.C_duration}</b></h3></Card.Text>
                    </Col>
                </Row>
            </Card>
            <Card body>
                <Card.Header as="h5"><h3><b>Educator Info: {educatordata.E_name}</b></h3></Card.Header>
                <Row>
                    <Col>
                        <Card.Title><h2><b>{educatordata.E_experience}</b></h2></Card.Title>
                        <Card.Text><h3><b>Age :-{educatordata.E_age}</b></h3></Card.Text>
                        <Card.Text><h3><b>Qualification of the Educator :-{educatordata.E_qualification}</b></h3></Card.Text>
                    </Col>
                </Row>
            </Card>
            <Button href={`/cart/${coursedata._id}/${universitydata._id}`} variant="primary" size="lg" block><h1><b>Add To Cart</b></h1></Button>






        </div>
    )
}

export default Fulldetails
// , {
//     headers: {
//       "x-access-token": localStorage.getItem("token"),
//     },
//   }