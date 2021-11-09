import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";
import ListItemText from "@mui/material/ListItemText";
import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {chatsSelector, addChatFB, initChatsTracking, getChatsFB} from "../store/chat";
import Button from '@mui/material/Button';


export function ChatsList(props) {
    const initialSelectedIndex = props.selectedIndex || null;
    const chatList = useSelector(chatsSelector);
    const [selectedIndex, setSelectedIndex] = React.useState(initialSelectedIndex);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        history.push('/chats/'+index);
    };

    useEffect(()=>{
        dispatch(getChatsFB());
        dispatch(initChatsTracking());
    }, []);

    function showChatList(listItem) {
        return (
            <ListItemButton
                selected={selectedIndex === listItem.chatName}
                onClick={(event) => handleListItemClick(event, listItem.chatName)}
                key={listItem.chatName}
            >
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={listItem.chatName} />
            </ListItemButton>

        )
    }

    function handleNewChatClick() {
        let newChatName = prompt("Введите название чата");
        if (newChatName.length===0) return false;
        dispatch(addChatFB(newChatName));
    }

    return (
        <Box sx={{ width: '100%', maxWidth: 360 }}>
            <List component="nav" aria-label="main mailbox folders">
                {chatList.map((listItem) => showChatList(listItem))}
            </List>
            <Button onClick={handleNewChatClick}>
                создать чат
            </Button>
        </Box>
    );
}

export default ChatsList;