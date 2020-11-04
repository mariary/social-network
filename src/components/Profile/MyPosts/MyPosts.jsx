import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile_reducer";

const MyPosts = (props) => {

    let postElement = props.post.map(p => <Post message={p.message} likes={p.likes}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        if (text === '') {
            let i = 2;
        } else {
            props.dispatch(addPostActionCreator());
        }
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div>
            <div className={s.post}>
                <h2>My posts</h2>
                <div>
            <textarea onChange={onPostChange}
                      ref={newPostElement}
                      placeholder="your news..."
                      value={props.newPostText}>
            </textarea>
                </div>
                <button onClick={ addPost } className={s.btn}>Отправить</button>
            </div>
            {postElement}
        </div>
    )
}

export default MyPosts