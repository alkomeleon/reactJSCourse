import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
//import './style.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { ChatPage, MainPage, ProfilePage } from './pages';


    ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route path="/chats">
                        <ChatPage />
                    </Route>
                    <Route path="/profile">
                        <ProfilePage />
                    </Route>
                    {/*<Route path="*">*/}
                    {/*    /!*<h1>404 page</h1>*!/*/}
                    {/*    /!*<Link to="/chat">go to chat</Link>*!/*/}
                    {/*</Route>*/}
                    <Route path="/">
                        <MainPage />
                    </Route>
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

