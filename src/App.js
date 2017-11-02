import React, {Component} from 'react';
import { Grid, Row, Col  } from 'react-bootstrap';
import User from './User'
import View from './View'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Joe",
      age: 33
    };
    this.setName =this.setName.bind(this);
    this.setAge = this.setAge.bind(this);

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
      </div>
    );
  }
}

export default App;
