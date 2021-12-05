import { chatReducer } from "./reducers";

let state = null;

beforeEach(() => {
    state = [
        {chatName: "chat1", value: "test1"},
        {chatName: "chat2", value: "test2"},
    ];
});

describe("Chats reducer", ()=> {
    it('Unknown action type', () => {
        const resultState = chatReducer(state, {
            type: 'UNKNOWN TYPE 123',
        });
        expect(resultState).toBe(state);
    });

    it('SET_CHATS action type', () => {
        const payload = [
            {chatName: "chat1", value: Math.random()},
        ];
        const resultState = chatReducer(state, {
            type: 'SET_CHATS',
            payload
        });
        expect(resultState).toBe(payload);
    });

    it('UPDATE_CHATS action type, update value in existing chat', () => {
        const payload = {chatName: "chat1", value: "test3"};
        const expectedState = [
            {chatName: "chat1", value: "test3"},
            {chatName: "chat2", value: "test2"},
        ];
        const resultState = chatReducer(state, {
            type: 'UPDATE_CHATS',
            payload
        });
        expect(resultState).toStrictEqual(expectedState);
    });

    it('UPDATE_CHATS action type, update value in not existing chat', () => {
        const payload = {chatName: "chat3", value: "test3"};
        const expectedState = [
            {chatName: "chat1", value: "test1"},
            {chatName: "chat2", value: "test2"},
            {chatName: "chat3", value: "test3"}
        ];
        const resultState = chatReducer(state, {
            type: 'UPDATE_CHATS',
            payload
        });
        expect(resultState).toStrictEqual(expectedState);
    });

    it('UPDATE_CHATS action type, set null value in existing chat', () => {
        const payload = {chatName: "chat2", value: null};
        const expectedState = [
            {chatName: "chat1", value: "test1"},
            {chatName: "chat2", value: null}
        ];
        const resultState = chatReducer(state, {
            type: 'UPDATE_CHATS',
            payload
        });
        expect(resultState).toStrictEqual(expectedState);
    });
});