import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { addMessage } from "../../Redux/Message-reducer";
import withAuthRedirect from "../HOC/withAuthRedirect";
import Message from "./Message";


let mapStateToProps = (state) => {
    return {
        dialog: state.messagePage.dialog,
        chat: state.messagePage.chat,
        newChatText: state.messagePage.newChatText,
    }
}

export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect
)(Message);