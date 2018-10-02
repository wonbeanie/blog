import React, { Component } from 'react';

class MenuLink extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <li>
                {/* props로받은 데이터 뿌려주기 */}
                <a href={this.props.url}>
                    {this.props.title}
                </a>
            </li>
        );
    }
}

export default MenuLink;