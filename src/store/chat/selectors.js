export const chatsSelector = (state) => {
    return state.chat;
}

export const chatValueSelector = (chatName) => (state) => {
    let chat = state.chat.find(item => item.chatName===chatName);
    if (chat) {
        return chat.value;
    } else {
        return "";
    }
}