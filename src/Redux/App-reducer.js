import { getAuthThunk } from "./Auth-reducer";

const SET_INITIOLIZATION = 'SET-INITIOLIZATION';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIOLIZATION:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
}

export let setItiolozation = () => {
    return { type: SET_INITIOLIZATION }
}

export const initiolizationThunk = () => (dispatch) => {
    let promise = dispatch(getAuthThunk());
    Promise.all([promise]).then(() => {
        dispatch(setItiolozation())
    });
}
export default appReducer;