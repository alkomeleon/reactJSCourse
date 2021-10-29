import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile";
import { chatReducer } from "./chat";
import { messagesReducer } from "./messages";

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chat: chatReducer,
        messages: messagesReducer
    }),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
