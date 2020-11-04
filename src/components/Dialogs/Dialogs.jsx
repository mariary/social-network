import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../redux/dialogs_reducer";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src}/>);

    let messagedElements = props.state.messages.map(m => <Message message={m.message} id={m.id} src={m.src}
                                                                  sender={m.sender} time={m.time}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        if (text === '') {
            let i = 2;
        } else {
            props.dispatch(addMessageActionCreator());
        }
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.dialogs_content}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagedElements}
                <div className={s.write}>
                    <textarea placeholder="your message..."
                              onChange={onMessageChange}
                              ref={newMessageElement}
                              value={props.newMessageText}>
                    </textarea>
                    <button onClick={ addMessage } className={s.btn}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs