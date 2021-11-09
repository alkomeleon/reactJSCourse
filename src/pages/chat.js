import React from 'react';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import {ChatsList, Chat, BackButton} from "../components";
import { useParams } from 'react-router-dom';
import { Menu } from "../components"

export function ChatPage(props) {
    const { chatName } = useParams() || null;

    return (
        <Container maxWidth="md">
            <BackButton/>
            <br/>
            <Menu/>
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <ChatsList selectedChat={chatName}/>
                </Grid>
                <Grid item md={8}>
                    <Chat chatName={chatName}/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ChatPage;