import React from 'react';
import './Dialogs.css';
import DialogsItem from './Messages/DialogsItem/DialogsItem';
import MessageIn from './Messages/MessageIn';
import MessageOut from './Messages/MessageOut';

const Dialogs = (props) => {

    let allDialogs = props.state.dialogs.map ( d => <DialogsItem name={d.name} id={d.id} />)

    return (
        <div className="dialogs__inner">
            <div className="dialogs">
                {allDialogs}
                {/* <DialogsItem dialogs={props.dialogs}/> */}
            </div>
            <div className="messages">
                <MessageOut text="Do you want to take a ride?" />
                <MessageIn text="I am fine. You?" />
                <MessageIn text="Hello" />
                <MessageOut text="Hey, how are you?" />
            </div>
        </div>
    )
}

export default Dialogs;