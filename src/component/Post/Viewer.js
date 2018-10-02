import React, { Component } from 'react';
import Comment from './Comment/Viewer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as commentActions from '../../Redux/Comment';

class Viewer extends Component {

    constructor(props){
        super(props);

        this.props.CommentActions.saveNo(this.props.match.params.PostNum);

        this.state = {
            saveComment : {
                method : "post",
                url : `http://52.64.148.42:8080/api/blog/post/${this.props.match.params.PostNum}/comment`
            },
            saveReply : {
                method : "post",
                url : "http://52.64.148.42:8080"
            },
            getCommentData : {
                method : "get",
                url : "http://52.64.148.42:8080"
            }
        }
    }

    render() {

        let content = this.props.data.content;

        return (
            <div className="section">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8">
                        <div className="text-left content">
                            <div className="postContent" dangerouslySetInnerHTML={{__html : content}} ></div>
                        </div>

                        <Comment saveComment={this.state.saveComment} saveReply={this.state.saveReply} getCommentData={this.state.getCommentData}/>

                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        data : state.post.postData,
        no : state.comment.no
    }),
    (dispatch) => ({
        CommentActions : bindActionCreators(commentActions, dispatch)
    })
)(Viewer);