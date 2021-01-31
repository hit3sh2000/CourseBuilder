import React, { useState, useEffect } from 'react'
import axios from "../../axios";
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import RemoveCart from "./RemoveCart";
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import TotalAmount from "./TotalAmount";
function DisplayCard() {
    useEffect(() => {
        fetchItem()
            .then(res => {
                setCoursedata(res.data.details)
                setTotal(res.data.total)
                localStorage.setItem('total', res.data.total)
            });
    }, [])

    const [total, setTotal] = useState([]);

    const [coursedata, setCoursedata] = useState([]);
    const fetchItem = async () => {
        const c4 = await axios.get(`/cart/cartItems/${localStorage.getItem("user")}`)
        console.log(c4.data);
        return c4
    };
    return (
        <div>
            <br></br>
            <Row>
                <Col md={8}>
                    <table style={{ "borderWidth": "5px", 'borderColor': "#000000", 'borderStyle': 'solid' }}>
                        {coursedata.length === 0 ? (
                            <div>
                                Your cart is empty <Link to='/'>Go Back</Link>
                            </div>
                        ) : (
                                <ListGroup variant='flush'>
                                    {coursedata && coursedata.map((item) => (
                                        <ListGroup.Item key={item.courseId._id}>
                                            <table style={{ "borderWidth": "5px", 'borderColor': "#2E4053", 'borderStyle': 'solid' }}>
                                                <table style={{ "borderWidth": "4px", 'borderColor': "#2E4053", 'borderStyle': 'dotted' }}>
                                                    <table style={{ "borderWidth": "3px", 'borderColor': "#2E4053", 'borderStyle': 'dotted' }}>
                                                        <table style={{ "borderWidth": "2px", 'borderColor': "#2E4053", 'borderStyle': 'solid' }}>
                                                            <Row>
                                                                <Col md={3}>
                                                                        <Image src={`${item.courseId.C_img}`} alt={item.courseId.C_name} fluid thumbnail />
                                                                        <b>{item.courseId.C_name}</b>
                                                                </Col>
                                                                {/* <Col md={2}>
                                                                    <Link to={`/university/course/${item.courseId._id}/${item.universityId._id}`}>
                                                                        <Image src={item.universityId.Us_img} alt={item.universityId.Us_name} fluid thumbnail />
                                                                        <b><i>UniversityId  :-{item.universityId.Us_name}</i></b>
                                                                    </Link>
                                                                </Col> */}
                                                                <Col md={5} >
                                                                    <h5><i><b><Link to={`/university/course/${item.courseId._id}/${item.universityId._id}`}><b><i>Course name  :-{item.courseId.C_name}<br></br>UniversityId  :-{item.universityId.Us_name}</i></b></Link>
                                                                    </b></i></h5>
                                                                </Col>
                                                                <Col md={1}><Link><b><i>Rs:-{item.courseId.C_price}</i></b></Link></Col>

                                                                <Col md={1}>
                                                                    <Button
                                                                        type='button'
                                                                        variant='danger'
                                                                        href={`/cart/remove/${item.courseId._id}`}
                                                                    > <i><b>Remove</b></i>
                                                                        <i className='fas fa-trash'></i>
                                                                    </Button>
                                                                </Col>
                                                            </Row>
                                                            <br></br>

                                                        </table>
                                                    </table>
                                                </table>
                                            </table>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                    </table>
                </Col>
                <Col md={4}>
                    <table style={{ "borderWidth": "5px", 'borderColor': "#000000", 'borderStyle': 'solid' }}>
                        <div style={{ background: "#F4F6F6 " }}>
                            <h1>Subtotal ({coursedata.length} items)</h1>
                            <h2>Rs :- {total}</h2>
                            <Button type='button' variant='danger' href={"/payment"}>
                                <i><b>Proceed to Pay</b></i><i className='fas fa-trash'></i>
                            </Button>
                        </div>
                    </table>
                </Col>
            </Row>

        </div>
    )
}

export default DisplayCard