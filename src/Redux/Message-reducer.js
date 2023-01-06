const ADD_MESSAGE = 'ADD-MESSAGE';
let initialState = {
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
};

const messageReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.messageText
            return {
                ...state,
                chat: [...state.chat, { id: 4, message: body }],
            };
        default:
            return state;
    }
}

export let addMessage = (messageText) => {
    return { type: ADD_MESSAGE, messageText }
}
export default messageReduser;