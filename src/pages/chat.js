import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import { ChatsList, Chat } from "../components";
import { useParams } from 'react-router-dom';
import {useSelector} from "react-redux";
import { chatsSelector } from '../store/chat';


export function ChatPage(props) {
    const { chatName } = useParams();
    const chatList = useSelector(chatsSelector);

    return (
        <Container maxWidth="md">
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