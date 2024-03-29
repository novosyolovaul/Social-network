import { profileAPI } from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

let initialState = {
    post: [
        { id:1, message: 'Hey, it`s my first post' },
        { id:2, message: 'I love sushi' },
    ],
    newPostText: '',
    profile: null,
    status: '',
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let body = action.postText
            return {
                ...state,
                post: [...state.post, { message: body }],
                newPostText: '',
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
            case DELETE_POST:
            return {
                ...state,
                post: state.post.filter(p => p.id != action.postId),
            };
        default:
            return state;
    }
}

export let addPost = (postText) => {
    return { type: ADD_POST, postText }
}
export let deletePost = (postId) => {
    return { type: DELETE_POST, postId }
}
export let setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}
export let setStatus = (status) => {
    return { type: SET_STATUS, status }
}

export const getProfileThunk = (profileId) => {
    return (dispatch) => {
        profileAPI.getProfile(profileId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}
export const getStatusThunk = (profileId) => {
    return (dispatch) => {
        profileAPI.getStatus(profileId)
            .then(data => {
                dispatch(setStatus(data));
            });
    }
}
export const updateStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}
export default profileReduser;