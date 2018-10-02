import React, { Component } from 'react';

// import bgImg from 'imgUrl';
class LoginBtn extends Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (
            <div>
                <div className="footer text-center">
                    <a href="#pablo" className="btn btn-primary btn-simple btn-wd btn-lg" onClick={this.props.login}>Login</a>
                </div>
            </div>
        )
    }
}

export default LoginBtn;