import messageReduser from "./Message-reducer";
import profileReduser from "./Profile-reducer";

let store = {
    _state: {
        profilePage: {
            post: [
                { message: 'Hey, it`s my first post' },
                { message: 'I love sushi' },
            ],
            newPostText: '',
        },
        messagePage: {
            dialog: [
                { id: 1, name: 'Name1' },
                { id: 2, name: 'Name2' },
                { id: 3, name: 'Name3' },
            ],
            chat: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'I like swimming' },
                { id: 3, message: 'I love dogs' },
            ],
            newChatText: '',
        },

    },
    getState() {
        return this._state
    },
    renderEntireTree() {
        console.log('blabla');
    },
    subscriber(observer) {
        this.renderEntireTree = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.messagePage = messageReduser(this._state.messagePage, action);
        this.renderEntireTree();
    }

}

export default store;