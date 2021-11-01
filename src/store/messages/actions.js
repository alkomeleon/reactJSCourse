import { ADD_MESSAGE } from "./types"

export const addMessage  = (chatName, messageText, author="user") => {
    return {
        type: ADD_MESSAGE,
        payload: {chatName, messageText, author}
        // payload: {
        //     chatId: chatId,
        //     messageText: messageText
        // }
    };
};