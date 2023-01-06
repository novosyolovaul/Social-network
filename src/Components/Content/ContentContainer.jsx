import React from "react";
import Content from "./Content";
import { connect } from "react-redux";
import { getProfileThunk, getStatusThunk, updateStatusThunk } from "../../Redux/Profile-reducer";
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { compose } from "redux";



function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

class ContentContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.userId;
        if (!profileId) {
            profileId = this.props.myId;
        }
        this.props.getProfileThunk(profileId);
        this.props.getStatusThunk(profileId);
    }
    render() {
        return (
            <Content {...this.props} profile={this.props.profile}
                status={this.props.status} updateStatusThunk={this.props.updateStatusThunk} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    myId: state.auth.id,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, { getProfileThunk, getStatusThunk, updateStatusThunk }),
    withAuthRedirect,
    withRouter
)(ContentContainer);

