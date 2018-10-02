import React, { Component } from 'react';
import Select from 'react-select';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorSaveActions from '../../Redux/EditorSave';
import $ from 'jquery';

class Category extends Component {

    constructor(props){
        super(props);
        this.selectValue = this.selectValue.bind(this);
    }

    //카테고리 클릭시 저장
    selectValue(selectedOption) {
        this.props.EditorSaveActions.category(selectedOption.value);
    }

    //저장된 category이 바뀔때마다 다시 데이터 불러오기
    componentWillReceiveProps(nextProps) {
        if(this.props.category !== nextProps.category){
            $('.categroySelecter').removeClass('errorBorder');
        }else if(nextProps.errorMsg === "category") {
            $('.categroySelecter').addClass('errorBorder');
        }
    }

    render() {
        const datas = [];
        //데이터 datas에 push
        this.props.categorys.map((data,num) => {
            let category = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            datas.push({value : category, label: category});
            return "";
        });

        let value = ""

        if(this.props.category){
            let editCategory = this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1);

            value = {
                value : editCategory,
                label : editCategory
            }
        }

        return (
            <div>
                <Select
                    value={value}
                    //선택시 selectValue함수 실행
                    onChange={this.selectValue}
                    //표시되는 카테고리 리스트들
                    options={datas}
                    //className 지정
                    className="categroySelecter"
                    //placeholder 지정
                    placeholder="Category Select"
                />

            </div>
        )
    }
}

export default connect(
    (state) => ({
        category: state.editorsave.data.category,
        errorMsg : state.editorsave.error
    }),
    (dispatch) => ({
        EditorSaveActions: bindActionCreators(editorSaveActions, dispatch),
    })
)(Category);