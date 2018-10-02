import React, { Component } from 'react';
import Write from './Write';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as commentActions from '../../../Redux/Comment';
import * as postActions from '../../../Redux/post';

// import bgImg from 'imgUrl';
class ReplyBtn extends Component {

    constructor(props) {

        super(props);

        this.state = {
            replyWrite : ""
        }
        
        this.replyBtnClick = this.replyBtnClick.bind(this);
        this.DelCheck = this.DelCheck.bind(this);
        this.delChangePassword = this.delChangePassword.bind(this);
        this.DelClick = this.DelClick.bind(this);
        this.EditCheck = this.EditCheck.bind(this);

    }

    DelClick() {
        this.delData();
    }

    replyBtnClick(){
        if(this.state.replyWrite === ""){
            this.setState({
                replyWrite : (
                    <Write saveReplyConfig={this.props.saveReplyConfig} type={"reply"} />
                )
            });
        }
        else {
            this.setState({
                replyWrite : ""
            });
        }
    }

    DelCheck() {
        this.props.CommentActions.clearCheck();
        if(!this.props.delCheck.check || this.props.delCheck.no !== this.props.num ){
            this.props.CommentActions.delCheck({ check : true, no : this.props.num});
        }
    }

    EditCheck() {
        this.props.CommentActions.clearCheck();
        if(!this.props.editCheck.check || this.props.editCheck.no !== this.props.num ){
            let commentData = this.props.commentData[this.props.num];
            commentData.password = "";
            this.props.CommentActions.saveCommentData(commentData);
            this.props.CommentActions.editCheck({ check : true, no : this.props.num });
        }
    }
    
    delChangePassword(event) {
        this.props.CommentActions.saveDelData({ password : event.target.value , no : this.props.num});
    }

    delData = async () => {
        const { CommentActions, delData, no } = this.props;

        try {
            await CommentActions.delData(no,delData.no,delData.password);
            CommentActions.delCheck({ check : false , no : this.props.num});
            this.getPost(no);
        } catch(e) {
            
        }
    }

    getPost = async (postId) => {
        const { PostActions } = this.props;

        try {
            await PostActions.getPost(postId);
            
        } catch(e) {
            
        }
    }

    render() {

        let delcheck = this.props.delCheck;

        let viewpassword = "";

        if(delcheck.check && delcheck.no === this.props.num){
            viewpassword = (
                <div className="row">
                    <div className="col-md-10">
                        <input type="text" className="form-control" placeholder="비밀번호를 입력해주세요" onChange={this.delChangePassword}/>
                    </div>
                    <div className="col-md-2">
                        <div className="btn btn-primary btn-simple commentdel" onClick={this.DelClick}>
                                Delete
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <div className="media-footer">
                    {/* <div className="btn btn-primary btn-simple pull-right" onClick={this.replyBtnClick}>
                        <i className="material-icons">reply</i> Reply
                    </div> */}

                    {viewpassword}

                    <div className="btn btn-primary btn-simple pull-right" onClick={this.DelCheck}>
                            <i className="material-icons">delete_forever</i>
                    </div>

                    <div className="btn btn-primary btn-simple pull-right" onClick={this.EditCheck}>
                            <i className="material-icons">edit</i>
                    </div>

                </div>

                {
                    this.state.replyWrite
                }

            </div>
        )
    }
}


export default connect(
    (state) => ({
        commentData : state.post.postData.comment,
        no : state.comment.no,
        delCheck : state.comment.delCheck,
        delData : state.comment.delData,
        editCheck : state.comment.editCheck
    }),
    (dispatch) => ({
        CommentActions : bindActionCreators(commentActions,dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(ReplyBtn);