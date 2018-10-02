import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as commentActions from '../../../Redux/Comment';
import ReplyBtn from './ReplyBtn';
import Write from './Write';

class viewComment extends Component {

    constructor(props) {

        super(props);

    }

    render() {

        let replys = ""

        // if(data.replys !== undefined){
        //     replys = <Reply saveReplyConfig={saveReplyConfig} data={data.replys} num={num} />;
        // }

        let data = this.props.data;

        let date;

        if(this.props.data.modDate === null){
            data.date = data.regDate.substr(0,19).replace('T'," ");
        }
        else {
            data.date = "Modified date "+data.modDate.substr(0,19).replace('T'," ");
        }

        let commentView = (
            <div key={this.props.num} className="media">
                <div className="media-body">
                    <h4 className="media-heading">{data.author} <small>&middot; {data.date}</small></h4>

                    <div>
                        {data.comment}
                    </div>

                    <ReplyBtn num={this.props.num} />

                    {replys}

                </div>
            </div>
        );

        if(this.props.editCheck.no === this.props.num){
            commentView = (
                <Write type={"edit"} />
            );
        }

        return (
            <div>
                {commentView}
            </div>
        )
    }
}

export default connect(
    (state) => ({
        no : state.comment.no,
        editCheck : state.comment.editCheck
    }),
    (dispatch) => ({
        CommentActions : bindActionCreators(commentActions,dispatch)
    })
)(viewComment);