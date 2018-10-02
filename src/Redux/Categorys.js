import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { getCategorysAPI } from './API';

const GET_CATEGORYS = 'GET_CATEGORYS';

export const getCategorys = createAction(GET_CATEGORYS, getCategorysAPI);


const initialState = [
    
]

export default handleActions({
    ...pender({
        type: GET_CATEGORYS, // type 이 주어지면, 이 type 에 접미사를 붙인 액션핸들러들이 담긴 객체를 생성합니다.
        /*
            요청중 / 실패 했을 때 추가적으로 해야 할 작업이 있다면 이렇게 onPending 과 onFailure 를 추가해주면됩니다.
            onPending: (state, action) => state,
            onFailure: (state, action) => state
        */
        onSuccess: (state, action) => { // 성공했을때 해야 할 작업이 따로 없으면 이 함수 또한 생략해도 됩니다.
            return action.payload.data
        }
    })
}, initialState);