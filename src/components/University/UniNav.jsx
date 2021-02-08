import React from 'react'
import { Col, Row, Button, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Redirect } from 'react-router-dom';
import './university.css'

function UniNav() {
    function Logout() {
        localStorage.removeItem("universitytoken")
        localStorage.removeItem("university")
        return <Redirect to='/' />
    }
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Row>
                    <Col >
                        <Navbar.Brand href="/university/home" style={{ "borderWidth": "2px", 'borderColor': "#5D6D7E", 'borderStyle': 'groove', "padding":"5px","borderRadius":"10px" }}>
                            <img
                                src="https://i.imgur.com/DaoAxFX.png"
                                width="100"
                                height="50"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            /></Navbar.Brand>
                    </Col>
                    <Col>
                        <Navbar.Brand>

                            <h3><i><div className='welcome'>Welcome Here You Are In University Side</div></i></h3>
                        </Navbar.Brand>
                    </Col>
                    <Col >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link href='/'><Button variant='light' onClick={Logout}><ExitToAppIcon/>LogOut</Button></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Navbar>
            <br></br>
            <br></br>
        </div >
    )
}

export default UniNav
