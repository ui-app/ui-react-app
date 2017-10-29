import React, {Component} from 'react';
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
        <User setName = {this.setName} setAge = {this.setAge} />
        <View name = {this.state.name} age={this.state.age}  />
      </div>
    );
  }
}

export default App;
