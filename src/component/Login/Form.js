import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from '../../Redux/Login';

// import bgImg from 'imgUrl';
class Form extends Component {

    constructor(props) {

        super(props);

        this.changeEmail = this.changeEmail.bind(this);

        this.changePassWord = this.changePassWord.bind(this);
    }

    changeEmail(event) {
        this.props.LoginActions.saveEmail(event.target.value);
    }

    changePassWord(event) {
        this.props.LoginActions.savePw(event.target.value);
    }

    render() {

        return (
            <div>
                <div className="header header-primary text-center">
                    <h4 className="card-title">Log in</h4>
                </div>
                <div className="card-content">

                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="material-icons">email</i>
                        </span>
                        <input type="text" className="form-control" placeholder="Email..." onChange={this.changeEmail}/>
                    </div>

                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="material-icons">lock_outline</i>
                        </span>
                        <input type="password" placeholder="Password..." className="form-control" onChange={this.changePassWord}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    undefined,
    (dispatch) => ({
        LoginActions: bindActionCreators(loginActions, dispatch)
    })
  )(Form);