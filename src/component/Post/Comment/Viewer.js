import React, { Component } from 'react';
import Write from './Write';
import Reply from './Reply';
import ViewComment from './viewComment';
import { connect } from 'react-redux';

// import bgImg from 'imgUrl';
class Viewer extends Component {

    constructor(props) {

        super(props);

    }

    render() {

        let commentData = [];

        if(this.props.commentData !== null && this.props.commentData !== undefined){
            commentData = this.props.commentData;
        }
        

        return (
            <div>
                <div className="media-area">

                    {/* 답변이없는 댓글 */}

                    {
                        // this.state.commentData.map((data,num) => {
                        commentData.map((data,num) => {

                            return <ViewComment data={data} num={num} />
                        })
                    }

                    {/* 댓글페이지 버튼 */}
                    {/* <div className="pagination-area text-center">
                        <ul className="pagination">
                            <li onClick={this.abc}><a>&laquo;</a></li>
                            <li className="active" onClick={this.abc}><a>1</a></li>
                            <li onClick={this.abc}><a>2</a></li>
                            <li onClick={this.abc}><a>3</a></li>
                            <li onClick={this.abc}><a>4</a></li>
                            <li onClick={this.abc}><a>5</a></li>
                            <li onClick={this.abc}><a>&raquo;</a></li>
                        </ul>
                    </div> */}

                    <Write type={"comment"}/>

                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        commentData : state.post.postData.comment
    })
)(Viewer);