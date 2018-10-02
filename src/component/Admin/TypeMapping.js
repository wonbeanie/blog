import React, { Component } from 'react';
import Select from 'react-select';

class TypeMapping extends Component {

  constructor(props){
    super(props);

    this.state = {
      data : this.props.data
    }

    this.saveData = this.saveData.bind(this);
  }

  saveData(event) {
    console.log(event.target.value);
    console.log(event.target.dataset.key);
  }

  selectValue(selectedOption) {
    console.log(selectedOption);
  }


  typeMapping(data){
    if(data.savetype === "string"){
      return (
        <tr>
            <td>{data.key}</td>
            <td>{data.value}</td>
            <td>
              <input type="text" value="" placeholder="Value..." className="form-control" data-key={data.key} onChange={this.saveData}/>
            </td>
        </tr>
      )
    }
    else if(data.savetype === "file") {
      return (
        <tr>
            <td>{data.key}</td>
            <td>
              <img src={data.value} className="img img-raised img-rounded" width="100px" height="100px" alt=""/>
            </td>
            <td>
              <div className="form-group form-file-upload">
                <input type="file" id="inputFile2" multiple="" data-key={data.key} onChange={this.saveData}/>
                <div className="input-group">
                  <input type="text" readOnly="" className="form-control" placeholder="File..." />
                  <span className="input-group-btn input-group-s">
                    <button type="button" className="btn btn-just-icon btn-round btn-primary">
                      <i className="material-icons">attach_file</i>
                    </button>
                  </span>
                </div>
              </div>
            </td>
        </tr>
      )
    }
    else if(data.savetype === "dropdown") {
      let datas = [
        {
          value : 'Menu',
          label : 'Menu',
          key : data.key
        },
        {
          value : 'DropDown',
          label : 'DropDown',
          key : data.key
        }
      ]
      return (
        <tr>
            <td>{data.key}</td>
            <td>{data.value}</td>
            <td>
              <Select
                  //입력 or 선택시 표시될 변수
                  value={''}
                  //선택시 selectValue함수 실행
                  onChange={this.selectValue}
                  //표시되는 카테고리 리스트들
                  options={datas}
                  //className 지정
                  className="categroySelecter"
                  //placeholder 지정
                  placeholder="Category Select"
              />
            </td>
        </tr>
      )
    }
    else if(data.savetype === "list") {
      return (
        
          data.value.map((data,num)=>{
            return data.map((data,num)=>{
              console.log(data);
              return this.typeMapping(data);
            })
          })
      )
    }
    else if(data.savetype === "null") {
      return (
        <tr>
            <td>{data.key}</td>
            <td>{data.value}</td>
            <td>{data.value}</td>
        </tr>
      )
    }
  }

  render() {
    return (
      this.props.data.map((data,num) => {
        return this.typeMapping(data,num);
      })
    );
  }
}

export default TypeMapping;