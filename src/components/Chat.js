import React, {useEffect, useState} from "react";
import {Input, InputAdornment} from "@mui/material";
import {Send} from "@mui/icons-material";

function renderMessage(msg, i){
    let msgClass = msg.author==='user'?'userMsg':'botMsg';
    return (
        <p key={i} className={'msg '+msgClass}>
            {msg.author}: {msg.message}
        </p>);
}

export function Chat(props) {
    const inputRef = React.useRef();
    const [messageList, setMessageList] = useState([]);
    const [messageText, setMessageText] = useState('');

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

    function ChatBox(props) {
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
    }

    return (
        props.chatExists ? <ChatBox/> : <div>Выберите чат</div>
    );
}

export default Chat;