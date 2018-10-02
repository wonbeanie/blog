import React, { Component } from 'react';
import ReplyBtn from './ReplyBtn';

// import bgImg from 'imgUrl';
class Reply extends Component {

    constructor(props) {

        super(props);
        
    }

    render() {
        return (
            <div>
                {
                    this.props.data.map((data,num) => {
                        return (
                            <div className="media" key={num}>
                                <div className="media-body">
                                <div className="col-md-1 col-xs-2 reply-icon"></div>
                                <div className="col-md-11 col-xs-10 reply-content">
                                    <h4 className="media-heading">{data.nickname}<small>&middot; {data.date}</small></h4>

                                    <div>{data.content}</div>
            
                                    <ReplyBtn saveReplyConfig={this.props.saveReplyConfig} type={"reply"}/>
                                    
                                </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Reply;