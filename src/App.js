import React, { useEffect, useState } from 'react';
import './style.css';

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

    function sendMessage() {
        if(messageText.length===0){
            return false;
        }
        setMessageList([...messageList, {author: 'user', message: messageText}]);
        setMessageText('');
    }

    useEffect(() => {
        if (messageList.length === 0) return false;
        if (messageList[messageList.length-1].author === 'bot') return false;
        setTimeout(()=>setMessageList((messageList)=>[...messageList, {author: 'bot', message: 'hello'}]), 1000);
    }, [messageList]);

    return (
        <div className="App">
            <div className="chat">
                {messageList.map((msg, i) => renderMessage(msg, i))}
            </div>
            <input type="text" id="msg_input" value={messageText} onChange={(event)=>setMessageText(event.target.value)}/>
            <button onClick={sendMessage}>Отправить</button>
        </div>
    );
}

export default App;