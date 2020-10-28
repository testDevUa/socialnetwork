import React from 'react';
import './MessageIn.css';

const MessageIn = (props) => {
    return (
        <div className="message">
            {/* I am fine. You? */}
            {props.text}
        </div>
    )
}

export default MessageIn;