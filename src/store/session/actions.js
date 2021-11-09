import {GET_SESSION_SUCCESS, GET_SESSION_ERROR} from "./types"

export const getSessionSuccess  = (user) => {
    return {
        type: GET_SESSION_SUCCESS,
        payload: user
    };
};export const getSessionError  = () => {
    return {
        type: GET_SESSION_ERROR
    };
};

