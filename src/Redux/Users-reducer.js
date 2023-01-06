import { usersAPI } from "../API/API";

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const FOLLOWING_IN_PROCESS = 'FOLLOWING-IN-PROCESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 40,
    currentPage: 1,
    isFetching: true,
    followingInProcess: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true, }
                    }
                    return u;
                })
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false, }
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case FOLLOWING_IN_PROCESS:
            return {
                ...state,
                followingInProcess: action.followingInProcess
                    ? [...state.followingInProcess, action.userId]
                    : state.followingInProcess.filter(id => id != action.userId)
            };
        default:
            return state;
    }
}

export let setUsers = (users) => {
    return { type: SET_USERS, users }
}
export let followUser = (userId) => {
    return { type: FOLLOW_USER, userId }
}
export let unfollowUser = (userId) => {
    return { type: UNFOLLOW_USER, userId }
}
export let setCurrentPage = (page) => {
    return { type: SET_CURRENT_PAGE, page }
}
export let setTotalUsersCount = (totalCount) => {
    return { type: SET_TOTAL_USERS_COUNT, totalCount }
}
export let toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}
export let toggleFollowingInProcess = (followingInProcess, userId) => {
    return { type: FOLLOWING_IN_PROCESS, followingInProcess, userId }
}

export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setCurrentPage(currentPage));
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProcess(true, userId));
        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followUser(userId));
                }
                dispatch(toggleFollowingInProcess(false, userId));
            });
    }
}

export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProcess(true, userId));
        usersAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowUser(userId));
                }
                dispatch(toggleFollowingInProcess(false, userId));
            });
    }
}
export default usersReducer;