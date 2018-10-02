import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as listviewActions from '../../Redux/ListView';

// import bgImg from 'imgUrl';
class PostsListViewer extends Component {

    constructor(props){
        super(props);

        this.deleteArticle = this.deleteArticle.bind(this);
    }

    //delete버튼을 클릭시 실행되는 함수
    deleteArticle() {
        this.delPost();
    }

    delPost = async () => {
        const { ListViewActions } = this.props;
        const no = this.props.data.no;
        try {
            await ListViewActions.delPost(no);
            this.filerData();
        } catch(e) {
            
        }
    }

    filerData = async () => {
        const { ListViewActions,nowPage,filerValue } = this.props;

        try {
            await ListViewActions.getPosts(filerValue,nowPage);
            
        } catch(e) {
            
        }
    }

    render() {
        //time 체크후 수정했다면 수정날짜 표시
        let date;
        if(this.props.data.modDate === null){
            date = this.props.data.regDate.substr(0,10);
        }
        else {
            date = "Modified date "+this.props.data.modDate.substr(0,10);
        }
        
        //태그를 지우기위해
        let content = this.props.data.content;
        //j쿼리를 이용하여 삭제
        content = $('<p>'+content+'</p>').text();
        
        let mainImg = this.props.data.mainImg;
        if(mainImg === null || mainImg === ""){
            mainImg = "/assets/img/examples/card-blog4.jpg";
        }
        
        let deleteBtn = "";
        let editBtn = "";

        //deleteUrl props가 있을때 표시
        if(this.props.type === 'delete'){
            deleteBtn = (
                <div className="col-md-1 adminEditBtn">
                    <button className="btn btn-primary" onClick={this.deleteArticle}>
                        <i className="material-icons">delete_forever</i>
                    </button>
                </div>
            );
            editBtn = (
                <div className="col-md-1 adminEditBtn">
                    <Link to={"/edit/"+this.props.data.no}>
                        <button className="btn btn-primary">
                            <i className="material-icons">edit</i>
                        </button>
                    </Link>
                </div>
            );
        }
        
        return (
            <div className="col-md-10 col-md-offset-1">
                <div className="card card-plain card-blog">
                    <div className="row">
                        <div className="col-md-4">
                            {/* Link를 이용하여 /Post/this.props.data.no으로 뿌려주기 */}
                            <Link to={"/post/"+this.props.data.no}>
                                <div className="card-image">
                                    {/* 이미지 mainImg로 src설정 */}
                                    <img className="img img-raised" src={mainImg} alt="PostImage"/>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-7">
                            {/* category 지정 */}
                            <h6 className="category text-info">{this.props.data.category}</h6>
                            <h3 className="card-title">
                                {/* Link를 이용하여 /Post/this.props.data.no으로 뿌려주기 */}
                                <Link to={"/post/"+this.props.data.no}>{this.props.data.title}</Link>
                            </h3>
                            <p className="card-description postPVContent">
                                {/* Link를 이용하여 /Post/this.props.data.no으로 뿌려주기 */}
                                <Link to={"/post/"+this.props.data.no}>{content}</Link>
                            </p>
                            <p className="author">
                                {/* 작성자, 날짜 지정 */}
                                by <b>{this.props.data.author}</b>, {date}
                            </p>
                        </div>

                        {
                            //deleteUrl props가 있을때 표시
                            deleteBtn
                        }

                        {
                            editBtn
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        type : state.listview.type,
        nowPage : state.listview.nowPage,
        filerValue : state.listview.filerValue
    }),
    (dispatch) => ({
        ListViewActions : bindActionCreators(listviewActions, dispatch)
    })
  )(PostsListViewer);