import React, { useEffect } from 'react';
import axios from "../../axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopNav.css';
import { Navbar, Nav, ButtonGroup, DropdownButton } from 'react-bootstrap';
import Category from "../Category/Category";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function Authnav() {
    // const [user, setUser] = useState(init);
    const renderCategory = () => {
        return <Category />
    }

    async function fetchUser() {
        const user1 = await axios.get('/user', { "id": localStorage.getItem("user") });
        return user1;
    }

    useEffect(() => {
        fetchUser()
           
    });



    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
                    <img
                        src="https://i.imgur.com/F2YUwme.png"
                        width="40"
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
                        variant="secondary"
                        title="CourseBuilder"
                    >
                        {renderCategory()}
                    </DropdownButton>
                </Navbar.Brand>
                

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href='/user'>Welcome</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link href='/AboutUs'>About Us</Nav.Link>
                        <Nav.Link href='/ContactUs'>Contact Us</Nav.Link>
                        <Nav.Link href='/cart'><ShoppingCartIcon/>Cart</Nav.Link>
                        <Nav.Link href='/Logout'>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Authnav

