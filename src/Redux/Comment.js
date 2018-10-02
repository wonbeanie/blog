import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { commentAPI,editCommentAPI,delCommentAPI } from './API';

const SAVEDATA = 'SAVEDATA';
const SAVENO = 'SAVENO';
const SAVEAUTHOR = 'SAVEAUTHOR';
const SAVEPASSWORD = 'SAVEPASSWORD';
const SAVECOMMENT = 'SAVECOMMENT';
const DELDATA = 'DELDATA';
const EDITDATA = 'EDITDATA';
const DELCHECK = 'DELCHECK';
const EDITCHECK = 'EDITCHECK';
const SAVEDELDATA = 'SAVEDELDATA';
const CLEARDATA = 'CLEARDATA';
const CLEARCHECK = 'CLEARCHECK';
const SAVEEDITDATA = 'SAVEEDITDATA';
const SAVECOMMENTDATA = 'SAVECOMMENTDATA';


export const saveData = createAction(SAVEDATA,commentAPI);
export const editData = createAction(EDITDATA,editCommentAPI);
export const delData = createAction(DELDATA,delCommentAPI);
export const saveNo = createAction(SAVENO);
export const saveAuthor = createAction(SAVEAUTHOR);
export const savePassword = createAction(SAVEPASSWORD);
export const saveComment = createAction(SAVECOMMENT);
export const saveCommentData = createAction(SAVECOMMENTDATA);
export const delCheck = createAction(DELCHECK);
export const editCheck = createAction(EDITCHECK);
export const clearCheck = createAction(CLEARCHECK);
export const saveDelData = createAction(SAVEDELDATA);
export const saveEditData = createAction(SAVEEDITDATA);
export const clearData = createAction(CLEARDATA);


const initialState = {
    data : {
        author : "",
        password : "",
        comment : ""
    },
    delData : {
        no : "",
        password : ""
    },
    delCheck : {
        no : "",
        check : false
    },
    editCheck : {
        no :"",
        check : false
    },
    no : ""
}

export default handleActions({
    ...pender({
        type: SAVEDATA,

        onSuccess: (state, action) => {
            
            return {
                ...state
            }
        }
    }),
    ...pender({
        type: EDITDATA,

        onSuccess: (state, action) => {

            return {
                ...state
            }
        }
    }),
    ...pender({
        type: DELDATA,

        onSuccess: (state, action) => {
            console.log("good");
            return {
                ...state
            }
        }
    }),
    [SAVENO]: (state,action) => {
        state.no = action.payload;
        return {
            ...state
        }
    },
    [SAVECOMMENT]: (state,action) => {
        state.data.comment = action.payload;
        return {
            ...state
        }
    },
    [SAVEPASSWORD]: (state,action) => {
        state.data.password = action.payload;
        return {
            ...state
        }
    },
    [SAVEAUTHOR]: (state,action) => {
        state.data.author = action.payload;
        return {
            ...state
        }
    },

    [DELCHECK]: (state,action) => {
        state.delCheck = action.payload;
        return {
            ...state
        }
    },

    [EDITCHECK]: (state,action) => {
        state.editCheck = action.payload;
        return {
            ...state
        }
    },

    [SAVEDELDATA]: (state,action) => {
        state.delData = action.payload;
        return {
            ...state
        }
    },

    [SAVEEDITDATA]: (state,action) => {
        state.editData = action.payload;
        return {
            ...state
        }
    },

    [CLEARDATA] : (state,action) => {
        state.data = {
            author : "",
            password : "",
            comment : ""
        };

        return {
            ...state
        }

    },

    [CLEARCHECK] : (state,action) => {
        state.delCheck = {
            no : "",
            check : false
        };

        state.editCheck = {
            no :"",
            check : false
        }

        return {
            ...state
        }

    },

    [SAVECOMMENTDATA] : (state,action) => {
        state.data = action.payload;

        return {
            ...state
        }

    },

}, initialState);