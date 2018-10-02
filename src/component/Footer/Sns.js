import React, { Component } from 'react';

class Sns extends Component {

  render() {

    return (
        <li>
            {/* props로 받은 데이터 뿌려주기 */}
            {/* class에 this.props.sns를 넣은이유는 아이콘을 불러오기위해 */}
            <a href={this.props.url} className={"btn btn-just-icon btn-simple btn-"+this.props.sns}>
                <i className={"fa fa-"+this.props.sns}></i>
            </a>
        </li>
    );
  }
}

export default Sns;