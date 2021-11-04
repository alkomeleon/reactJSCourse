import React, { useEffect, useState, useCallback } from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import {useSelector, useDispatch} from "react-redux";
import {gistsSelector, getAllGists } from "../store/gists";

export const GistsList = () => {
    const { gists, loading, error } = useSelector(gistsSelector)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGists());
    }, []);

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description || 'No description'}</li>,
        []
    );

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={()=>dispatch(getAllGists())}>Retry</button>
            </>
        );
    }


    return <ul>{gists.map(renderGist)}</ul>;
};
