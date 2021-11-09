import { SET_CHATS } from "./types"

export const setChats  = (chats) => {
    return {
        type: SET_CHATS,
        payload: chats
    };
};
