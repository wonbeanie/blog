import React, { Component } from 'react';
import PostList from './PostList';
import ListPageBtn from './ListPageBtn';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as listviewActions from '../../Redux/ListView';

// import bgImg from 'imgUrl';
class PostsLists extends Component {

    constructor(props) {

        super(props);

        // this.filerDate = this.filerDate.bind(this);
    }

    //처음 render전 데이터 불러오기
    componentWillMount(){
        this.filerData();
    }

    filerData = async () => {
        const { ListViewActions,nowPage,filerValue } = this.props;
        this.props.ListViewActions.setValue({
            filerValue : filerValue,
            nowPage : nowPage
        });
        try {
            await ListViewActions.getPosts(filerValue,nowPage);
            
        } catch(e) {
            
        }
    }

    render() {

        let postsData = [];

        if(this.props.postsData !== undefined){
            postsData = this.props.postsData;
        }

        console.log("listview postslists");
        return (
            <div className="row">

                {
                    postsData.map((data,num) => {
                        return <PostList key={num} data={data} num={num} />
                    })
                }

                <ListPageBtn />
            </div>
        )
    }
}

export default connect(
    (state) => ({
        postsData : state.listview.postsData.postsListData,
        nowPage : state.listview.nowPage,
        filerValue : state.listview.filerValue
    }),
    (dispatch) => ({
        ListViewActions : bindActionCreators(listviewActions, dispatch)
    })
  )(PostsLists);