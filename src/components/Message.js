import React from "react";

export const Message = (props) => {
    return (
        <p key={props.key}>
            {props.msg.author}: {props.msg.text}
        </p>);
}