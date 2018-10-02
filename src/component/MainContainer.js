import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios';
import List from './List/Viewer';
import Edit from './Edit/Viewer';
import Writing from './Writing/Viewer';
import Post from './Post/Viewer';
import Delete from './Delete/Viewer';
import AdminEdit from './Admin/AdminEdit/Viewer';
import Admin from './Admin/Viewer';

class MainContainer extends Component {

    constructor(props){
        super(props);
    }

    checkSession() {
        // console.log("a");
        // axios.get('http://52.64.148.42:8080/user/login/session')
        // .then((res) => {
        //     // console.log(res);
        // });
    }

    render() {

        // this.checkSession();

        return (
            <div className="main main-raised">
                <div id="maincontainer" className="container">
                    {/* route를 이용하여 component 바꿔주기 */}
                    <Route path="/" component={List} exact/>
                    <Route path="/delete" component={Delete}/>
                    <Route path="/edit/:PostNum" component={Edit} />
                    <Route path="/posting" component={Writing} />
                    <Route path="/post/:PostNum" component={Post} />
                    <Route path="/admin" component={Admin} exact/>
                    <Route path="/admin/adminedit" component={AdminEdit}/>
                </div>
            </div>
        )
    }

}

export default MainContainer;