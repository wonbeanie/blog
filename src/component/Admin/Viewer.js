import React, { Component } from 'react';
import $ from 'jquery';
import AdminTable from './AdminTable';
import AdminTable2 from './AdminTable2';

// import bgImg from 'imgUrl';
class Viewer extends Component {

    constructor(props) {

        super(props);

        this.state = {

        }
        
    }

    componentDidMount(){
        $('#maincontainer').removeClass('container');
        $('#maincontainer').addClass('container-fluid');
    }

    render() {

      let blogInfoData = [
        {
          key : "Blog Name",
          value : "Blog-Project",
          savetype : "string"
        },
        {
          key : "Description",
          value : "This is Blog-Project in blockware",
          savetype : "string"
        },
        {
          key : "LogoImg",
          value : "/assets/img/logo.png",
          savetype : "file"
        },
        {
          key : "BackgroundImg",
          value : "/assets/img/bg10.jpg",
          savetype : "file"
        }
      ];
      
      let CategoryInfoData = [
        [
          {
            key : "Type",
            value : "Menu",
            savetype : "dropdown"
          },
          {
            key : "Title",
            value : "Posting",
            savetype : "string"
          },
          {
            key : "MaterialIcon",
            value : "apps",
            savetype : "string"
          },
          {
            key : "Url",
            value : "posting",
            savetype : "string"
          },
          {
            key : "data",
            value : "null",
            savetype : "null"
          }
        ],
        [
          {
            key : "Type",
            value : "DropDown",
            savetype : "dropdown"
          },
          {
            key : "Title",
            value : "Examples",
            savetype : "string"
          },
          {
            key : "MaterialIcon",
            value : "apps",
            savetype : "view_carousel"
          },
          {
            key : "Url",
            value : "null",
            savetype : "null"
          },
          {
            key : "ListData",
            name: "display",
            parentKey : null,
            value : [
              [
                {
                  key : "Title",
                  value : "dns",
                  savetype : "string",
                  parentKey : "LisData"
                },
                {
                  key : "MaterialIcon",
                  value : "dns",
                  savetype : "string"
                },
                {
                  key : "Url",
                  value : "https://naver.com",
                  savetype : "string"
                }
              ],
              [
                {
                  key : "Title",
                  value : "view_day",
                  savetype : "string"
                },
                {
                  key : "MaterialIcon",
                  value : "view_day",
                  savetype : "string"
                },
                {
                  key : "Url",
                  value : "https://naver.com",
                  savetype : "string"
                }
              ],
            ],
            savetype : "list"
          }          
        ]
      ];

      let SnsInfoData = [
        {
          key : "Blog Name",
          value : "Blog-Project",
          savetype : "string"
        },
        {
          key : "Description",
          value : "This is Blog-Project in blockware",
          savetype : "string"
        },
        {
          key : "LogoImg",
          value : "/assets/img/logo.png",
          savetype : "file"
        },
        {
          key : "BackgroundImg",
          value : "/assets/img/bg10.jpg",
          savetype : "file"
        }
      ];

      let MenuInfoData = [
        {
          key : "Blog Name",
          value : "Blog-Project",
          savetype : "string"
        },
        {
          key : "Description",
          value : "This is Blog-Project in blockware",
          savetype : "string"
        },
        {
          key : "LogoImg",
          value : "/assets/img/logo.png",
          savetype : "file"
        },
        {
          key : "BackgroundImg",
          value : "/assets/img/bg10.jpg",
          savetype : "file"
        }
      ];
        console.log("------------------");
        return (
            <div>
                <div className="col-md-12 adminpage">
                    <div className="row">
                        <div className="col-md-1">
                            <ul className="nav nav-pills nav-pills-icons nav-stacked" role="tablist">
                                <li className="active">
                                    <a href="#bloginfo" role="tab" data-toggle="tab">
                                        <i className="material-icons">info</i>
                                        blog info
                                    </a>
                                </li>
                                <li >
                                    <a href="#categoryinfo" role="tab" data-toggle="tab">
                                        <i className="material-icons">category</i>
                                        category info
                                    </a>
                                </li>
                                <li >
                                    <a href="#snsinfo" role="tab" data-toggle="tab">
                                        <i className={"fa fa-twitter"}></i>
                                        sns info
                                    </a>
                                </li>
                                <li >
                                    <a href="#menuinfo" role="tab" data-toggle="tab">
                                        <i className="material-icons">menu</i>
                                        menu info
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-11">
                            <div className="tab-content">
                                <div className="tab-pane active" id="bloginfo">
                                  <AdminTable InfoData={blogInfoData}/>
                                </div>
                                <div className="tab-pane" id="categoryinfo">
                                  <AdminTable2 InfoData={CategoryInfoData}/>
                                </div>
                                <div className="tab-pane" id="snsinfo">
                                  <AdminTable InfoData={SnsInfoData}/>
                                </div>
                                <div className="tab-pane" id="menuinfo">
                                  <AdminTable InfoData={MenuInfoData}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Viewer;