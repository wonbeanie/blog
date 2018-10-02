import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import { getEditPostAPI, editPostAPI } from './API';

const GET_EDITPOST = 'GET_EDITPOST';
const EDIT_POST = 'EDIT_POST';

const TITLE = 'TITLE';
const CATEGORY = 'CATEGORY';
const CONTENT = 'CONTENT';
const TAGS = 'TAGS';
const AUTHOR = 'AUTHOR';
const TAGDEL = 'TAGDEL';
const ERROR = 'ERROR';
const REDIRECT = 'REDIRECT';
const CLEAREDITPOST = 'CLEAREDITPOST';

export const title = createAction(TITLE);
export const category = createAction(CATEGORY);
export const content = createAction(CONTENT);
export const tags = createAction(TAGS);
export const author = createAction(AUTHOR);
export const tagdel = createAction(TAGDEL);
export const error = createAction(ERROR);
export const redirect = createAction(REDIRECT);
export const getEditPost = createAction(GET_EDITPOST, getEditPostAPI);
export const clearEditPost = createAction(CLEAREDITPOST);
export const editPost = createAction(EDIT_POST,editPostAPI);

const initialState = {
    data : {
        title : "",
        category : "",
        content : "",
        tags : [],
        author : "kwangwon"
    },
    error : "",
    redirect : false
};

export default handleActions({
    [TITLE]: (state,action) => {
        state.data.title = action.payload;
        return {
            ...state
        }
    },
    [CATEGORY]: (state,action) => {
        state.data.category = action.payload;
        return {
            ...state
        }
    },
    [CONTENT]: (state,action) => {
        state.data.content = action.payload;
        return {
            ...state
        }
    },
    [TAGS]: (state,action) => {
        state.data.tags = [...state.data.tags,action.payload];
        return {
            ...state
        }
    },
    [AUTHOR]: (state,action) => {
        state.data.author = action.payload;
        return {
            ...state
        }
    },
    [TAGDEL]: (state,action) => {
        state.data.tags = state.data.tags.filter((tag) => tag !== action.payload);
        return {
            ...state
        }
    },
    [ERROR]: (state,action) => {
        state.error = action.payload;
        return {
            ...state
        }
    },
    [REDIRECT]: (state,action) => {
        state.postNum = "";
        state.redirect = action.payload;
        return {
            ...state
        }
    },
    [CLEAREDITPOST]: (state,action) => {
        state = {
            data : {
                title : "",
                category : "",
                content : "",
                tags : [],
                author : "kwangwon"
            },
            error : "",
            redirect : false
        };
        return {
            ...state
        }
    },
    ...pender({
        type: GET_EDITPOST, // type 이 주어지면, 이 type 에 접미사를 붙인 액션핸들러들이 담긴 객체를 생성합니다.
        /*
            요청중 / 실패 했을 때 추가적으로 해야 할 작업이 있다면 이렇게 onPending 과 onFailure 를 추가해주면됩니다.
            onPending: (state, action) => state,
            onFailure: (state, action) => state
        */
        onSuccess: (state, action) => { // 성공했을때 해야 할 작업이 따로 없으면 이 함수 또한 생략해도 됩니다.
            state.data = action.payload.data;
            return {
                ...state
            }
        }
    }),
    ...pender({
        type: EDIT_POST,
        onSuccess: (state, action) => {
            state.postNum = action.payload.data.no;
            state.redirect = true;
            
            return {
                ...state
            }
        }
    })
}, initialState);