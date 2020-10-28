import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './LeftSideBar.module.css';

let LeftSideBar = () => {
    return (
        <div className={styles.leftSideBar}>
            <uL>
                <li><NavLink to="/Profile" activeClassName={styles.active}>My Profile</NavLink></li>
                <li><NavLink to="/News" activeClassName={styles.active}>News</NavLink></li>
                <li><NavLink to="/Dialogs" activeClassName={styles.active}>Messages</NavLink></li>
                <li><NavLink to="/Music" activeClassName={styles.active}>Music</NavLink></li>
                <li><NavLink to="/Settings" activeClassName={styles.active}>Settings</NavLink></li>
                <li><a href = "#">Log Out</a></li>
            </uL>
        </div>
    )
}

export default LeftSideBar;