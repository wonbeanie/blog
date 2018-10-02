import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorSaveActions from '../../Redux/EditorSave';

class TagView extends Component {

    constructor(props){
        super(props);

        this.tagDelCheck = this.tagDelCheck.bind(this);
    }

    //삽입된 태그에 삭제버튼을 누르면 발생하는 함수
    tagDelCheck(event) {
        event.preventDefault();
        //키를 보내어 삭제한다
        this.props.EditorSaveActions.tagdel(event.target.dataset.key);
    }

    render() {
        return (
            <div className="tags">
                {
                    this.props.tags.map((data,num)=>{
                        return (
                            <span className="label label-default tag" key={num}>
                                {data}
                                <button className="close" onClick={this.tagDelCheck} data-key={data}>&times;</button>
                            </span>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect(
    undefined,
    (dispatch) => ({
        EditorSaveActions: bindActionCreators(editorSaveActions, dispatch),
    })
)(TagView);