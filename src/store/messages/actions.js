import {SET_MESSAGES} from "./types";

export const setMessages = (payload) => {
    return {
        type: SET_MESSAGES,
        payload,
    }
}