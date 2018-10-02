import React, { Component } from 'react';
import { Parallax,Background } from 'react-parallax';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../Redux/post'

class TopBackground extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        if(this.props.match !== undefined){
            const number = this.props.match.params.postNum;
            this.getPost(number);
        }
    }

    componentDidUpdate() {
        if(this.props.match !== undefined && this.props.data.category === undefined){
            const number = this.props.match.params.postNum;
            this.getPost(number);
        }
        else if(this.props.match === undefined && this.props.data.category !== undefined){
            this.clearPost();
        }
    }

    clearPost = () => {
        const { PostActions } = this.props;

        try {
            PostActions.clearPost();
            console.log('clearPost 요청이 완료 된 다음에 실행됨')
        } catch(e) {
            console.log('clearPost 에러가 발생!');
        }
    }

    getPost = async (postId) => {
        const { PostActions } = this.props;

        try {
            await PostActions.getPost(postId);
            console.log('getpost 요청이 완료 된 다음에 실행됨')
        } catch(e) {
            console.log('getpost 에러가 발생!');
        }
    }

    render() {

        //post일때 데이터를 넣기위해
        let category = () => {
            return "";
        }
        //post일때 데이터를 넣기위해
        let addInfo = () => {
            return "";
        }
        let title = this.props.title;

        //post일때 데이터를 넣기위해
        if(this.props.data.category !== undefined){
            category = () => {
                return <div className="category">{this.props.data.category}</div>;
            }
            addInfo = () => {
                let date = "";
                if(this.props.data.modDate !== null){
                    date = this.props.data.regDate.replace("T"," ");
                    date = "Modified date " + date.substr(0,19);

                }
                else {
                    date = this.props.data.regDate.replace("T"," ");
                    date = date.substr(0,19);
                }

                return <div className="addInfo"><span>{this.props.data.author}</span><span>{date}</span></div>;
            }
            title = this.props.data.title;
        }


        return (        
            <div>
                {/* parallax 컴포넌트로 구현 */}
                {/* strength는 parallax가 움직이는 속도 */}
                <Parallax strength={800} className="page-header header-filter header-small">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center">
                                {category()}
                                <h2 className="title">{title}</h2>
                                {addInfo()}
                            </div>
                        </div>
                    </div>
                    {/* parallax의 배경 이미지 */}
                    <Background className="custom-bg">
                        <img src={this.props.bgImageUrl} alt={this.props.bgImageAlt} />
                    </Background>
                </Parallax>

            </div>
        )
    }
}

export default connect(
    (state) => ({
        data: state.post.postData
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(TopBackground);