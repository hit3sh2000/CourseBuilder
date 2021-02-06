import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
function AboutUs() {

  return (
    <div>
            <h1 style={{ "color": 'Highlight', "fontFamily": 'fantasy' }}>COURSEBUILDER</h1>

      <Image src="https://cdn.pixabay.com/photo/2016/05/04/07/56/businessman-1370983_960_720.jpg" rounded style={{ "width": "100%",'height':'550px' }} />
      <Container>
        <Row>
          <h3 style={{ "color": 'Highlight',  }}>
            COURSEBUILDER is the global online learning platform that offers anyone, anywhere to select any Course from any University and Build their own course as they want from any where.
            </h3>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <h3>We believe, Learning is the source of human progress.</h3>
              <p style={{ "color": '#21414E', "fontFamily": 'cursive' }}>It has the power to transform our world
              from illness to health,
              from poverty to prosperity,
              from conflict to peace.

              It has the power to transform our lives
              for ourselves,
              for our families,
              for our communities.

              No matter who we are or where we are,
              learning empowers us to change and grow
              and redefine what’s possible.
              That’s why access to the best learning is a right, not a privilege.

              And that’s why Coursera is here.
              We partner with the best institutions
              to bring the best learning
              to every corner of the world.

              So that anyone, anywhere has the power to
              transform their life through learning.
              </p>
            </p>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
