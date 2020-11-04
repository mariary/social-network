import React from 'react';
import s from './Message.module.css';
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return (
        <div className={s.message + ' ' + `${props.sender}`}>
            <div className={s.item}>
                <NavLink className={s.link} to={'/dialogs/' + props.id} activeClassName={s.active}>
                    <img className={s.img} src={props.src}/>
                </NavLink>
                <div className={s.text}>
                {props.message}
                </div>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>

    )
}

export default Message