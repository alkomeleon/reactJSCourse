import { ADD_MESSAGE } from "./types"

export const addMessage  = (chatName, messageText) => {
    return {
        type: ADD_MESSAGE,
        payload: {chatName, messageText}
        // payload: {
        //     chatId: chatId,
        //     messageText: messageText
        // }
    };
};