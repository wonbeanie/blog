import React, { Component } from 'react';
import KWEditor from '../KWEditor/Viewer';

class Viewer extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <KWEditor option={{type:"wirting"}} />
            </div>
        )
    }
}

export default Viewer;