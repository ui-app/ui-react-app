import React, {Component} from 'react';

class User extends Component {

constructor(props) {
  super(props);
  this.state = {
  };
  this.setName = this.setName.bind(this);
  this.setAge = this.setAge.bind(this);
}
  setName(){
    var newName = this.props.setName(this.refs.setName.value)
    this.refs.setName.value = ''
    return newName
  }
  setAge(){
    var newAge = this.props.setAge(this.refs.setAge.value)
    this.refs.setAge.value = ''
    return newAge
  }
  render() {
    return (
      <div className="User">
        <form>
          <input type="button" value="Set Name" onClick={this.setName} />
          <input type="text" name="name" ref="setName" />
        </form>
        <form>
          <input type="button" value="Set Age" onClick={this.setAge} />
          <input type="text" name="age" ref="setAge" />
        </form>
      </div>
    );
  }
}

export default User;
