import React from "react";
import {Link} from "react-router-dom";

export function MainPage() {
    return (
        <>
            <Link to="/chats">chats</Link>
            <br/>
            <Link to="/profile">profile</Link>
        </>
    );
}