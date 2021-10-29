import React, {useEffect, useState} from "react";
import {Input, InputAdornment} from "@mui/material";
import {Send} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {messageListSelector, addMessage} from "../store/messages";
import {chatValueSelector, setChatValue} from "../store/chat";


function renderMessage(msg, i){
    let msgClass = msg.author==='user'?'userMsg':'botMsg';
    return (
        <p key={i} className={'msg '+msgClass}>
            {msg.author}: {msg.text}
        </p>);
}

export function Chat(props) {
    const inputRef = React.useRef();
    const messageList = useSelector(messageListSelector(props.chatName));
    const messageText = useSelector(chatValueSelector(props.chatName));
    const dispatch = useDispatch();

    function sendMessage() {
        if(!messageText || messageText.length===0){
            return false;
        }
        dispatch(addMessage(props.chatName, messageText));
        dispatch(setChatValue(props.chatName));
        inputRef.current.focus();
    }

    const handlePressInput = ({code}) => {
        if (code==="Enter" || code==="NumpadEnter"){
            sendMessage();
        }
    }

    // useEffect(() => {
    //     if (messageList.length === 0) return false;
    //     if (messageList[messageList.length-1].author === 'bot') return false;
    //     setTimeout(()=>setMessageList((messageList)=>[...messageList, {author: 'bot', message: 'hello'}]), 1000);
    // }, [messageList]);

    function ChatBox() {
        return (
            <>
                <Input
                    type="text"
                    id="msg_input"
                    inputRef={inputRef}
                    value={messageText}
                    onChange={(event) => dispatch(setChatValue(props.chatName, event.target.value))}
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
        messageList!==null ? <ChatBox/> : <div>Выберите чат</div>
    );
}

export default Chat;