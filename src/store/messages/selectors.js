export const messageListSelector = (chatName) => (state) => {
    return state.messages[chatName] ?? null;
}