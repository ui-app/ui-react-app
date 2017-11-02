import React, {Component} from 'react';
import { Button, FormControl, Grid, Row, Col  } from 'react-bootstrap';
class User extends Component {

constructor(props) {
  super(props);
  this.setName = this.setName.bind(this);
  this.setAge = this.setAge.bind(this);
}
  setName(){
    this.props.setName(this.setNameValue.value)
    this.setNameValue.value = ''
  }
  setAge(){
    this.props.setAge(this.setAgeValue.value)
    this.setAgeValue.value = ''
  }
  render() {
    return (
      <div className="User">
      <Grid>
       <Row className="show-grid" style={{margin: "10px"}}>
         <Col md={1}>
          <Button bsStyle="success" onClick={this.setName}>Set Name</Button>
          </Col>
          <Col md={2}>
          <FormControl type="text" placeholder="Enter name" inputRef={ref => { this.setNameValue = ref; }}  />
          </Col>
      </Row>
      <Row className="show-grid" style={{margin: "10px"}}>
         <Col md={1}>
          <Button bsStyle="success" onClick={this.setAge}>Set Age</Button>
        </Col>
        <Col md={2}>
          <FormControl type="text" placeholder="Enter age"  inputRef={ref => { this.setAgeValue = ref; }} />
        </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}

export default User;
