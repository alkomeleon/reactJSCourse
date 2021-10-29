export const messageListSelector = (chatName) => (state) => {
    if(chatName in state.messages){
        return state.messages[chatName];
    } else {
        return null;
    }
}