import { Button, Card, Col, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react'
import axios from "../../axios";

function PaymentStatus() {

    useEffect(() => {
        fetchItem()
            .then(res => {
                setUserdetails(res.data.user)
                setPay(res.data.cart)
            });
    }, [])
    const [userdetails, setUserdetails] = useState([]);
    const [pay, setPay] = useState([]);
    const fetchItem = async () => {
        const bill = await axios.post("/Pay/bill",{
            id: localStorage.getItem('user')
        })
        console.log(bill);
        return bill
    };


    return (
        <div>
            <h3>Payment Successfull</h3>
            <h5>Thanks You {userdetails.U_username}  </h5>
            <Button href={"/"} variant={"danger"}>Continue Learing</Button>
        </div>
    )
}

export default PaymentStatus
