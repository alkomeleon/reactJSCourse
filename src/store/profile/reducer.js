import { TOGGLE_SHOW_NAME } from "./types";

export const profileReducer = (state = {showName: true}, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_NAME:
            return {
                ...state,
                showName: !state.showName
            };
        default:
            return state;
    }
};