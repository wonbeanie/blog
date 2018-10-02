import React, { Component } from 'react';
import DropDownItem from './DropDownItem';

class DropDown extends Component {

    render() {
        return (
            <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown">
                    {/* props로 받은 데이터 넣기 */}
                    <i className="material-icons">{this.props.materialIcon}</i> {this.props.title}
                    <b className="caret"></b>
                </a>
                <ul className="dropdown-menu dropdown-with-icons">
                
                    {
                        //props로 받은 데이터 맵으로 뿌려주기
                        this.props.data.map(function(value,num){
                            //url은 클릭시 이동할 url, materialIcon은 메뉴의 아이콘, title은 메뉴 이름
                            return <DropDownItem key={num} url={value.url} materialIcon={value.materialIcon} title={value.title}/>        
                        })
                    }

                </ul>
            </li>
        );
    }
}

export default DropDown;