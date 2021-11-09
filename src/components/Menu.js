import React from "react";
import {Link} from "react-router-dom";
import {LogOutButton} from "./LogOutButton";
import {useSelector} from "react-redux";
import {sessionSelector} from "../store/session";

export const Menu = () => {
    const user = useSelector(sessionSelector);
    return (
        <div>
            {!user && (
                <>
                    <Link to="/signup">sign up</Link>
                    <br/>
                    <Link to="/login">login</Link>
                </>
            )}

            {user && (
                <>
                    <Link to="/chats">chats</Link>
                    <br/>
                    <Link to="/profile">profile</Link>
                    <br/>
                    <Link to="/gists">gists</Link>
                    <br/>
                    <LogOutButton/>
                </>
            )}
        </div>
    )
}

