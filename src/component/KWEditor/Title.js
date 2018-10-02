import React, { Component } from 'react';
import $ from 'jquery';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorSaveActions from '../../Redux/EditorSave';

class Title extends Component {

    constructor(props){
        super(props);
        this.changeTitle = this.changeTitle.bind(this);
    }

    //제목 입력시 이함수 호출로 인해 Viewer에 데이터 저장
    changeTitle(event) {
        this.props.EditorSaveActions.title(event.target.value);
    }

    //저장된 title이 바뀔때마다 다시 데이터 불러오기
    componentWillReceiveProps(nextProps) {
        //title 데이터가 바뀌거나 errorMsg가 있을시
        if(this.props.title !== nextProps.title || this.props.errorMsg !== nextProps.errorMsg){
            //title이 있거나 errorMsg가 없을때
            if(nextProps.title !== "" && nextProps.errorMsg === ""){
                $(".writingTitle").removeClass('is-empty');
                $(".writingTitle").removeClass('has-error');
                $(".writingTitle").addClass('has-success');
                $(".writingTitle .success").css({"opacity":"1"});
                $(".writingTitle .error").css({"opacity":"0"});
            }
            //errorMsg가 title일때
            else if(nextProps.errorMsg === "title") {
                $(".writingTitle").removeClass('has-success');
                $(".writingTitle").addClass('has-error');
                $(".writingTitle .success").css({"opacity":"0"});
                $(".writingTitle .error").css({"opacity":"1"});
            }
            else {
                $(".writingTitle").removeClass('has-success');
                $(".writingTitle").removeClass('has-error');
                $(".writingTitle .success").css({"opacity":"0"});
                $(".writingTitle .error").css({"opacity":"0"});
            }
        }
    }

    render() {
        return (
            <div>
                <div className="writingTitle form-group label-floating">
                    <label className="control-label">Title</label>
                    <input type="text" className="form-control" value={this.props.title} onChange={this.changeTitle} />
                    <span className="form-control-feedback success">
                        <i className="material-icons">done</i>
                    </span>
                    <span className="material-icons form-control-feedback error">clear</span>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        title : state.editorsave.data.title,
        errorMsg : state.editorsave.error
    }),
    (dispatch) => ({
        EditorSaveActions: bindActionCreators(editorSaveActions, dispatch)
    })
)(Title);