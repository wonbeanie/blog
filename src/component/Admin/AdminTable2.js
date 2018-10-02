import React, { Component } from 'react';
import TypeMapping from './TypeMapping';

class AdminTable2 extends Component {

  constructor(props){
    super(props);

    this.state = {
      InfoData : this.props.InfoData
    }

    this.savevalue = this.savevalue.bind(this);
    this.abc = this.abc.bind(this);
  }


  savevalue(event) {
    this.setState({
      inputvalue : event.target.value
    });
  }

  abc = (data) => {
    this.setState({
      InfoData : this.props.InfoData
    });
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
                    this.state.InfoData.map((data,num)=>{
                      return <TypeMapping key={num} data={data} abc={this.abc}/>
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

export default AdminTable2;