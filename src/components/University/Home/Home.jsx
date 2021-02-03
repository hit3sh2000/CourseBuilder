import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {

    return (
        <div>
            <Row>
                <Col>
                    <h1><b><Button variant="dark" size="lg" href={'/university/details'}>Get Your Details</Button></b></h1>
                </Col>
                <Col>
                    <h1><b><Button variant="dark" size="lg" href={'/university/edit'}>Edit Your Details</Button></b></h1>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col xl={11}>
                <h1><b><Button variant="dark" size="lg" href={'/university/addcourse'}>Add Course</Button></b></h1>
                </Col>
            </Row>
            
            <br></br>

            <Row>
                <Col>
                    <h1><b><Button variant="dark" size="lg" href={'/university/allcourse'}>Get All Course And Schedule Course</Button></b></h1>
                </Col>
                <Col>
                    <h1><b><Button variant="dark" size="lg" href={'/university/alleducator'}>Get All Educator Details</Button></b></h1>
                </Col>
            </Row>
            
        </div>
    )
}

export default Home
