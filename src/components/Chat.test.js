import { Chat } from './Chat';
import { renderWithRedux } from "./renderWithRedux";
import {screen} from '@testing-library/react'

let state = null;

beforeEach(() => {
    state = {
        messages: {
            chat1: [
                { author: "User", text: "test1" },
                { author: "Bot", text: "test2" },
            ],
        },
    };
});

describe("Chat component", () => {
    it("should render with messages", () => {
        const render = renderWithRedux(<Chat chatName="chat1"/>, state);
        const messagesCount = render.container.querySelectorAll('p.message').length;
        expect(messagesCount).toBe(2);
        expect(render.getByText('test1', {exact: false})).toBeInTheDocument();
        expect(render.getByText('test2', {exact: false})).toBeInTheDocument();
    });

    it("should render empty if chat not exists", () => {
        const render = renderWithRedux(<Chat chatName="chat2"/>, state);
        const messagesCount = render.container.querySelectorAll('p.message').length;
        expect(messagesCount).toBe(0);
    });
});