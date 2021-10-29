import { ADD_CHAT, DELETE_CHAT, SET_CHAT_VALUE } from "./types"

export const addChat  = (chatName) => {
    return {
        type: ADD_CHAT,
        payload: chatName
    };
};

export const deleteChat  = (chatName) => {
    return {
        type: DELETE_CHAT,
        payload: chatName
    };
};

export const setChatValue  = (chatName, value) => {
    return {
        type: SET_CHAT_VALUE,
        payload: {chatName, value}
    };
};