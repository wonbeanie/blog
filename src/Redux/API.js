import axios from 'axios';

//api들만 있는곳

const SERVER_URL = "http://test.com/api";

//수정할 데이터를 가져오는 api
export function getEditPostAPI(postId) {
    return axios.get(`${SERVER_URL}/blog/post/${postId}`);
}

//카테고리 데이터들을 가져오는 api
export function getCategorysAPI() {
    return axios.get(`${SERVER_URL}/api/blog/categories`);
}

//레이아웃 데이터들을 가져오는 api
export function getLayoutAPI() {
    return axios.get(`${SERVER_URL}/blog/layout`);
}

//post확인시 데이터를 가져오는 api
export function getPostAPI(postId) {
    return axios.get(`${SERVER_URL}/blog/post/${postId}`);
}

//post확인시 데이터를 가져오는 api
export function checkLoginAPI(data) {
    return axios.get(`${SERVER_URL}/user/login`,{auth : {
        username : data.email,
        password: data.password
    }});
}

export function getPostsAPI(filerValue,nowPage){
    if(filerValue === "All"){
        return axios.get(`${SERVER_URL}/blog/posts/`+nowPage);
    }else {
        return axios.get(`${SERVER_URL}/blog/posts/category/`+filerValue+'/'+nowPage);
    }
}

export function deletePostAPI(postId){
    return axios.delete(`${SERVER_URL}/blog/manage/post/`+postId);
}

export function editPostAPI(data){
    return axios.post(`${SERVER_URL}/blog/manage/post`,data);
}

export function commentAPI(postNum,data){
    return axios.post(`${SERVER_URL}/blog/post/${postNum}/comment`,[data]);
}

export function delCommentAPI(postNum,commentNo,password){
    return axios.delete(`${SERVER_URL}/blog/post/${postNum}/comment/${commentNo}`,{data : {password : password}});
}

export function editCommentAPI(postNum,commentNo,data){
    return axios.patch(`${SERVER_URL}/blog/post/${postNum}/comment/${commentNo}`,data);
}