import React, { useEffect } from 'react'
import { Redirect } from "react-router-dom";

function Logout() {
    useEffect(()=>{
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    })

    return (
        <div>
           <Redirect to={"/login"} />
        </div>
    )
}

export default Logout
