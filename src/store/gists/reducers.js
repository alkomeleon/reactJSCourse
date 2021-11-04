import {
    GET_GISTS_START,
    GET_GISTS_SUCCESS,
    GET_GISTS_ERROR,
} from "./types";

const initialState = {
    gists: [],
    error: null,
    loading: false,
};

export const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_START:
            return { ...state, loading: true, error: null };
        case GET_GISTS_SUCCESS:
            return { ...state, loading: false, gists: action.payload };
        case GET_GISTS_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};