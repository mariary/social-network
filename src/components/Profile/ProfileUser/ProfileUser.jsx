import React from 'react';
import s from './ProfileUser.module.css';

const ProfileUser = () => {
    return (
        <div className={s.profile_user}>
            <img src='https://i.pinimg.com/originals/4b/59/00/4b59004c843338fda818bf935bb6a030.jpg'/>
            <div className={s.user}>
                <img src='https://www.pngrepo.com/download/5125/avatar.png'/>
                <h2> Maria R.</h2>
                <div className={s.describition}>
                    <p>Date of birth: 20 May</p>
                    <p>City: Omsk</p>
                    <p>Education: SPBPU </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileUser