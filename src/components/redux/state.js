import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

let store = {

    _state : {

        profilePage: {

            post: [
                {id: 1, message: 'Hey, how are you?', likes: 3},
                {id: 2, message: 'Che delaesh', likes: 5}
            ],

            newPostText: ''

        },

        dialogsPage: {

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
        },

        sidebar: {

            friends: [
                {id:1, name: 'Ann', src:'https://www.pngrepo.com/download/5125/avatar.png'},
                {id:2, name: 'Maria', src:'https://www.pngrepo.com/download/5125/avatar.png'},
                {id:3, name: 'Max', src:'https://www.pngrepo.com/download/5125/avatar.png'},
                {id:4, name: 'Alex', src:'https://www.pngrepo.com/download/5125/avatar.png'},
                {id:5, name: 'Andrew', src:'https://www.pngrepo.com/download/5125/avatar.png'},
                {id:6, name: 'Sveta', src:'https://www.pngrepo.com/download/5125/avatar.png'},
            ]
        }
    },
    _callSubscriber() {
        console.log('lol');
    },

    getState () {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}


export default store;
window.store = store;