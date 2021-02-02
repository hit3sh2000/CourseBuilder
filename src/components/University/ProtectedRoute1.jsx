import React from 'react'
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute1({ isAuth, component: Component, ...rest }) {
    return <Route {...rest} render={(prop) => {
        if (isAuth) {
            return <Component {...prop} />;
        } else {
            return <Redirect to={{ pathname: "/", state: { from: prop.location} }} />
        }
    }} />;
}

export default ProtectedRoute1
