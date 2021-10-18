import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

const chatList = [
    {id: 1, name: 'chat 1'},
    {id: 2, name: 'chat 2'},
    {id: 3, name: 'chat 3'},
    {id: 4, name: 'chat 4'},
    {id: 5, name: 'chat 5'}
];

export default function SelectedListItem() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
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
