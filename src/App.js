import React, { useEffect, useState } from 'react';
//import './style.css';
import { Input, InputAdornment } from '@mui/material';
import { Send } from "@mui/icons-material";
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import SelectedListItem from "./list";


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

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <SelectedListItem />
                </Grid>
                <Grid item md={8}>
                    <Input
                        type="text"
                        id="msg_input"
                        inputRef={inputRef}
                        value={messageText}
                        onChange={(event)=>setMessageText(event.target.value)}
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
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;