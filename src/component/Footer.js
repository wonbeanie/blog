import React, { Component } from 'react';
import MenuLink from './Footer/MenuLink';
import Sns from './Footer/Sns';

class Footer extends Component {

  render() {

    let socialButtons = this.props.footerString;

    if(!socialButtons){
        socialButtons = this.props.data.map(function(value,num){
            if(value.type === "sns") {
                //sns 컴포넌트 사용 sns는 sns의 이름, url은 이동할 위치
                return <Sns key={num} sns={value.name} url={value.url} />;
            }
            return "";
        });
    }

    return (
        <footer className="footer">
            <div className="container">
                {/* footer의 오른쪽 제목 */}
                <a className="footer-brand" href="#pablo">{this.props.title}</a>

                <ul className="pull-center">
                    {
                        //props로 받은 footer데이터 뿌려주기
                        this.props.data.map(function(value,num){
                            if(value.type === "Menu"){
                                //메뉴 컴포넌트 사용 url은 클릭시 이동할 위치, title은 메뉴의 이름
                                return <MenuLink key={num} url={value.url} title={value.title} />;
                            }
                            //type이 menu가 아닐시 "" 반환
                            return "";
                        })
                    }
                </ul>

                <ul className="social-buttons pull-right">
                    {
                        socialButtons
                    }
                </ul>

            </div>
        </footer>
    );
  }
}

export default Footer;