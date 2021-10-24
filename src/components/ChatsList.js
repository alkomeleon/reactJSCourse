import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { useHistory } from 'react-router-dom';



export function ChatsList(props) {
    const initialSelectedIndex = props.selectedIndex || null;
    const chatList = props.chatList || [];

    const [selectedIndex, setSelectedIndex] = React.useState(initialSelectedIndex);
    const history = useHistory();

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        history.push('/chats/'+index);
    };

    function showChatList(listItem) {
        return (
            <ListItemButton
                selected={selectedIndex === listItem.id}
                onClick={(event) => handleListItemClick(event, listItem.id)}
                key={listItem.id}
            >
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={listItem.name} />
            </ListItemButton>

        )
    }

    return (
        <Box sx={{ width: '100%', maxWidth: 360 }}>
            <List component="nav" aria-label="main mailbox folders">
                {chatList.map((listItem) => showChatList(listItem))}
            </List>
        </Box>
    );
}

export default ChatsList;