import React, {Component} from 'react';

class DropDownBox extends Component {

  constructor(props){
    super(props);
    this.generateopt = this.generateopt.bind(this);
    this.valueChange =this.valueChange.bind(this);

  }

  generateopt(data){
    return (<option key={data.id} value={data.id}>{data.name}</option>)
  }


  valueChange(e){
    this.props.valueChange(e.target.value)
    console.log(e.target.value)
  }
  render() {

    return (
      <div className="DropDownBox">
      <select disabled={this.props.disabled} style={{width: 200}} value = {this.props.checkedOption} onChange={this.valueChange}>
      {this.props.options.map(this.generateopt)}
      </select>
      </div>
    );
  }
}

export default DropDownBox;
