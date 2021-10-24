import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowName } from "../store/profile";
import { BackButton } from "../components";


export function ProfilePage() {
    const { showName } = useSelector(state => state);
    const dispatch = useDispatch();

    const setShowName = useCallback(()=>{
        dispatch(toggleShowName());
    }, [dispatch]);


    return (
        <>
            <BackButton/>
            <div>profile</div>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <span>Show Name</span>
            {showName && <div>Username</div>}
        </>
    );
}

