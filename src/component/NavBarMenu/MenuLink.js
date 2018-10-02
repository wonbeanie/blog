import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MenuLink extends Component {

    render() {
        return (
            <li>
                {/* router를 위해 react-router-dom을 이용해서 /+this.props.url로 url이동 */}
                <Link to={"/"+this.props.url}>
                    {/* props로 받은 데이터들 넣기 */}
                    <i className="material-icons">{this.props.materialIcon}</i> {this.props.title}
                </Link>
            </li>
        );
    }
}

export default MenuLink;