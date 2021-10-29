import { ADD_CHAT, DELETE_CHAT, SET_CHAT_VALUE } from "./types";

const initialState = [
    {chatName: "chat1", value: ""}
    ];

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            let chatExist1 = state.find((item)=>item.chatName===action.payload);
            if(chatExist1) return state;
            return [
                ...state,
                {chatName: action.payload, value: ""}
            ];
        case DELETE_CHAT:
            return state.filter(item=>action.payload!==item.chatName);
            // if(action.payload!==item.chatName){
            //     return true
            // }
            // return false)
        case SET_CHAT_VALUE:
            let chatExist2 = state.find((item)=>item.chatName===action.payload.chatName);
            if(!chatExist2) return state;
            return state.map((item)=>{
                if(item.chatName===action.payload.chatName){
                    return {chatName: action.payload.chatName, value: action.payload.value}
                } else {
                    return item;
                }
            });
        default:
            return state;
    }
};