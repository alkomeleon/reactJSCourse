import { getGistsStart, getGistsSuccess, getGistsError } from './actions';

const API_URL_PUBLIC = "https://api.github.com/gists/public";


export const getAllGists = () => async (dispatch, getState) => {
    dispatch(getGistsStart());

    try {
        const response = await fetch(API_URL_PUBLIC);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const result = await response.json();
        dispatch(getGistsSuccess(result));
    } catch(err) {
        dispatch(getGistsError(err.message));
    }
}