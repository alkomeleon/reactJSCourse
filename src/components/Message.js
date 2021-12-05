import React from "react";

export const Message = (props) => {
    if (!props.msg || !props.msg.author || !props.msg.text) {
        return null;
    }

    return (
        <p key={props.index} className="message">
            {props.msg.author}: {props.msg.text}
        </p>);
}