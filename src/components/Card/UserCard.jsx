// import React, { useState, useEffect } from 'react'
// import axios from "../../axios";
// import './Card.css';
// import { Card, Button } from 'react-bootstrap';

import userEvent from "@testing-library/user-event";

// function UserCard() {
//   const [users, setUsers] = useState([])

//   async function fetchUser() {
//     const course = await axios.get('/course')
//     console.log(course);

//     return course;
//   }

//   useEffect(() => {

//     fetchUser()
//       .then(res => {
        // setUsers(...user=)
//         console.log(res + "hi");
//       });


//   }, []);
//   return (

//     <div className="hi">
//       {
//         users.map(item => {
//           return <div className="h">
//             <Card style={{ width: '18rem' }}>
//               <Card.Img variant="top" src={item.C_img} style={{ height: 200 }} />
//               <Card.Body>
//                 <Card.Title>{item.C_name}</Card.Title>
//                 <Card.Subtitle>Duration of this Course is{item.C_duration}</Card.Subtitle>
//                 <Card.Text>
//                   {item.C_desc}
//                 </Card.Text>
//                 <Button variant="primary">Buy Course At {item.C_price}</Button>
//               </Card.Body>
//             </Card>
//           </div>
//         })
//       }
//     </div>

//   )
// }

// export default UserCard
