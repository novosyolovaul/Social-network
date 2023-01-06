import React from "react";
import { connect } from "react-redux";
import { addPost } from "../../../Redux/Profile-reducer";
import Posts from "./Posts";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        post: state.profilePage.post,
    }
}

let PostsContainer = connect(mapStateToProps, { addPost })(Posts);

export default PostsContainer;