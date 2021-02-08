import React, { useEffect } from 'react';
import axios from "../../axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactsIcon from '@material-ui/icons/Contacts';
import InfoIcon from '@material-ui/icons/Info';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import './TopNav.css';
import { Navbar, Nav, ButtonGroup, DropdownButton, Button } from 'react-bootstrap';
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
            <Navbar.Brand href="/" style={{ "borderWidth": "2px", 'borderColor': "#5D6D7E", 'borderStyle': 'groove', "padding":"5px","borderRadius":"10px" }}>
                    <img
                        src="https://i.imgur.com/DaoAxFX.png"
                        width="150"
                        height="50"
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
                        <Nav.Link href='/user'><Button variant='light'>Click here to Check Your Details<EmojiPeopleIcon/></Button></Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link href='/AboutUs'><Button variant='light'>About Us<InfoIcon/></Button></Nav.Link>
                        <Nav.Link href='/ContactUs'><Button variant='light'>Contact Us <ContactsIcon/></Button></Nav.Link>
                        <Nav.Link href='/cart'><Button variant='light'><ShoppingCartIcon/>Cart</Button></Nav.Link>
                        <Nav.Link href='/Logout'><Button variant='light'>Logout<ExitToAppIcon/></Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Authnav

