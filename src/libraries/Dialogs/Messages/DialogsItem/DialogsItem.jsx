import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return (
        <NavLink to={path} activeClassName="active">
            {props.name}
        </NavLink>
    )
}

export default DialogsItem;