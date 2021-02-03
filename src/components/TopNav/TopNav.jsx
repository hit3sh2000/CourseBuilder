import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopNav.css';
import { Navbar, Nav, ButtonGroup, Button, DropdownButton,Collapse } from 'react-bootstrap';
import Category from "../Category/Category";
// import { A } from "hookrouter";

function TopNav() {
  const renderCategory = () => {
    return <Category />
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" style={{ "borderWidth": "2px", 'borderColor': "#5D6D7E", 'borderStyle': 'groove', "padding":"5px","borderRadius":"10px" }}>
          <img
            src="https://i.imgur.com/DaoAxFX.png"
            width="130"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /></Navbar.Brand>
        <Navbar.Brand>
          
          <DropdownButton
            as={ButtonGroup}
            key={'down'}
            id={`dropdown-button-drop-${'down'}`}
            drop={'down'}
            variant="light"
            title="CourseBuilder"
          >
            {renderCategory()}
          </DropdownButton>
          
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href='/login'><Button variant='light'>Login</Button></Nav.Link>
            <Nav.Link href='/register'><Button variant='light'>Register</Button></Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href='/AboutUs'><Button variant='light'>About Us</Button></Nav.Link>
            <Nav.Link href='/ContactUs'><Button variant='light'>Contact Us</Button></Nav.Link>
            <Nav.Link href='/university'><Button variant='light'>UniversityLogin</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}


export default TopNav

