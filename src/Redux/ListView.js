import { createAction, handleActions } from 'redux-actions';
import $ from 'jquery';
import { pender } from 'redux-pender';
import { getPostsAPI, deletePostAPI } from './API';

const GET_POSTS = 'GET_POSTS';
const SETVALUE = 'SETVALUE';
const NEXTPAGE = 'NEXTPAGE';
const SETTYPE = 'SETTYPE';
const DEL_POST = 'DEL_POST';

export const getPosts = createAction(GET_POSTS,getPostsAPI);
export const delPost = createAction(DEL_POST,deletePostAPI);
export const nextPage = createAction(NEXTPAGE);
export const setValue = createAction(SETVALUE);
export const setType = createAction(SETTYPE);

const initialState = {
    postsData : {},
    filerValue : "All",
    nowPage : 0,
    bigPage : 0,
    type : "list"
}

export default handleActions({
    ...pender({
        type: GET_POSTS,
        onSuccess: (state, action) => { 
            let windowY = window.scrollY;
            let interval = setInterval(function(){
                if(windowY <= $('#maincontainer').offset().top){
                    clearInterval(interval);
                }
                else {
                    windowY -= 30;
                    window.scrollTo(0,windowY);
                }
            },10);

            state.postsData.postsListData = action.payload.data.content;
            state.postsData.totalPage = action.payload.data.totalPages;
            state.postsData.viewPages = action.payload.data.pageable.pageSize;
            state.postsData.totalBigPage = Math.floor(action.payload.data.totalPages/5);

            return {
                ...state
            }
        }

    }),
    ...pender({
        type: DEL_POST,
        onSuccess: (state, action) => {
            let windowY = window.scrollY;
            let interval = setInterval(function(){
                if(windowY <= $('#maincontainer').offset().top){
                    clearInterval(interval);
                }
                else {
                    windowY -= 30;
                    window.scrollTo(0,windowY);
                }
            },10);
            return {
                ...state
            }
        }

    }),


    [NEXTPAGE]: (state,action) => {
        state.bigPage = action.payload.bigPage;
        state.nowPage = action.payload.nowPage;

        return {
            ...state
        }
    },
    [SETVALUE]: (state,action) => {
        state.filerValue = action.payload.filerValue;
        state.nowPage = action.payload.nowPage;

        return {
            ...state
        }
    },
    [SETTYPE]: (state,action) => {
        state.type = action.payload;
        return {
            ...state
        }
    },
}, initialState);