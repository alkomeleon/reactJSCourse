import CssBaseline from "@mui/material/CssBaseline";
import App from "../App";
import React from "react";
import { Route, Switch, useRouteMatch } from 'react-router-dom';

// const messages = {
//     room1: [],
//     room2: [],
// }
// messages[roomId]

export function ChatPage() {
    const { path, url } = useRouteMatch();

    return (
    <Switch>
        <Route path={url + "/:chatId"}>
            <CssBaseline />
            <App />
        </Route>
        <Route path={url + "*"}>
            <CssBaseline />
            <App />
        </Route>
    </Switch>
    );
}