import { SET_CHATS, UPDATE_CHATS } from "./types";

const initialState = [
    {chatName: "chat1", value: ""}
    ];

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHATS:
            return action.payload;
        case UPDATE_CHATS:
            if (state.find((item)=>item.chatName===action.payload.chatName)) {
                return state.map((item)=>{
                    if(item.chatName===action.payload.chatName){
                        return {chatName: action.payload.chatName, value: action.payload.value}
                    } else {
                        return item;
                    }
                });
            } else {
                return [
                    ...state,
                    {chatName: action.payload.chatName, value: action.payload.value}
                ];
            }
        default:
            return state;
    }
};