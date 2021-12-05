import { Message } from './Message';
import { renderWithRedux } from "./renderWithRedux";
import {screen} from '@testing-library/react'

describe("Message component", () => {
    it("should render with message", () => {
        const render = renderWithRedux(<Message index={0} msg={{author: 'User', text: 'text'}}/>, {});
        const messagesCount = render.container.querySelectorAll('p').length;
        expect(messagesCount).toBe(1);
        expect(render.getByText('User', {exact: false})).toBeInTheDocument();
        expect(render.getByText('text', {exact: false})).toBeInTheDocument();
    });

    it("should render empty if message is null", () => {
        const render = renderWithRedux(<Message index={0} msg={null}/>, {});
        const messagesCount = render.container.querySelectorAll('p').length;
        expect(messagesCount).toBe(0);
    });

    it("should render empty if message text is null", () => {
        const render = renderWithRedux(<Message index={0} msg={{author: 'User', text: null}}/>, {});
        const messagesCount = render.container.querySelectorAll('p').length;
        expect(messagesCount).toBe(0);
    });

    it("should render empty if message author is null", () => {
        const render = renderWithRedux(<Message index={0} msg={{author: null, text: 'text'}}/>, {});
        const messagesCount = render.container.querySelectorAll('p').length;
        expect(messagesCount).toBe(0);
    });
});