import React, { useState, useEffect } from 'react'
import axios from "../../axios";
import './Card.css';
import { Card, Button } from 'react-bootstrap';
function UniversityCard({ match }) {
    useEffect(() => {
        fetchItem()
            .then(res => {
                setUniversityitems(res.data)
            });
    },[])
    const [universityitems, setUniversityitems] = useState([]);
    const fetchItem = async () => {
        const course = await axios.get(`/category/course/${match.params.cid}`)
        console.log(course);
        return course
    };
    return (    
        <div className="hi">
            {universityitems.map(item => {
                return <div className="h">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.Us_img} style={{ height: 230 }} />
                  <Card.Body>
                    <Card.Title>{item.Us_name}</Card.Title>
                    <Card.Subtitle>Rating is {item.Us_ratings}<br></br>{item.Us_email}</Card.Subtitle>
                    <Card.Text>
                      {item.Us_desc}
                    </Card.Text>
                    <Button href={`/university/course/${match.params.cid}/${item._id}`} variant="primary">From This University</Button>
                  </Card.Body>
                </Card>
              </div>
            })}
        </div>
    )
}

export default UniversityCard
