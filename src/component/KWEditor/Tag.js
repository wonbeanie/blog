import React, { Component } from 'react';
import TagView from './TagView';
import $ from 'jquery';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorSaveActions from '../../Redux/EditorSave';

class Tag extends Component {

    constructor(props){
        super(props);

        this.tagEnter = this.tagEnter.bind(this);
        this.tagChange = this.tagChange.bind(this);
    }

    //태그 입력후 엔터를 클릭시 저장하는 함수
    tagEnter(event) {
        if(event.keyCode === 13 && event.target.value !== "" && !this.props.tags.includes(event.target.value)){
            this.props.EditorSaveActions.tags(event.target.value);
            event.target.value = "";
            $(".writingTag").removeClass('has-success');
            $(".error").css({"opacity":"0"});
            $(".success").css({"opacity":"0"});
        }
    }

    //태그 입력시 ui 변경되게끔 되게하는 함수
    tagChange(event) {
        //tag칸에 쓴것이 없을때
        if(!event.target.value){
            $(".writingTag").removeClass('has-success');
            $(".error").css({"opacity":"0"});
            $(".success").css({"opacity":"0"});
        }
        //입력한 태그와 저장한태그가 없을때
        else if(!this.props.tags.includes(event.target.value)){
            $(".writingTag").addClass('has-success');
            $(".error").css({"opacity":"0"});
            $(".success").css({"opacity":"1"});
        }
        else if(this.props.tags.includes(event.target.value)){
            $(".writingTag").removeClass('has-success');
            $(".writingTag").addClass('has-error');
            $(".success").css({"opacity":"0"});
            $(".error").css({"opacity":"1"});
        }
    }

    render() {
        return (
            <div>
                <div className="writingTag form-group label-floating">
                    <label className="control-label">Tag</label>
                    <input type="text" className="form-control" onKeyDown={this.tagEnter} onChange={this.tagChange} />
                    <span className="form-control-feedback success">
                        <i className="material-icons">done</i>
                    </span>
                    <span className="material-icons form-control-feedback error">clear</span>

                </div>
                {/* 입력시 태그를 보여주는 */}
                <TagView tags={this.props.tags}/>

            </div>
        )
    }
}

export default connect(
    (state) => ({
        tags: state.editorsave.data.tags
    }),
    (dispatch) => ({
        EditorSaveActions: bindActionCreators(editorSaveActions, dispatch),
    })
)(Tag);