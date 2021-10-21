import React from "react";
import {Link} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

export function MainPage() {
    return (
        <>
            <CssBaseline />
            <Link to="/chats">chats</Link>
            <br/>
            <Link to="/profile">profile</Link>
        </>
    );
}