import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import { ChatsList, Chat } from "../components";
import { useParams } from 'react-router-dom';

const chatList = [
    {id: 1, name: 'chat 1'},
    {id: 2, name: 'chat 2'},
    {id: 3, name: 'chat 3'},
    {id: 4, name: 'chat 4'},
    {id: 5, name: 'chat 5'}
];

export function ChatPage(props) {
    const { chatId } = useParams();
    const parsedChatId = parseInt(chatId);

    let chatExists = false;
    for (let i=0; i<chatList.length; i++) {
        if (chatList[i].id === parsedChatId) {
            chatExists = true;
            break;
        }
    }

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <ChatsList selectedIndex={parsedChatId} chatList={chatList}/>
                </Grid>
                <Grid item md={8}>
                    <Chat chatExists={chatExists}/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ChatPage;