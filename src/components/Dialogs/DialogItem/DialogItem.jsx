import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    return (
        <div className={s.person}>
            <NavLink className={s.link} to={'/dialogs/' + props.id} activeClassName={s.active}>
                <img className={s.img} src={props.src}/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem