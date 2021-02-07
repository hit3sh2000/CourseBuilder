import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopNav.css';
import SchoolIcon from '@material-ui/icons/School';
import CategoryIcon from '@material-ui/icons/Category';
import ContactsIcon from '@material-ui/icons/Contacts';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';
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
            title={"Explore Courses"}
          >
            {renderCategory()}
          </DropdownButton>
          
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href='/login'><Button variant='light'>Login<PersonIcon/></Button></Nav.Link>
            <Nav.Link href='/register'><Button variant='light'>Register<AddIcon/></Button></Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href='/AboutUs'><Button variant='light'>About Us<InfoIcon/></Button></Nav.Link>
            <Nav.Link href='/ContactUs'><Button variant='light'>Contact Us<ContactsIcon/></Button></Nav.Link>
            <Nav.Link href='/university'><Button variant='light'>UniversityLogin<SchoolIcon/></Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}


export default TopNav

