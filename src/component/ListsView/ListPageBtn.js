import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as listviewActions from '../../Redux/ListView';

// import bgImg from 'imgUrl';
class ListPageBtn extends Component {

    constructor(props) {

        super(props);
        this.pagingBtnClick = this.pagingBtnClick.bind(this);
        this.pagingBtnBackClick = this.pagingBtnBackClick.bind(this);
        this.pagingBtnNextClick = this.pagingBtnNextClick.bind(this);
    }

    pagingBtnClick(event) {
        console.log('pagingBtnClick');
        let value = Number(event.target.name);
        this.filerData({ nowPage : value});
    }

    pagingBtnBackClick() {
        console.log('pagingBtnBackClick');
        this.filerData({ type : "back"});
    }

    pagingBtnNextClick() {
        console.log('pagingBtnNextClick');
        this.filerData({ type : "next"});
    }

    filerData = async (option) => {

        let { ListViewActions, filerValue, nowPage, bigPage, totalBigPage } = this.props;
        
        if(option.nowPage !== undefined){
            nowPage = option.nowPage;
            ListViewActions.setValue({
                nowPage : nowPage,
                filerValue : filerValue
            });
        }
        else if(option.type === 'next'){
            if(bigPage < totalBigPage){
                bigPage++;
            }
            nowPage = bigPage+(bigPage * 4);
            ListViewActions.nextPage({
                bigPage : bigPage,
                nowPage : nowPage
            });
        }
        else {
            if(bigPage > 0){
                bigPage--;
            }
            nowPage = bigPage-(bigPage * 4);
            ListViewActions.nextPage({
                bigPage : bigPage,
                nowPage : nowPage
            });
        }
        try {
            await ListViewActions.getPosts(filerValue,nowPage);
        } catch(e) {
            
        }
    }

    render() {

        let pagingBtn = () => {
            let paging = [];
            let maxBigPage = (this.props.bigPage*5)+5 > this.props.totalPage ? this.props.totalPage : (this.props.bigPage*5)+5;
            for(let i = (this.props.bigPage*5); i<maxBigPage;i++){
                paging.push(<li key={i} onClick={this.pagingBtnClick}><a name={i.toString()}> {i+1} </a></li>);
            }
            return paging;
        };

        return (
          <div className="row">
                <div className="col-md-12 text-center">
                    <ul className="pagination pagination-primary">
                        <li onClick={this.pagingBtnBackClick}><a><i className="material-icons">navigate_before</i></a></li>
                        
                        {
                            pagingBtn()
                        }

                        <li onClick={this.pagingBtnNextClick}><a><i className="material-icons">navigate_next</i></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        bigPage : state.listview.bigPage,
        totalPage : state.listview.postsData.totalPage,
        nowPage : state.listview.nowPage,
        filerValue : state.listview.filerValue,
        totalBigPage : state.listview.postsData.totalBigPage
    }),
    (dispatch) => ({
        ListViewActions : bindActionCreators(listviewActions, dispatch)
    })
  )(ListPageBtn);