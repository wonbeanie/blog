import React, { Component } from 'react';
import $ from 'jquery';
import MenuLink from './NavBarMenu/MenuLink';
import DropDown from './NavBarMenu/DropDown';

// import bgImg from 'imgUrl';
class NavBar extends Component {

    //스크롤시 navbar의 애니메이션을 부여하기위해
    //렌더가 끝난뒤 호출
    componentDidMount() {
        //scroll이벤트가 발생시 handlescroll 호출
        window.addEventListener('scroll', this.handleScroll);
    }

    //마운트 해제되고 제거되기 직전에 호출
    componentWillUnmount() {
        //eventlisener 해제
        window.removeEventListener('scroll', this.handleScroll);
    }

    //스크롤 이벤트 함수
    handleScroll() {
        if($('#maincontainer').offset()){
            let windowY = window.pageYOffset + $('.navbar').outerHeight(true);
            let maincontainerY = $('#maincontainer').offset().top;
            //스크롤의 Y축에 따라 변환
            if(windowY >= maincontainerY){
                //애니메이션 발동
                $(".navbar").removeClass('navbar-transparent');
            }else if(windowY < maincontainerY){
                //애니메이션 기본
                $(".navbar").addClass('navbar-transparent');
            }
        }
    }

    //모바일에서 볼수있는 메뉴바이용하기위한 작업
    //모바일 메뉴바를 클릭시 이 함수가 호출
    mobileButton(){
        $(".html").toggleClass('nav-open-absolute nav-open');
    }

    render() {
        return (
            <nav className="navbar navbar-primary navbar-transparent navbar-fixed-top">
                <div className="container">

                    <div className="navbar-header" onClick={this.mobileButton}>
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href={this.props.url}>
                            <img src={this.props.title} width="30" height="30" className="d-inline-block align-top" alt="" />
                        </a>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">

                            {
                                //props로 받은 데이터 map으로 뿌려주기
                                this.props.data.map(function(value,num){
                                    //value의 type이 DropDown일때 DropDown 컴포넌트
                                    if(value.type === "DropDown"){
                                        //data는 하위 메뉴의 데이터, maerialIcon은 메뉴의 아이콘, title은 메뉴의 이름
                                        return <DropDown key={num} data={value.data} materialIcon={value.materialIcon} title={value.title} />
                                    }
                                    //value의 type이 Menu일때 MenuLink 컴포넌트
                                    else if(value.type === "Menu"){
                                        //url은 클릭시 이동할 url, maerialIcon은 메뉴의 아이콘, title은 메뉴의 이름
                                        return <MenuLink key={num} url={value.url} materialIcon={value.materialIcon} title={value.title} />
                                    }
                                    //없다면 ""반환
                                    return "";
                                })
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;