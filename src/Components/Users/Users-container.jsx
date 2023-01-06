import React from "react";
import { connect } from "react-redux";
import { setCurrentPage, unfollowThunk, followThunk, getUsersThunk } from "../../Redux/Users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { getCurrentPage, getFollowingInProcess, getPageSize, getTotalUsersCount, getUsers } from "../../Redux/Users-selectors";





class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (p) => {
        this.props.getUsersThunk(p, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    followingInProcess={this.props.followingInProcess}
                    followThunk={this.props.followThunk}
                    unfollowThunk={this.props.unfollowThunk} />
            </>)
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProcess: getFollowingInProcess(state),
    }
}

let UsersContainer = connect(mapStateToProps, {
    setCurrentPage,
    getUsersThunk,
    followThunk,
    unfollowThunk,
})(UsersAPI);

export default UsersContainer;