import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import FriendsItem from "./FriendsItem/FriendsItem";

const Navbar = (props) => {

    let friendsElement = props.state.friends.map(f => <FriendsItem src={f.src} name={f.name} id={f.id}/> )

    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink className={s.link} to='/profile'
                                             activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.item}><NavLink className={s.link} to='/dialogs'
                                             activeClassName={s.active}>Message</NavLink></div>
            <div className={s.item}><NavLink className={s.link} to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}><NavLink className={s.link} to='/music'
                                             activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.friends}>
                <p className={s.title}>Friends</p>
                {friendsElement}
            </div>
        </nav>
    )
}

export default Navbar

