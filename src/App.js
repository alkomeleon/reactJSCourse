import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ChatPage, MainPage, ProfilePage} from "./pages";
import CssBaseline from "@mui/material/CssBaseline";

export function App(props) {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Switch>
                <Route path="/chats">
                    <Switch>
                        <Route path={"/chats/:chatId"}>
                            <ChatPage />
                        </Route>
                        <Route path={"/chats*"}>
                            <ChatPage />
                        </Route>
                    </Switch>
                </Route>
                <Route path="/profile">
                    <ProfilePage />
                </Route>
                <Route path="/">
                    <MainPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;