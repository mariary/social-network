const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    post: [
        {id: 1, message: 'Hey, how are you?', likes: 3},
        {id: 2, message: 'Che delaesh', likes: 5}
    ],

    newPostText: ''
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id:5,
                message:state.newPostText,
                likes:0,
            }
            state.post.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.newText;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text});


export default profileReducer;