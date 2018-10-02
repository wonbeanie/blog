import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorSaveActions from '../../Redux/EditorSave';

class SaveBtn extends Component {

    constructor(props){
        super(props);

        this.saveWriting = this.saveWriting.bind(this);
    }

    //저장 버튼을 클릭시 axios로 데이터 db에 저장
    saveWriting() {
        //오류가 있는지 없는지 체크하는 변수
        let valueCheck = false;

        //입력한 모든 데이터를 저장하는 변수
        let data = this.props.editorData;

        let errorMsg = "";

        for(let key in data) {
            //데이터가 공백이거나 데이터가 잘못들어왔을때
            if((data[key] === "" || null || undefined || data[key] === "<p>&nbsp;</p>") && key !== "tag" ){
                valueCheck = true;
                if(key === "title"){
                    errorMsg = "title";
                }
                else if(key === "category"){
                    errorMsg = "category";
                }
                else if(key === "content"){
                    errorMsg = "content";
                }
                else if(key === "author"){
                    errorMsg = "author";
                }
                this.props.EditorSaveActions.error(errorMsg);
                break;
            }
        }

        //오류가 없을시
        if(!valueCheck){
            this.editPost();
        }
    }

    editPost = async () => {
        const { EditorSaveActions,data } = this.props;
        try {
            await EditorSaveActions.editPost(data);
        } catch(e) {
            console.log("error");
        }
    }

    render() {

        let redirect;
        if(this.props.redirect){
            this.props.EditorSaveActions.clearEditPost();
            redirect = <Redirect to={'/post/'+this.props.postNum} />;
        }

        return (
            <div className="text-right">
                {
                    redirect
                }
                <button type="button" className="btn btn-primary" onClick={this.saveWriting}>SAVE</button>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        data : state.editorsave.data,
        redirect : state.editorsave.redirect,
        postNum : state.editorsave.postNum
    }),
    (dispatch) => ({
        EditorSaveActions: bindActionCreators(editorSaveActions, dispatch)
    })
  )(SaveBtn);