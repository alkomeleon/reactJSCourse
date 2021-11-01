import { ADD_MESSAGE } from "./types";
import { ADD_CHAT } from "../chat/types";

const initialState = {
    chat1: [{author: "bot", text: "this is chat1"}]
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                [action.payload.chatName]: [...state[action.payload.chatName], {author: action.payload.author, text: action.payload.messageText}]
            };
        case ADD_CHAT:
            return {
                ...state,
                [action.payload]: [{author: "bot", text: `this is ${action.payload}`}]
            };
        default:
            return state;
    }
};