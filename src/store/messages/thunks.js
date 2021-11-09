import { db } from "../../services/firebase";
import { setMessages } from './actions';

export const addMessageWithThunk = (chatName, messageText, author = 'user') => (dispatch, getState) => {
    dispatch(addMessageFB(chatName, {author: author, text: messageText}));
    if (author !== "bot") {
        const botMessage = "bot hello";
        setTimeout(() => dispatch(addMessageFB(chatName, {author: "bot", text: botMessage})), 1000);
    }
}

export const addMessageFB = (chatName, message) => () => {
    db.ref("messages").child(chatName).push(message);
};

const getPayloadFromSnapshot = (snapshot) => {
    const messages = [];

    snapshot.forEach((mes) => {
        messages.push(mes.val());
    });

    return { chatName: snapshot.key, messages };
}

export const initMessageTracking = () => (dispatch) => {
    db.ref("messages").on("child_changed", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch(setMessages(payload));
    });

    db.ref("messages").on("child_added", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch(setMessages(payload));
    });
};

export const getMessagesFB = (chatName) => async (dispatch) => {
    const data = await db.ref("messages").child(chatName).get();
    const payload = getPayloadFromSnapshot(data);
    dispatch(setMessages(payload));
};
