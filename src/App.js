import React, { useEffect, useState } from 'react';
//import './style.css';
import { Input, InputAdornment } from '@mui/material';
import { Send } from "@mui/icons-material";
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import SelectedListItem from "./list";
import { useParams } from 'react-router-dom';


const chatList = [
    {id: 1, name: 'chat 1'},
    {id: 2, name: 'chat 2'},
    {id: 3, name: 'chat 3'},
    {id: 4, name: 'chat 4'},
    {id: 5, name: 'chat 5'}
];

function renderMessage(msg, i){
    let msgClass = msg.author==='user'?'userMsg':'botMsg';
    return (
        <p key={i} className={'msg '+msgClass}>
            {msg.author}: {msg.message}
        </p>);
}

export function App(props) {
    const [messageList, setMessageList] = useState([]);
    const [messageText, setMessageText] = useState('');
    const inputRef = React.useRef();
    const { chatId } = useParams();

    const parsedChatId = parseInt(chatId);

    let chatExists = false;
    for (let i=0; i<chatList.length; i++) {
        if (chatList[i].id === parsedChatId) {
            chatExists = true;
            break;
        }
    }


    function sendMessage() {
        if(messageText.length===0){
            return false;
        }
        setMessageList([...messageList, {author: 'user', message: messageText}]);
        setMessageText('');
        inputRef.current.focus();
    }

    const handlePressInput = ({code}) => {
        if (code==="Enter" || code==="NumpadEnter"){
            sendMessage();
        }
    }

    useEffect(() => {
        if (messageList.length === 0) return false;
        if (messageList[messageList.length-1].author === 'bot') return false;
        setTimeout(()=>setMessageList((messageList)=>[...messageList, {author: 'bot', message: 'hello'}]), 1000);
    }, [messageList]);

    function Chat(props) {
        if (chatExists) {
            return (
                <>
                    <Input
                        type="text"
                        id="msg_input"
                        inputRef={inputRef}
                        value={messageText}
                        onChange={(event) => setMessageText(event.target.value)}
                        onKeyPress={handlePressInput}
                        autoFocus={true}
                        fullWidth={true}
                        autoComplete="off"
                        placeholder="enter message"
                        endAdornment={
                            <InputAdornment position={"end"}>
                                <Send className="icon" onClick={sendMessage}/>
                            </InputAdornment>}
                    />
                    <div className="chat">
                        {messageList.map((msg, i) => renderMessage(msg, i))}
                    </div>
                </>
            );
        } else {
            return (
                <div>Выберите чат</div>
            );
        }
    }

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <SelectedListItem selectedIndex={parsedChatId} chatList={chatList}/>
                </Grid>
                <Grid item md={8}>
                    <Chat />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;