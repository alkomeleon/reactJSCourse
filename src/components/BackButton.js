import React from "react";
import {useHistory} from "react-router-dom";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import IconButton from "@mui/material/IconButton";

export function BackButton() {
    const history = useHistory();
    return (
        <IconButton color="primary" onClick={()=>history.goBack()}>
            <ArrowBackTwoToneIcon />
        </IconButton>
    );
}