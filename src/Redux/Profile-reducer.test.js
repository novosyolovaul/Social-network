import profileReduser, { addPost, deletePost } from "./Profile-reducer";
import React from "react";


let state = {
    post: [
        { id: 1, message: 'Hey, it`s my first post' },
        { id: 2, message: 'I love sushi' },
    ]
};

it('new post should be added', () => {
    let action = addPost('newText')
    let newState = profileReduser(state, action);
    expect(newState.post.length).toBe(3);
});

it('new post text should be correct', () => {
    let action = addPost('newText')
    let newState = profileReduser(state, action);
    expect(newState.post[2].message).toBe('newText');
});

it('after deleting messages length shoul be decremented', () => {
    let action = deletePost(1)
    let newState = profileReduser(state, action);
    expect(newState.post.length).toBe(1);
});

it(`after deleting messages length shouln't be decremented if ID is incorrect`, () => {
    let action = deletePost(100)
    let newState = profileReduser(state, action);
    expect(newState.post.length).toBe(2);
});