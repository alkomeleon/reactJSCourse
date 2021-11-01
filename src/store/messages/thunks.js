import {addMessage} from "./actions"

export const addMessageWithThunk = (chatName, messageText, author) => (dispatch, getState) => {
    dispatch(addMessage(chatName, messageText, author));
    if (author !== "bot") {
        const botMessage = "bot hello";
        setTimeout(() => dispatch(addMessage(chatName, botMessage, "bot")), 1000);
    }
}