import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Col, Container, Row, Card, Button } from 'react-bootstrap';
import Slider from "react-slick";
import axios from "../../axios";
// Import css files
import './Dashboard.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Dashboard() {

  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '50px',
    compress: true,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const fetchItem = async () => {
      const course = await axios.get(`/topcourse`)
      return course
    };
    fetchItem()
      .then(res => {
        setCourse(res.data)
      });
  }, [])




  return (
    <div  >
      <br></br><br></br>
      <Container>
        <div className="AboutUs"  >
          <h2><b>Recommendation Course</b></h2>
          <Slider {...config}>
            {course && course.map(item => {
              return <div className="h">
                <Card style={{ 'margin': '15px' }}>
                  <Card.Img variant="top" src={item.C_img} style={{ height: 200 }} />
                  <Card.Body>
                    <Card.Title><b>{item.C_name}</b></Card.Title>
                    <Card.Title><i>Buy Course At Rs {item.C_price}</i></Card.Title>
                    <Card.Subtitle>Duration of this Course is {item.C_duration}</Card.Subtitle>
                    <br></br>
                    <Button href={`/course/${item._id}`} variant="primary">Check University</Button>
                  </Card.Body>
                </Card>
              </div>
            })
            }
          </Slider>
        </div>
        <br /><br /><br /><br /><br /><br />
        <h1 style={{ 'fontFamily': 'fantasy', 'textShadow': '#49FF00 1px 0 20px', "textAlign": 'start' }}><i><b>CourseBuilder Nerver Stop Learning..........</b></i></h1>

        <Row style={{ 'margin': '5px', 'textAlign': "inherit" }}>
          <Col style={{ "color": "#000000", 'textAlign': "inherit" }}>
            <br /><br /><br />
            <h2 style={{ 'fontFamily': 'Comic Sans MS' }}>World-class learning for anyone, anywhere</h2>
            <br /><br />
            <h2 style={{ 'fontFamily': 'Comic Sans MS' }}>Learn from leading universities </h2>
          </Col>
          <Col md={7}>
            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/learner-outcomes/outcomes.png?auto=format%2Ccompress&dpr=1&w=606&h=553&q=40" class="img-fluid" alt={'1img1'} />
          </Col>
        </Row>
        <br /><br /><br /><br /><br /><br />
        <Row style={{ 'margin': '5px', 'textAlign': "inherit" }}>
          <Col md={7}>
            <img src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" class="img-fluid" alt={'1img1'} />
          </Col>
          <Col style={{ "color": "#000000", 'textAlign': "inherit" }}>
            <br /><br /><br />
            <h2 style={{ 'fontFamily': 'Comic Sans MS' }}>Earn industry-recognized credentials</h2>
            <br /><br />
            <h2 style={{ 'fontFamily': 'Comic Sans MS' }}>Learn from leading universities </h2>
          </Col>
        </Row>
        <br /><br /><br /><br /><br /><br />
        <Row style={{ 'margin': '5px', 'textAlign': "inherit" }}>
          <Col style={{ "color": "#000000", 'textAlign': "inherit" }}>
            <br /><br /><br />
            <h2 style={{ 'fontFamily': 'Comic Sans MS' }}>Take the next step toward your personal and professional goals with CourseBuilder.</h2>
            <br /><br />
            <h2 style={{ 'fontFamily': 'Comic Sans MS' }}>Learn from leading universities </h2>
          </Col>
          <Col md={7}>
            <img src="https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=831&q=80" class="img-fluid" alt={'1img1'} />
          </Col>
        </Row>
        <br /><br /><br /><br /><br /><br />
        <Row style={{ 'margin': '5px', 'textAlign': "inherit" }}>
          <Col md={7}>
            <img src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="img-fluid" alt={'1img1'} />
          </Col>
          <Col style={{ "color": "#000000", 'textAlign': "inherit" }}>
            <br /><br /><br />
            <h2 style={{ 'fontFamily': 'Comic Sans MS' }}>Your Course to Success</h2>
            <br /><br />
            <h2 style={{ 'fontFamily': 'Comic Sans MS' }}>Achieve your goals with CourseBuilder </h2>
          </Col>
        </Row>
      </Container>
      <br /><br />
    </div>
  )
}


export default Dashboard

