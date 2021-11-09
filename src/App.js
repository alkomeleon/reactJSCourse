import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {ChatPage, MainPage, ProfilePage, GistsList, SignUp, Login} from "./pages";
import CssBaseline from "@mui/material/CssBaseline";
import {PrivateRoute, PublicRoute} from "./route/route";
import {useDispatch, useSelector} from "react-redux";
import {sessionSelector, onAuthStateChanged} from "./store/session";


export function App(props) {
    const user = useSelector(sessionSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(onAuthStateChanged());
    }, [dispatch]);
    return (
        <BrowserRouter>
            <CssBaseline />
            <Switch>
                <PrivateRoute authenticated={user} path="/chats">
                    <Switch>
                        <Route path={"/chats/:chatName"}>
                            <ChatPage />
                        </Route>
                        <Route path={"/chats*"}>
                            <ChatPage />
                        </Route>
                    </Switch>
                </PrivateRoute>
                <PrivateRoute authenticated={user} path="/profile">
                    <ProfilePage />
                </PrivateRoute>
                <PrivateRoute authenticated={user} path="/gists">
                    <GistsList />
                </PrivateRoute>
                <PublicRoute authenticated={user} path="/signup">
                    <SignUp />
                </PublicRoute>
                <PublicRoute authenticated={user} path="/login">
                    <Login />
                </PublicRoute>
                <PublicRoute authenticated={user} path="/">
                    <MainPage />
                </PublicRoute>
            </Switch>
        </BrowserRouter>
    );
}

export default App;