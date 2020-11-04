const ADD_MESSAGE = 'ADD-MESSAGE';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        {id: 1, message: 'hello,how are u???', src:'https://www.pngrepo.com/download/5125/avatar.png', sender:'me',time:'13:20'},
        {id: 2, message: 'goooooodddd', src:'https://www.pngrepo.com/download/5125/avatar.png', sender:'you', time:'13:20'},
        {id: 3, message: 'and u??', src:'https://www.pngrepo.com/download/5125/avatar.png', sender:'you', time:'13:20'},
        {id: 4, message: 'i\'m bad(', src:'https://www.pngrepo.com/download/5125/avatar.png', sender:'me', time:'13:20'},
        {id: 5, message: 'what\'s up, bro??', src:'https://www.pngrepo.com/download/5125/avatar.png', sender:'you', time:'13:20'},
        {id: 6, message: 'miss you....', src:'https://www.pngrepo.com/download/5125/avatar.png', sender:'me', time:'13:20'}
    ],

    dialogs: [
        {id: 1, name: 'Андрей', src:'https://www.pngrepo.com/download/5125/avatar.png'},
        {id: 2, name: 'Не Андрей', src:'https://www.pngrepo.com/download/5125/avatar.png'},
        {id: 3, name: 'Виктор', src:'https://www.pngrepo.com/download/5125/avatar.png'},
        {id: 4, name: 'Не Виктор', src:'https://www.pngrepo.com/download/5125/avatar.png'},
        {id: 5, name: 'Аня', src:'https://www.pngrepo.com/download/5125/avatar.png'},
        {id: 6, name: 'Лиза', src:'https://www.pngrepo.com/download/5125/avatar.png'}
    ],

    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id:7,
                message:state.newMessageText,
                src:'https://www.pngrepo.com/download/5125/avatar.png',
                sender:'me',
                time:'13:20',
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT :
            state.newMessageText = action.newText ;
            return state;
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text});


export default dialogsReducer;