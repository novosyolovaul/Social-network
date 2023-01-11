import profileReduser, { addPost } from "./Profile-reducer";
import React from "react";


let state = {
    post: [
        { message: 'Hey, it`s my first post' },
        { message: 'I love sushi' },
    ]
};

it('new post should be added', () => {
    let action = addPost('newText')
    let newState = profileReduser(state, action);
    expect(newState.posts.length).toBe(3);
});

