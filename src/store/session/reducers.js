import {GET_SESSION_SUCCESS, GET_SESSION_ERROR} from "./types"

const initialState = {
    user: null
};

export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SESSION_SUCCESS:

            return {...state, user: action.payload}
        case GET_SESSION_ERROR:
            return {...state, user: null}
        default:
            return state;
    }
};