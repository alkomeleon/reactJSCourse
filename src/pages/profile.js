import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowName } from "../store/profile";
import { BackButton } from "../components";


export function ProfilePage() {
    const { showName } = useSelector(state => state.profile);
    const dispatch = useDispatch();

    return (
        <>
            <BackButton/>
            <div>profile</div>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={()=>dispatch(toggleShowName())}
            />
            <span>Show Name</span>
            {showName && <div>Username</div>}
        </>
    );
}

