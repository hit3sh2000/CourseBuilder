import React, { useState, useEffect } from 'react'
import axios from "../../axios";
import './Card.css';
import { Card, Button } from 'react-bootstrap';

function CategoryCard({ match }) {
  useEffect(() => {
    fetchItem()
      .then(res => {
        setCourseitems(res.data)
      });
  })
  const fetchItem = async () => {
      const course = await axios.get(`/category/${match.params.id}`)
      console.log(course);
      return course
  };

  const [courseitems, setCourseitems] = useState([]);

  return (
    <div className="hi">
      {
        courseitems.map(item => {
          return <div className="h">
            <Card style={{ width: '18rem' }}>
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
    </div>
  )
}

export default CategoryCard
