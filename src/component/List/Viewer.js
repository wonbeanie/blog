import React, { Component } from 'react';
import ListsView from '../ListsView/Viewer';

// import bgImg from 'imgUrl';
class Viewer extends Component {

    constructor(props) {

        super(props);

        this.state = {
            categoriesDataUrl : "http://52.64.148.42:8080/api/blog/categories",
            postsDataUrl : "http://52.64.148.42:8080/api/blog/posts/",
            postsCategoryUrl : "http://52.64.148.42:8080/api/blog/posts/category/"
        }
        
    }

    render() {

        return (
            <div>
                <ListsView
                    categoriesDataUrl={this.state.categoriesDataUrl}
                    postsDataUrl={this.state.postsDataUrl}
                    postsCategoryUrl={this.state.postsCategoryUrl}
                    type={this.state.type}
                />
            </div>
        )
    }
}

export default Viewer;