import React, { Component } from 'react';
import Footer from '../Footer.js';
import From from './Form.js';
import LoginBtn from './LoginBtn.js';
import {Redirect} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from '../../Redux/Login';


class Viewer extends Component {

    constructor(props){
        super(props);

        this.LoginEnter = this.LoginEnter.bind(this);
    }

    LoginEnter(event) {
        if(event.key === "Enter"){
            this.props.LoginActions.checkLogin(this.props.data);
        }
    }

    componentDidMount() {
        document.addEventListener('keypress',this.LoginEnter);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.LoginEnter);
     }

    render() {

        let redirect = "";

        if(this.props.redirect){
            redirect = <Redirect to={'/'} />
        }

        let infodata = [];
        let footerdata = [];
    
        if(this.props.infodata !== undefined){
          infodata = this.props.infodata;
          footerdata = this.props.footerdata;
        }

        return (
            <div className="page-header header-filter">
                <img className="login-bg" src={'/assets/img/bg10.jpg'} alt={this.props.bgImageAlt} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                            <div className="card card-signup">
                                <From saveEmail={this.saveEmail} savePassWord={this.savePassWord} />
                                <LoginBtn login={this.login} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer data={footerdata} title={infodata.name} footerString={'© 2018, made with  by GG'} url="#pablo"/>
                {
                    redirect
                }
            </div>
        )
    }

}

export default connect(
    (state) => ({
        footerdata : state.layout.footer,
        infodata : state.layout.info[0],
        redirect : state.login.redirect,
        data : state.login.data
    }),
    (dispatch) => ({
        LoginActions: bindActionCreators(loginActions, dispatch)
    })
  )(Viewer);