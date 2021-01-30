import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import axios from "../../axios";
import DisplayCart from "./DisplayCart";

import '../Card/Card.css';

function Cart({ match }) {
    const [carts, setCarts] = useState([]);
    async function fetchCart() {
        console.log(match.params.usid,match.params.cid,localStorage.getItem("user"));
        const cart1 = await axios.post('/cart/add', {
            "usid":match.params.usid,
            "cid": match.params.cid,
            "uid": localStorage.getItem("user")
        });
        return cart1;
    }
    useEffect(() => {
        fetchCart()
            .then(res => {
                    setCarts(res.data)
            });
    }, []);

    return (
        <div className="mb-2">
            {<Redirect to={"/cart"}/>}
        </div>



    )
}

export default Cart
