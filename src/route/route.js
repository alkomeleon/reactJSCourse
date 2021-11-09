import React from "react";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ authenticated, to ="/",...rest }) {
    return authenticated ? <Route {...rest} /> : <Redirect to={to} />;
}

export function PublicRoute({ authenticated, to ="/", ...rest }) {
    return <Route {...rest} />;
}