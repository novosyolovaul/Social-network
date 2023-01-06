import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import authReducer from './Auth-reducer';
import messageReduser from './Message-reducer';
import profileReduser from './Profile-reducer';
import usersReducer from './Users-reducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './App-reducer';

let reducers = combineReducers({
    profilePage: profileReduser,
    messagePage: messageReduser,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;