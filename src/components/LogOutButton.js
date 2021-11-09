import React from "react";
import Button from '@mui/material/Button';
import { firebaseApp } from "../services/firebase"

export function LogOutButton() {
    const logout = () => {
        firebaseApp.auth().signOut();
    }
    return (
        <Button color="primary" onClick={()=>logout()}>
            log out
        </Button>
    );
}

