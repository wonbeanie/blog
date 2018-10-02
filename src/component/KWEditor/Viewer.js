import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import $ from 'jquery';
import * as categorysActions from '../../Redux/Categorys';
import * as editorSaveActions from '../../Redux/EditorSave';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Tag from './Tag';
import Title from './Title';
import Category from './Category';
import SaveBtn from './SaveBtn';

class Viewer extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        if(this.props.option.type === "edit"){
            this.getEditPost(this.props.option.postNum);
            this.props.EditorSaveActions.option(this.props.option);
        }
        else {
            this.props.EditorSaveActions.clearEditPost();
        }
    }

    componentDidMount() {
        this.getCategorys();
    }

    getEditPost = async (postNum) => {
        const { EditorSaveActions } = this.props;
        try {
            await EditorSaveActions.getEditPost(postNum);
            console.log("good");
        } catch(e) {
            console.log("error");
        }
    }
    
    getCategorys = async () => {
        const { CategorysActions } = this.props;
        try {
            await CategorysActions.getCategorys();
            console.log("good");
        } catch(e) {
            console.log("error");
        }
    }

    //저장 or 변경 오류시 오류 표시
    errorView = (msg) => {
        if(msg === "content"){
            $('.CKEditor').addClass('errorBorder');
        }else {
            this.setState({
                errorMsg : msg
            });
        }
    }

    fileUploadRequest = (event) => {
        console.log(event)
    }

    
    render() {

        if(this.props.errorMsg === 'content'){
            $('.CKEditor').addClass('errorBorder');
        }

        let categorys = this.props.categorys;
        
        return (
            <div className="section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="from">

                            {/* title 수정시 데이터를 미리 넣기 위해 */}
                            <Title />

                            {/* categorys axios로 받은 데이터를 보내주기위해 */}
                            {/* category 수정시 데이터를 미리 넣기 위해 */}
                            <Category categorys={categorys} />

                            {/* content 입력을위한 에디터 */}
                            <div className="CKEditor">
                                <CKEditor
                                    //에디터 종류
                                    editor={ ClassicEditor }

                                    //에디터의 설정
                                    config={{
                                        //이미지 업로드시 url 찌를 경로
                                        ckfinder: {
                                            uploadUrl: 'http://52.64.148.42:8080/api/upload'
                                        },
                                    }}

                                    //표시되는 데이터
                                    data={this.props.content}
                                    //데이터가 바뀔시 호출되는 함수
                                    onChange={ ( event, editor ) => {
                                        // 데이터가 바뀔시만 호출되게
                                        if(editor.getData() !== this.props.content){
                                            //오류가 있었을시 표시된거 삭제
                                            $('.CKEditor').removeClass('errorBorder');
                                            this.props.EditorSaveActions.content(editor.getData());
                                        }
                                    } }
                                />
                            </div>

                            {/* tags 수정시 데이터를 미리 넣기 위해 */}
                            <Tag />
                            
                            {/* data 저장한 모든 데이터를 보내줌 */}
                            {/* method 저장, 수정시 axios로 찌를 method */}
                            {/* url 저장, 수정시 axios로 찌를 url */}
                            <SaveBtn />
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        categorys: state.categorys,
        content : state.editorsave.data.content,
        errorMsg : state.editorsave.error
    }),
    (dispatch) => ({
        CategorysActions: bindActionCreators(categorysActions, dispatch),
        EditorSaveActions: bindActionCreators(editorSaveActions, dispatch)
    })
  )(Viewer);