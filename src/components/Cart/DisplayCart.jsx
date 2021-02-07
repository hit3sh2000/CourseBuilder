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
    })

    const [total, setTotal] = useState([]);

    const [coursedata, setCoursedata] = useState([]);
    const fetchItem = async () => {
        const c4 = await axios.get(`/cart/cartItems/${localStorage.getItem("user")}`)
        console.log(c4.data);
        return c4
    };

    const Render = (data) =>{
        if(data){
            return <Row>
                <Col md={8}>
                    {coursedata.length === 0 ? (
                        <div>
                            Your cart is empty <Link to='/'>Go Back</Link>
                        </div>
                    ) : (
                            <table style={{ "borderWidth": "3px", 'borderColor': "#000000", 'borderStyle': 'solid', 'marginLeft': '70px' }}>
                                <ListGroup variant='flush' style={{}}>
                                    {coursedata && coursedata.map((item) => (
                                        <ListGroup.Item key={item.courseId._id}>
                                            <table style={{ "borderWidth": "2px", 'borderColor': "#2E4053", 'borderStyle': 'solid' }}>
                                                <Row>
                                                    <Col md={4}>
                                                        <Image src={`${item.courseId.C_img}`} alt={item.courseId.C_name} fluid thumbnail />
                                                        {item.courseId.C_name}
                                                    </Col>
                                                    {/* <Col md={2}>
                                                                    <Link to={`/university/course/${item.courseId._id}/${item.universityId._id}`}>
                                                                        <Image src={item.universityId.Us_img} alt={item.universityId.Us_name} fluid thumbnail />
                                                                        <i>UniversityId  :-{item.universityId.Us_name}</i>
                                                                    </Link>
                                                                </Col> */}
                                                    <Col md={5} >
                                                        <br></br>
                                                        <h5><Link to={`/university/course/${item.courseId._id}/${item.universityId._id}`}>Course name  :-{item.courseId.C_name}<br></br>UniversityId  :-{item.universityId.Us_name}</Link>
                                                        </h5>
                                                    </Col>
                                                    <Col md={1}>
                                                        <br></br>

                                                        <Link><i>Rs:-{item.courseId.C_price}</i></Link>
                                                    </Col>

                                                    <Col md={1}>
                                                        <br></br>

                                                        <Button
                                                            type='button'
                                                            variant='danger'
                                                            href={`/cart/remove/${item.courseId._id}`}
                                                        > <i>Remove</i>
                                                            <i className='fas fa-trash'></i>
                                                        </Button>
                                                    </Col>
                                                </Row>

                                            </table>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </table>
                        )}

                </Col>
                <Col md={4}>


                    {/* {coursedata.length === 0 ? (
                        <div>
                            Your cart is empty <Link to='/'>Go Back</Link>
                        </div>
                    ) : (
                            
                        )} */}



                    <table style={{ "borderWidth": "3px", 'borderColor': "#000000", 'borderStyle': 'solid'}}>
                        <div style={{ background: "#F4F6F6 " ,'padding':"50px"}}>
                            <h1>Subtotal ({coursedata.length} items)</h1>
                            
                            <br></br>
                            {coursedata && coursedata.map((item) => (
                                <h5>
                                    <Row >
                                        <Col >{item.courseId.C_name}</Col>
                                        <Col  ><i>Rs:-{item.courseId.C_price}</i></Col>
                                    </Row>
                                </h5>
                            ))}
                            <br></br>
                            <h2>Total Rs :- {total}</h2>
                            <Button type='button' variant='danger' href={"/payment"}>
                                <i>Proceed to Pay</i><i className='fas fa-trash'></i>
                            </Button>
                        </div>
                    </table>
                </Col>
            </Row>
        }else{
            <div> Loading......</div>
        }
    }

    return (
        <div>
            <br></br>
            {Render(coursedata)}
        </div>
    )
}

export default DisplayCard