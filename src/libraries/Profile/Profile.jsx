import React from 'react';
import './profile.css';
import Posts from './Posts/Posts';

let Profile = (props) => {
    return (
        <div className="profile">
            <div className='profile__inner'>
                <div className='profile__avatar'></div>
                <div className='profile__info'>
                    <div className='profile__name'>Dmitry K.</div>
                    <div className='profile__additions'>
                        <div className='profile__item'>Date of Birth:</div>
                        <div className='profile__item'>City:</div>
                        <div className='profile__item'>Education:</div>
                        <div className='profile__item'>Website:</div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <Posts state = {props.state} addPost = {props.addPost}/>    
        </div>
    )
}

export default Profile;