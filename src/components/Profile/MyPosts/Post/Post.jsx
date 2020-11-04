import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
      <div>
        <div className={s.item}>
          {props.message}
          <div className={s.likes}>
            {props.likes}
          </div>
          </div>
      </div>
    )
}

export default Post