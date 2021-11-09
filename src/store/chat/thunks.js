import { db } from '../../services/firebase'
import { UPDATE_CHATS } from "./types";
import { setChats } from './actions';

export const addChatFB = (chatName) => (dispatch, getState) => {
    db.ref('chats').child(chatName).set({chatName: chatName, value: ""});
}

export const setChatValueFB = (chatName, value = '') => (dispatch, getState) => {
    db.ref('chats').child(chatName).set({chatName: chatName, value: value});
}

export const getChatsFB = () => async (dispatch, getState) => {
    const data = await db.ref('chats').get();
    const chats = [];

    data.forEach((snap) => {
        chats.push(snap.val());
    });

    dispatch(setChats(chats));
}

export const initChatsTracking = () => (dispatch) => {
    db.ref("chats").on("child_changed", (snapshot) => {
        const chat = snapshot.val();
        dispatch({
            type: UPDATE_CHATS,
            payload: chat,
        });
    });

    db.ref("chats").on("child_added", (snapshot) => {
        const chat = snapshot.val();
        dispatch({
            type: UPDATE_CHATS,
            payload: chat,
        });
    });
};