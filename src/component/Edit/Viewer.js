import React, { Component } from 'react';
import KWEditor from '../KWEditor/Viewer';

class Viewer extends Component {

    constructor(props){
        super(props);
        
    }

    render() {
        return (
            <div>
                <KWEditor option={{type:"edit", postNum:this.props.match.params.PostNum}} />
            </div>
        )
    }
}

export default Viewer;