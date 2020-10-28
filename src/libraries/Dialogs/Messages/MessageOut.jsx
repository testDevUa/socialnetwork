import React from 'react';
import './MessageOut.css';

const MessageOut = (props) => {
    return (
        <div className="message out">
            {props.text}
        </div>
    )
}

export default MessageOut;