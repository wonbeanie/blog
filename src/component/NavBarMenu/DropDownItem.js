import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class DropDownItem extends Component {
    render() {
        return (
            <li>
                {/* 라우터를 위해 link를 이용하여 /List/this.props.url로 이동 */}
                <Link to={"/List/"+this.props.url}>
                    {/* props로 받은 데이터 넣기 */}
                    <i className="material-icons">{this.props.materialIcon}</i> {this.props.title}
                </Link>
            </li>
        );
    }
}

export default DropDownItem;