import React, {useEffect, useState} from "react";
import {Input, InputAdornment} from "@mui/material";
import {Send} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {messageListSelector, addMessageWithThunk} from "../store/messages";
import {chatValueSelector, setChatValue} from "../store/chat";
import {Message} from "./Message";

export function Chat(props) {
    const inputRef = React.useRef();
    const messageList = useSelector(messageListSelector(props.chatName));
    const messageText = useSelector(chatValueSelector(props.chatName));
    const dispatch = useDispatch();

    function sendMessage() {
        if(!messageText || messageText.length===0){
            return false;
        }
        dispatch(addMessageWithThunk(props.chatName, messageText));
        dispatch(setChatValue(props.chatName));
        inputRef.current.focus();
    }

    const handlePressInput = ({code}) => {
        if (code==="Enter" || code==="NumpadEnter"){
            sendMessage();
        }
    }

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
                    {messageList.map((msg, i) => <Message msg={msg} key={i}/>)}
                </div>
            </>
        );
    }

    return (
        messageList!==null ? <ChatBox/> : <div>Выберите чат</div>
    );
}

export default Chat;