import { authAPI } from "../API/API";

const SET_USER_AUTH = 'SET-USER-AUTH';
const SET_LOGIN_ERROR = 'SET-LOGIN-ERROR';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    errorMessage: '',
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                ...action.data,
            };
        case SET_LOGIN_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage,
            };
        default:
            return state;
    }
}

export let setAuthUser = (id, login, email, isAuth) => {
    return { type: SET_USER_AUTH, data: { id, login, email, isAuth } }
};
export let setLoginError = (errorMessage) => {
    return { type: SET_LOGIN_ERROR, errorMessage }
};

export const getAuthThunk = () => {
    return (dispatch) => {
        return authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUser(data.data.id, data.data.login, data.data.email, true));
                }
            });
    }
}

export const loginThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.loginAuth(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthThunk());
                }else{
                    dispatch(setLoginError(data.messages[0]))
                }
            }
            );
    }
}

export const logoutThunk = () => {
    return (dispatch) => {
        authAPI.logoutAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUser(null, null, null, false));
                }
            });
    }
}
export default authReducer;