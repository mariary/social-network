import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileUser from "./ProfileUser/ProfileUser";

const Profile = (props) => {

    return (
        <div className={s.profile_content}>
            <ProfileUser/>
            <MyPosts post={props.profilePage.post}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}

export default Profile