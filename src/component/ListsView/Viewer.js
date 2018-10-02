import React, { Component } from 'react';
import PostsLists from './PostsLists';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as categorysActions from '../../Redux/Categorys';
import * as listviewActions from '../../Redux/ListView';

// import bgImg from 'imgUrl';
class Viewer extends Component {

    constructor(props) {

        super(props);
        
        this.filerOnClick = this.filerOnClick.bind(this);
    }

    //render가 되기전 필요한 데이터 불러오기
    //데이터 category
    componentWillMount(){
        this.getCategory();
        if(this.props.option !== undefined){
            this.props.ListViewActions.setType(this.props.option.type);
        }
    }

    getCategory = async () => {
        const { CategorysActions } = this.props;

        try {
            await CategorysActions.getCategorys();
            
        } catch(e) {
            
        }
    }
    
    filerData = async (filerValue) => {
        const { ListViewActions,nowPage } = this.props;
        this.props.ListViewActions.setValue({
            filerValue : filerValue,
            nowPage : nowPage
        });
        try {
            await ListViewActions.getPosts(filerValue,nowPage);
            
        } catch(e) {
            
        }
    }

    //filerbutton 클릭시 발생하는 함수
    //클릭한 데이터를 state에 저장
    filerOnClick(filervalue) {
        this.filerData(filervalue);
    }

    render() {

        let categorys = [];

        let filerOnClick = this.filerOnClick;

        if(this.props.categorys.length !== 0){
            categorys = this.props.categorys;
        }

        return (
            <div className="section">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                    <ul className="nav nav-pills nav-pills-primary">
                        <li className="active" onClick={()=>filerOnClick('All')} ><a href="#pill2" data-toggle="tab">All</a></li>
                        {
                            //category 메뉴들 맵으로 뿌려주기
                            categorys.map(function(value,num){
                                //onClick으로 버튼클릭시 state변경하는 함수 넣기
                                return <li key={num} onClick={()=>filerOnClick(value.name)}><a href="#pill2" data-toggle="tab">{value.name}</a></li>;
                            })
                        }

                    </ul>

                    </div>
                </div>
                
                {/* PostsLists 컴포넌트 사용 */}
                {/* filervalue는 category에 따라 list를 출력하기 때문 */}
                <PostsLists />

            </div>
        )
    }
}

export default connect(
    (state) => ({
        categorys : state.categorys,
        nowPage : state.listview.nowPage,
    }),
    (dispatch) => ({
        CategorysActions: bindActionCreators(categorysActions, dispatch),
        ListViewActions : bindActionCreators(listviewActions, dispatch)
    })
  )(Viewer);