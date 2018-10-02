import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as commentActions from '../../../Redux/Comment';
import * as postActions from '../../../Redux/post';

// import bgImg from 'imgUrl';
class SaveWrite extends Component {

    constructor(props) {

        super(props);
        this.saveComment = this.saveComment.bind(this);
        this.saveEditComment = this.saveEditComment.bind(this);
    }

    saveComment(event){
        event.preventDefault();
        // if(this.props.saveReplyConfig){
        //     console.log(this.props.saveReplyConfig.method);
        //     console.log(this.props.saveReplyConfig.url);
        //     console.log(this.props.data);
        //     // axios({
        //     //     method : this.props.saveReplyConfig.method,
        //     //     url: this.props.saveReplyConfig.url,
        //     //     data : this.props.data,
        //     // })
        //     // .then((res) => {
        //     //     this.props.saveCommentConfig.getCommentData();
        //     // })
        //     // .catch((error) => {
    
        //     // });
        // }
        // else {
        //     this.saveData();
        // }

        this.saveData();
        
    }

    saveEditComment(event){
        event.preventDefault();

        this.saveEditData();
    }

    saveData = async () => {
        const { CommentActions,no,newCommentData } = this.props;
        CommentActions.clearData();
        try {
            await CommentActions.saveData(no,newCommentData);
            this.getPost(no);
        } catch(e) {
            
        }
    }

    saveEditData = async () => {
        const { CommentActions,no,newCommentData,editCheck } = this.props;
        CommentActions.clearData();
        CommentActions.clearCheck();
        try {
            await CommentActions.editData(no,editCheck.no,newCommentData);
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

        let postComment = (
            <div className="media-footer">
                <button className="btn btn-primary pull-right" onClick={this.saveComment}>Comment</button>
            </div>
        );

        if(this.props.type === 'edit'){
            postComment = (
                <div className="media-footer">
                    <button className="btn btn-primary pull-right" onClick={this.saveEditComment}>Edit Comment</button>
                </div>
            )
        }

        return (
            <div>
                {
                    postComment
                }
            </div>
        )
    }
}

export default connect(
    (state) => ({
        newCommentData : state.comment.data,
        no : state.comment.no,
        editCheck : state.comment.editCheck
    }),
    (dispatch) => ({
        CommentActions : bindActionCreators(commentActions,dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(SaveWrite);