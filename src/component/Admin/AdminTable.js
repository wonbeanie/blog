import React, { Component } from 'react';

class AdminTable extends Component {

  constructor(props){
    super(props);

    this.state = {
      inputvalue : ""
    }

    this.savevalue = this.savevalue.bind(this);
  }


  savevalue(event) {
    this.setState({
      inputvalue : event.target.value
    });
  }

  typeMapping(data,num){
    if(data.savetype === "string"){
      return (
        <tr key={num}>
            <td>{data.key}</td>
            <td>{data.value}</td>
            <td>
              <input type="text" value="" placeholder="Value..." className="form-control" />
            </td>
        </tr>
      )
    }
    else {
      return (
        <tr key={num}>
            <td>{data.key}</td>
            <td>
              <img src={data.value} className="img img-raised img-rounded" width="100px" height="100px" alt=""/>
            </td>
            <td>
              <div className="form-group form-file-upload">
                <input type="file" id="inputFile2" multiple="" />
                <div className="input-group">
                  <input type="text" readOnly="" className="form-control" placeholder="File..." />
                  <span className="input-group-btn input-group-s">
                    <button type="button" className="btn btn-just-icon btn-round btn-primary">
                      <i className="material-icons">attach_file</i>
                    </button>
                  </span>
                </div>
              </div>
            </td>
        </tr>
      )
    }
  }


  render() {

    return (
      <div>
        <div className="col-md-10 col-md-offset-1">
          <div className="table-responsive">
          <table className="table">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Current value</th>
                      <th>Value</th>
                  </tr>
              </thead>
              <tbody>

                  {
                    this.props.InfoData.map((data,num)=>{
                      return this.typeMapping(data,num);
                    })
                  }

              </tbody>
            </table>
            </div>
        </div>

      </div>
    );
  }
}

export default AdminTable;