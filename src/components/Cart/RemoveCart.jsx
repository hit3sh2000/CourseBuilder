import React, { useState, useEffect } from 'react'
import axios from "../../axios";
import DisplayCart from "./DisplayCart";

function RemoveCart({match}) {
    const [rm, setRm] = useState();
    const removeCart = async () => {
        const cart = await axios.post('/cart/remove', {
            "cid": match.params.cid,
            "uid": localStorage.getItem("user")
        });
        console.log(cart);
        return cart
    }


    useEffect(() => {
        removeCart()
            .then(res => {
                setRm(res.data)
            });
    });
    return (
        <div>
            hi
            <DisplayCart/>
        </div>
    )
}

export default RemoveCart
