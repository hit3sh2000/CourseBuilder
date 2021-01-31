import React from 'react'
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import CategoryCard from "../Card/CategoryCard";
import UniversityCard from "../Card/UniversityCard";
import Fulldetails from "../Card/Fulldetails";
import Login from "../SignIN_UP/Login";
import Signup from "../SignIN_UP/Signup";
import Logout from "../SignIN_UP/Logout";
import TopNav from "../TopNav/TopNav";
import Authnav from "../TopNav/Authnav";
import Cart from "../Cart/Cart";
import DisplayCart from "../Cart/DisplayCart";
import RemoveCart from "../Cart/RemoveCart";
import Payment from "../Payment/Payment";
import PaymentStatus from "../Payment/PaymentStatus";
import ProtectedRoute from "../ProtectedRoute";

function Routing() {
    const nav = ()=>{
        if(localStorage.getItem("token")){
            return <Authnav/>
        }else{
            return <TopNav/>
        }
    }
    
    
    return (
        <Router>
            <div >
                <Route path="/"  component={nav} />
                <Route path="/" exact component={Dashboard} />
                <Route path='/login' component={Login} />
                <Route path="/register" component={Signup} />
                <Route path="/category/:id" exact component={CategoryCard} />
                <Route path="/course/:cid" component={UniversityCard} />
                <Route path="/university/course/:cid/:uid" component={Fulldetails} />
                <ProtectedRoute isAuth={localStorage.getItem("token")} path="/cart/:cid/:usid" exact component={Cart} />
                <ProtectedRoute isAuth={localStorage.getItem("token")} path="/cart" exact component={DisplayCart} />
                <ProtectedRoute isAuth={localStorage.getItem("token")} path="/logout" exact component={Logout} />
                <ProtectedRoute isAuth={localStorage.getItem("token")} path="/cart/remove/:cid" exact component={RemoveCart} />
                <ProtectedRoute isAuth={localStorage.getItem("token")} path="/payment" exact component={Payment} />
                <ProtectedRoute isAuth={localStorage.getItem("token")} path="/paymentstatus" exact component={PaymentStatus} />
                
            </div>
        </Router>
    )
}

export default Routing
