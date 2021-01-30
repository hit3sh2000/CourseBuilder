<Row>
                <Col md={8}>
                    {cart.length === 0 ? (
                        <div>
                            Your cart is empty <Link to='/'>Go Back</Link>
                        </div>
                    ) : (
                            <ListGroup variant='flush'>
                                {cart.map((item) => (
                                    <ListGroup.Item key={item._id}>
                                        <Row>
                                            <Col md={4}>
                                                <Image src={item.C_img} alt={item.C_name} fluid rounded />
                                            </Col>
                                            <Col >
                                            <h5><i><b><Link to={`/course/${item._id}`}>{item.C_name}</Link></b></i></h5>
                                            </Col>
                                            <Col md={1}>Rs:-{item.C_price}</Col>

                                            <Col md={1}>
                                                <Button
                                                    type='button'
                                                    variant='danger'
                                                    href={`/cart/remove/${item._id}`}
                                                > <i><b>Remove</b></i>
                                                    <i className='fas fa-trash'></i>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                ))}
                            </ListGroup>
                        )}
                </Col>

                <Col>
                    <div style={{ background: "#F4F6F6 " }}>
                        <h1><i><b>SubTotal ({cart.length} items):</b></i></h1>
                        <h2>{localStorage.getItem("TotalAmount")}</h2>

                        <Button type='button' variant='danger'> <i><b>Proceed to Pay</b></i>
                        <i className='fas fa-trash'></i>
                        </Button>
                    </div>
                </Col>
            </Row>