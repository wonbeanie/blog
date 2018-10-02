import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { checkLoginAPI } from './API';

const SAVEEMAIL = 'SAVEEMAIL';
const SAVEPW = 'SAVEPW';
const REDIRECT = 'REDIRECT';

const CHECKLOGIN = 'CHECKLOGIN';

export const saveEmail = createAction(SAVEEMAIL);
export const savePw = createAction(SAVEPW);
export const redirect = createAction(REDIRECT);

export const checkLogin = createAction(CHECKLOGIN,checkLoginAPI);


const initialState = {
    data : {
        email : "",
        password : ""
    },
    redirect : false
}

export default handleActions({

    ...pender({
        type: CHECKLOGIN,

        onSuccess: (state, action) => {
            state.redirect = true;
            return {
                ...state
            }
        }
    }),
    [SAVEEMAIL]: (state,action) => {
        state.data.email = action.payload;
        return {
            ...state
        }
    },
    [SAVEPW]: (state,action) => {
        state.data.password = action.payload;
        return {
            ...state
        }
    },
    [REDIRECT]: (state,action) => {
        state.redirect = state.payload;
        return {
            ...state
        }
    }
}, initialState);