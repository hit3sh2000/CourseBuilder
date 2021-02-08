import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginUniversity from "./SignIN_UP/LoginUniversity";
import RegisterUniversity from "./SignIN_UP/RegisterUniversity";
import Home from "./Home/Home";
import GetUniversity from "./GetUniversity/GetUniversity";
import Edit from "./GetUniversity/Edit";
import Allcourse from "./GetUniversity/Allcourse";
import Alleducator from "./GetUniversity/Alleducator";
import AddCourse from "./GetUniversity/AddCourse";
import CourseForm from "./GetUniversity/CourseForm";
import Schedule from "./GetUniversity/Schedule";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from "./ProtectedRoute1";

function UniversityRouting() {
    return (
        <Router>
            <div>
                <Route path="/university" exact  component={LoginUniversity} />
                <Route path="/university/register" exact component={RegisterUniversity} />
                <ProtectedRoute isAuth={localStorage.getItem("universitytoken")} path="/university/home" exact component={Home} />
                <ProtectedRoute isAuth={localStorage.getItem("universitytoken")} path="/university/details" exact component={GetUniversity} />
                <ProtectedRoute isAuth={localStorage.getItem("universitytoken")} path="/university/edit" exact component={Edit} />
                <ProtectedRoute isAuth={localStorage.getItem("universitytoken")} path="/university/allcourse" exact component={Allcourse} />
                <ProtectedRoute isAuth={localStorage.getItem("universitytoken")} path="/university/alleducator" exact component={Alleducator} />
                <ProtectedRoute isAuth={localStorage.getItem("universitytoken")} path="/university/addcourse" exact component={AddCourse} />
                <ProtectedRoute isAuth={localStorage.getItem("universitytoken")} path="/university/category/:id" exact component={CourseForm} />
                <ProtectedRoute isAuth={localStorage.getItem("universitytoken")} path="/university/schedule/:uid/:cid" exact component={Schedule} />
            </div>
        </Router>
    )
}

export default UniversityRouting
