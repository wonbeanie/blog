import React, { Component } from 'react';
import ListsView from '../../ListsView/Viewer';

// import bgImg from 'imgUrl';
class Viewer extends Component {

    constructor(props) {

        super(props);
        
    }

    render() {

        return (
            <div>
                <ListsView option={
                    {
                        type : "delete"
                    }
                } />
            </div>
        )
    }
}

export default Viewer;