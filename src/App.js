import React, {Component} from 'react';
import { Grid, Row, Col  } from 'react-bootstrap';
import User from './User'
import View from './View'
import DropDownBox from './DropDownBox'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Joe",
      age: 33,
      options: [{id: 'select', name: 'select'},
                {id: 'B', name: 'Booo'},
                {id: 'C', name: 'Cooo'},
                {id: 'A', name: 'Aooo'}],
      isChecked: "N",
      isDisable: true,
      checkedOption: 'A'
    };
    this.setName =this.setName.bind(this);
    this.setAge = this.setAge.bind(this);
    this.valueChange =this.valueChange.bind(this);
    this.optionChange = this.optionChange.bind(this);

  }

  setName(name){
    this.setState(() => {
      return {name: name};
    });
  }

  setAge(age){
    this.setState(() => {
      return {age: age};
    });
  }

  valueChange(data){
    this.setState({
      checkedOption: data
    })
  }
  optionChange(e){
    if(e.target.value === "Y"){
      this.setState({
        isChecked: "Y",
        isDisable: true,
        checkedOption: 'select'
      })
    }else{
      this.setState({
        isChecked: "N",
        isDisable: false
      })
    }

    console.log(this.state.isChecked)

  }
  render() {
    return (
      <div className="App">
      <Grid>
       <Row className="show-grid" style={{margin: "10px"}}>
         <Col md={4}>
          <User setName = {this.setName} setAge = {this.setAge} />
          </Col>
          <Col md={4}>
          <View name = {this.state.name} age={this.state.age}  />
          </Col>
      </Row>
      </Grid>
      <br />
      <h4>If yes the dropdown box should go to select if other value selected before and disable the dropdown box</h4>
      <div className="radio">
        <label>
          <input type="radio" value="Y" checked={this.state.isChecked === "Y"} onChange={this.optionChange} />
          Disable Yes
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="N" checked={this.state.isChecked === "N"} onChange={this.optionChange} />
          Disable No
        </label>
      </div>
      <br />
      <DropDownBox disabled={this.state.isDisable} checkedOption={this.state.checkedOption} options ={this.state.options} valueChange={this.valueChange}/>
      {this.state.checkedOption}
      </div>
    );
  }
}

export default App;
