import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as layoutActions from './Redux/layout';
import NavBar from './component/NavBar';
import TopBackground from './component/TopBackground';
import MainContainer from './component/MainContainer';
import Footer from './component/Footer.js';
import Login from './component/Login/Viewer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {

  constructor(props){
    super(props);
    
}

  componentDidMount() {
    this.getLayout();
  }

  getLayout = async () => {
    const { LayoutActions } = this.props;

    try {
        await LayoutActions.getLayout();
        
    } catch(e) {
        
    }
  }

  render() {
    let infodata = [];
    let navbardata = [];
    let footerdata = [];

    if(this.props.data.info[0] !== undefined){
      infodata = this.props.data.info[0];
      navbardata = this.props.data.nav;
      footerdata = this.props.data.footer;
    }

    return (
      <div className="html">
        {/* 라우터는 다른 페이지를 이동할때 이용하기위해 */}
        <Router>
          <div>
            {/* navbar 컴포넌트 불러오기 */}
            {/* 보내줄 데이터는 navbar에 표시할 데이터가 담은 navbardata, 로고이미지 url에 infodata의 logo*/}
            <NavBar data={navbardata} title={infodata.logo} url="/"/>

            {/* 뒤에있는 큰 배경화면 컴포넌트 불러오기 */}
            {/* 보내줄 데이터는 제목에 infodata의 name, 배경이미지 url의 infodata의 backgroundImg */}
            {/* <TopBackground title={infodata.name} bgImageUrl={infodata.backgroundImg} bgImageAlt='BackGround'/> */}
            <Switch>
              <Route exact path='/post/:postNum' render={(prop)=><TopBackground title={infodata.name} bgImageUrl={infodata.backgroundImg} bgImageAlt='BackGround' {...prop} />} />
              <Route exact path='/login' />
              <Route path='/' render={()=><TopBackground title={infodata.name} bgImageUrl={infodata.backgroundImg} bgImageAlt='BackGround'/>} />
            </Switch>

            {/* 메인 컨테이너 컴포넌트 불러오기 */}
            <Switch>
              <Route exact path='/login' render={(props)=><Login></Login>} />
              <Route path='/' render={(props)=><MainContainer {...props}/>} />
            </Switch>

            {/* footer 컴포넌트 불러오기 */}
            {/* 보내줄 데이터는 footer에 표시할 데이터가 담은 footerdata, 제목은 infodata의 name */}
            <Switch>
              <Route exact path='/login' />
              <Route path='/' render={(props)=><Footer data={footerdata} title={infodata.name} url="#pablo"/>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(
  (state) => ({
      data: state.layout
  }),
  (dispatch) => ({
      LayoutActions: bindActionCreators(layoutActions, dispatch)
  })
)(App);