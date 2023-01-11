import profileReduser, { addPost } from "./Profile-reducer";
import React from "react";


let state = {
    post: [
        { message: 'Hey, it`s my first post' },
        { message: 'I love sushi' },
    ]
};

test('new post should be added', () => {
    let action = addPost('newText')
    let newState = profileReduser(state, action);
    expect(newState.post.length).toBe(3);
});

