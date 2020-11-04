import React from 'react';
import s from './FriendsItem.module.css';
import {NavLink} from 'react-router-dom';
import sidebarReducer from "../../redux/sidebar_reducer";

const FriendsItem = (props) => {

    return (
        <div className={s.person}>
            <NavLink className={s.link} to={'#'} activeClassName={s.active}>
                <img className={s.img} src={props.src}/>
                <div className={s.name}>{props.name}</div>
            </NavLink>
        </div>
    )
}

export default FriendsItem

