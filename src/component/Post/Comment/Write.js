import React, { Component } from 'react';
import SaveWrite from './SaveWrite';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as commentActions from '../../../Redux/Comment';

// import bgImg from 'imgUrl';
class Write extends Component {

    constructor(props) {

        super(props);

        this.changeAuthor = this.changeAuthor.bind(this);

        this.changePassWord = this.changePassWord.bind(this);

        this.changeComment = this.changeComment.bind(this);

        this.EditCheck = this.EditCheck.bind(this);

    }

    changeAuthor(event) {
        this.props.CommentActions.saveAuthor(event.target.value);
        this.forceUpdate()
    }

    changePassWord(event) {
        this.props.CommentActions.savePassword(event.target.value);
        this.forceUpdate()
    }

    changeComment(event) {
        this.props.CommentActions.saveComment(event.target.value);
        this.forceUpdate()
    }

    EditCheck() {
        this.props.CommentActions.clearCheck();
    }

    render() {
        let replyIcon = "";
        let saveWrite = "";
        if(this.props.type === "reply"){
            replyIcon = <div className="col-md-1 col-xs-2 replying-icon"></div>;
            saveWrite = <SaveWrite saveReplyConfig={this.props.saveReplyConfig} />
        }
        else {
            replyIcon = <div className="col-md-1 col-xs-2"></div>;
            saveWrite = <SaveWrite type={this.props.type} />
        }

        let commentExit = "";

        if(this.props.editCheck.check && this.props.type === "edit"){
            commentExit = (
                <div className="btn btn-primary btn-simple text-right" onClick={this.EditCheck}>
                    <i className="material-icons">exit_to_app</i>
                </div>
            )
        }

        return (
            <div className="media media-post">
                <div className="media-body">
                    {replyIcon}
                    <div className="col-md-11 col-xs-10 replaying-content">
                        <form className="form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" value={this.props.comment.author} className="form-control" placeholder="Author" onChange={this.changeAuthor}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="password" value={this.props.comment.password} className="form-control" placeholder="PassWord" onChange={this.changePassWord}/>
                                    </div>
                                </div>
                            </div>
                            <textarea className="form-control" value={this.props.comment.comment} placeholder="Writing..." rows="6" onChange={this.changeComment}></textarea>
                            <div className="row">
                            <div className="col-md-offset-7 col-md-2">
                                {
                                    commentExit
                                }
                            </div>
                            <div className="col-md-3">
                                {
                                    saveWrite
                                }
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        comment : state.comment.data,
        editCheck : state.comment.editCheck
    }),
    (dispatch) => ({
        CommentActions : bindActionCreators(commentActions,dispatch)
    })
)(Write);