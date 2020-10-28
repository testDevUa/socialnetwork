import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialogs.css';
import MessageIn from './Messages/MessageIn';
import MessageOut from './Messages/MessageOut';

const DialogsItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return (
        <NavLink to={path} activeClassName="active">
            {props.name}
        </NavLink>
    )
}

const Dialogs = () => {
    let DialogsData = [
        {
            name: 'Dmytro',
            id: 1
        },
        {
            name: 'Sasha',
            id: 2
        },
        {
            name: 'Vova',
            id: 3
        },
        {
            name: 'Nastya',
            id: 4
        }

    ];

    let dialogs = DialogsData.map ( (d) => <DialogsItem name={d.name} id={d.id} />)

    console.log(DialogsData.filter(item => item.id > 2));
    return (
        <div className="dialogs__inner">
            <div className="dialogs">
                { dialogs }
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