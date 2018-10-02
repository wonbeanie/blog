import { combineReducers } from 'redux';
import editorsave from './EditorSave';
import post from './post';
import login from './Login';
import layout from './layout';
import categorys from './Categorys';
import listview from './ListView';
import comment from './Comment';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    editorsave,
    post,
    layout,
    categorys,
    comment,
    login,
    listview,
    pender: penderReducer
});