import { SET_MESSAGES } from "./types";

const initialState = {
    chat1: [{author: "bot", text: "this is chat1"}]
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES: {
            return {
                ...state,
                [action.payload.chatName]: action.payload.messages,
            };
        }

        default:
            return state;
    }
};